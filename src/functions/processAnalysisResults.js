import functions from "firebase-functions";
import csv from "csv-parser";
import { Readable } from "stream";
import { OpenAi } from "./openAi";
import makeDecision from "./decision";
import { getTweets } from "./SentimentAnalysis/twitterSa";
import { getRedditSentiment } from "./SentimentAnalysis/redditSa";
import { getNewsSentiment } from "./NewsCarousel";
// will move to firebase functions later

exports.processAnalysisResults = functions.https.onCall(
  async (data, context) => {
    try {
      // Read CSV data
      const csvData = await parseCSV(data);

      // Extract required fields
      const { annualizedReturn, sharpeRatio, maxDrawdown } = csvData;

      // Extract sentiment scores
      const twitterSentiment = await getTweets();
      const redditSentiment = await getRedditSentiment();

      const newsSentiment = await getNewsSentiment();

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
        "AAPL",
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
