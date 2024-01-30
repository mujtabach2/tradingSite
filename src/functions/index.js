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
const { makeDecision } = require("./decison.js");
const { getTweets } = require("./SentimentAnalysis/twitterSa.js");
const { getRedditSentiment } = require("./SentimentAnalysis/redditSa.js");
const NewsCarousel = require("./news.js");

// need to make this in to cron job to run every 24 hours on weekdays at 11:00 AM
exports.processAnalysisResults = functions.https.onRequest(
  async (data, response) => {
    try {
      // Assuming the Cloud Function result is an object with metrics
      console.log("Processing Analysis Results:", data);
      const metrics = {
        "Annual Returns": data[0],
        "Max Drawdown": data[1],
        "Sharpe Ratio": data[2],
        "Calmar Ratio": data[3],
      };
      // Define weights for each metric
      const weights = {
        "Annual Returns": 0.4,
        "Max Drawdown": 0.1,
        "Sharpe Ratio": 0.2,
        "Calmar Ratio": 0.3,
      };

      // Calculate scores for each stock
      const scores = {};
      for (const stock in metrics) {
        if (Object.prototype.hasOwnProperty.call(metrics, stock)) {
          const stockMetrics = metrics[stock];
          let score = 0;

          for (const metric in stockMetrics) {
            if (Object.prototype.hasOwnProperty.call(stockMetrics, metric)) {
              score += stockMetrics[metric] * weights[metric];
            }
          }

          scores[stock] = score;
        }
      }

      // Find the stock with the highest score
      const bestStock = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b,
      );

      // Extract metrics for the best stock
      const annualizedReturn = metrics[bestStock]["Annual Returns"];
      const sharpeRatio = metrics[bestStock]["Sharpe Ratio"];
      const maxDrawdown = metrics[bestStock]["Max Drawdown"];
      const calmarRatio = metrics[bestStock]["Calmar Ratio"];

      // Extract sentiment scores
      const twitterSentiment = await getTweets(bestStock);
      const redditSentiment = await getRedditSentiment(bestStock);

      // Fetch news articles and their sentiment scores
      const newsCarousel = new NewsCarousel(bestStock);
      const newsData = await newsCarousel.fetchNews();
      const newsSentiment = newsData.averageScore;

      // Make a decision based on the analysis results
      const conclusion = makeDecision(
        annualizedReturn,
        sharpeRatio,
        maxDrawdown,
        calmarRatio,
        twitterSentiment,
        redditSentiment,
        newsSentiment,
      );

      // Create an instance of the OpenAi class
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
      const result = openAiInstance.run();

      const firestore = admin.firestore();
      const analysisResultsRef = firestore.collection("analysisResults").doc();

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
      });

      // Store news sentiment articles separately
      const newsSentimentArticlesRef = firestore
        .collection("newsSentimentArticles")
        .doc();
      await newsSentimentArticlesRef.set({
        articleTitle: newsData.newsArticles.title,
        articleUrl: newsData.newsArticles.url,
        articleSentiment: newsData.averageScore,
        articleImage: newsData.newsArticles.urlToImage,
      });

      console.log("Processing Analysis Results:", result);
      response.send(result);
    } catch (error) {
      console.error("Error:", error.message);
      throw new functions.https.HttpsError(
        "internal",
        "Internal Server Error detected",
      );
    }
  },
);
