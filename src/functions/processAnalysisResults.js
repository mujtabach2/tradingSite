import functions from "firebase-functions";
import csv from "csv-parser";
import { Readable } from "stream";
import { OpenAi } from "./openAi";
import makeDecision from "./decision";
import { getTweets } from "./SentimentAnalysis/twitterSa";
import { getRedditSentiment } from "./SentimentAnalysis/redditSa";
import { getNewsSentiment } from "./NewsCarousel";
// will move to firebase functions later

let bestStock;
exports.processAnalysisResults = functions.https.onCall(
  async (data, context) => {
    try {
      // Assuming the Cloud Function result is an object with metrics
      const metrics = result.data;

      // Define weights for each metric
      const weights = {
        'Annual Returns': 0.4,
        'Max Drawdown': -0.3,  // Negative weight if lower values are better
        'Sharpe Ratio': 0.2,
        'Calmar Ratio': 0.3,
      };

      // Calculate scores for each stock
      const scores = {};

      for (const stock in metrics) {
        const stockMetrics = metrics[stock];
        let score = 0;

        for (const metric in stockMetrics) {
          score += stockMetrics[metric] * weights[metric];
        }

        scores[stock] = score;
      }

      // Find the stock with the highest score
      bestStock = Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));

      // Extract metrics for the best stock
      const annualizedReturn = metrics[bestStock]["Annual Returns"];
      const sharpeRatio = metrics[bestStock]["Sharpe Ratio"];
      const maxDrawdown = metrics[bestStock]["Max Drawdown"];
      const calmarRatio = metrics[bestStock]["Calmar Ratio"];




      // Extract sentiment scores
      const twitterSentiment = await getTweets(bestStock);
      const redditSentiment = await getRedditSentiment(bestStock);

      const newsSentiment = await getNewsSentiment(bestStock);

      // Make a decision based on the analysis results
      const conclusion = makeDecision(
        annualizedReturn,
        sharpeRatio,
        maxDrawdown,
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
        conclusion,
        twitterSentiment,
        redditSentiment,
        newsSentiment,
      );

      // Call the run method
      const result = openAiInstance.run();

      console.log("Processing Analysis Results:", result);
      return "Processing complete!";
    } catch (error) {
      console.error("Error:", error.message);
      throw new functions.https.HttpsError("internal", "Internal Server Error");
    }
  },
);

// Function to parse CSV data
async function parseCSV(csvBuffer) {
  return new Promise((resolve, reject) => {
    const stream = new Readable();
    stream.push(csvBuffer);
    stream.push(null);

    const results = [];

    stream
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results[0]))
      .on("error", (error) => reject(error));
  });
}

export {bestStock}