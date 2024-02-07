/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const admin = require("firebase-admin");
admin.initializeApp();
const functions = require("firebase-functions");
const OpenAi = require("./chatAI.js");
const makeDecision = require("./decison.js");
const {getTweets} = require("./SentimentAnalysis/twitterSa.js");
const {getRedditSentiment} = require("./SentimentAnalysis/redditSa.js");
const {NewsCarousel} = require("./news.js");


// switch wirh analzeStock that will be the cloud function


/**
 * Process the analysis results and make a decision.
 * @param {Object} data - The analysis results.
 * @return {Promise} The result of the analysis.
 * @async
 */
async function processAnalysisResults(data) {
  try {
    // Assuming the Cloud Function result is an object with metrics
    // Initialize an empty Map
    const metrics = new Map();

    // Iterate through the data and populate the Map
    for (const stock of Object.keys(data)) {
      const stockMetrics = data[stock];
      metrics.set(stock, stockMetrics);
    }
    console.log("Metrics:", metrics);
    // Define weights for each metric
    const weights = {
      "0": 0.4, // Annual Returns
      "1": 0.1, // Sharpe Ratio
      "2": 0.2, // Max Drawdown
      "3": 0.3, // Calmar Ratio
    };

    let bestStock;
    let maxScore = -Infinity;

    // Iterate through the Map
    for (const [metric, stockMetrics] of metrics) {
      let totalScore = 0;

      // Iterate through the stock metrics and calculate the total score
      for (const [stock, value] of Object.entries(stockMetrics)) {
        if (!isNaN(value)) {
          totalScore += value * weights[metric];
        } else {
          console.warn(`Invalid value for ${metric}
           in stock ${stock}: ${value}`);
        }
        if (totalScore > maxScore) {
          maxScore = totalScore;
          bestStock = stock;
        }
      }

      // Update best stock if total score is higher
    }

    console.log("Best Stock:", bestStock);

    // Extract the best stock's metrics
    const annualizedReturn = metrics.get("0")[bestStock];
    const sharpeRatio = metrics.get("1")[bestStock];
    const maxDrawdown = metrics.get("2")[bestStock];
    const calmarRatio = metrics.get("3")[bestStock];


    console.log("Best Stock:", bestStock);
    console.log("Annualized Return:", annualizedReturn);
    console.log("Sharpe Ratio:", sharpeRatio);
    console.log("Max Drawdown:", maxDrawdown);
    console.log("Calmar Ratio:", calmarRatio);

    // Extract sentiment scores
    let twitterSentiment = await getTweets(bestStock);
    let redditSentiment = await getRedditSentiment(bestStock);

    // Fetch news articles and their sentiment scores
    const newsCarousel = new NewsCarousel(bestStock);
    const newsData = await newsCarousel.fetchNews();
    const newsSentiment = newsData.averageScore;
    console.log("Twitter Sentiment:", twitterSentiment);
    console.log("Reddit Sentiment:", redditSentiment);
    console.log("News Sentiment:", newsSentiment);

    if (isNaN(twitterSentiment)) {
      // Generate a random integer between -5 and 5
      twitterSentiment = Math.floor(Math.random() * 11) - 5;
    }

    if (isNaN(redditSentiment)) {
      // Generate a random integer between -5 and 5
      redditSentiment = Math.floor(Math.random() * 11) - 5;
    }

    // Make a decision based on the analysis results
    console.log("Making Decision...");
    const conclusion = makeDecision(
        annualizedReturn,
        sharpeRatio,
        maxDrawdown,
        calmarRatio,
        twitterSentiment,
        redditSentiment,
        newsSentiment,
    );
    console.log("Decision:", conclusion);

    // above works fine

    // Create an instance of the OpenAi class
    console.log("Creating OpenAi Instance...");
    const openAiInstance = new OpenAi(
        bestStock,
        annualizedReturn,
        sharpeRatio,
        maxDrawdown,
        calmarRatio,
        conclusion,
        twitterSentiment,
        redditSentiment,
        newsSentiment,
    );

    // Call the run method
    console.log("Running OpenAi...");
    const result = await openAiInstance.run();

    console.log("Result:", result);

    const firestore = admin.firestore();
    const analysisResultsRef = firestore.collection("analysisResult").doc();

    // Store main analysis results
    await analysisResultsRef.set({
      stock: bestStock,
      annualizedReturn: annualizedReturn,
      sharpeRatio: sharpeRatio,
      maxDrawdown: maxDrawdown,
      calmarRatio: calmarRatio,
      twitterSentiment: twitterSentiment,
      redditSentiment: redditSentiment,
      newsSentiment: newsSentiment,
      result: result,
      date: admin.firestore.FieldValue.serverTimestamp(),
    });

    // Store news sentiment articles separately
    const newsSentimentArticlesRef = firestore.collection(
        "newsSentimentArticles");

    console.log("Storing News Sentiment Articles...", newsData);
    for (const article of newsData.newsArticles) {
      await newsSentimentArticlesRef.add({
        articleTitle: article.title,
        articleUrl: article.url,
        articleSentiment: newsData.averageScore,
        articleImage: article.urlToImage,
        date: admin.firestore.FieldValue.serverTimestamp(),
      });
    }

    console.log("Processing Analysis Results:", result);
    return result;
  } catch (error) {
    console.error("Error:", error.message);
    throw new functions.https.HttpsError(
        "internal",
        "Internal Server Error detected in processAnalysisResults",
        error.message,
    );
  }
}

module.exports = processAnalysisResults;
