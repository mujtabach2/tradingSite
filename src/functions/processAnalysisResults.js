import functions from 'firebase-functions';
import csv from 'csv-parser';
import { Readable } from 'stream';
import { OpenAi } from './openAi';
import makeDecision from './decision';
import { getTweets } from './SentimentAnalysis/twitterSa';
import { getSubredditComments, getOverallRedditComments, analyzeSentiment } from './SentimentAnalysis/redditSa';

exports.processAnalysisResults = functions.https.onCall(async (data, context) => {
    try {
        // Read CSV data
        const csvData = await parseCSV(data);

        // Extract required fields
        const { annualizedReturn, sharpeRatio, maxDrawdown} = csvData;

        // Extract sentiment scores
        //TODO
        const twitterSentiment = await getTweets("AAPL");

        const subreddit = 'wallstreetbets';
        const overallRedditScore = await analyzeSentiment(await getOverallRedditComments());
        const subredditScore = await analyzeSentiment(await getSubredditComments(subreddit));
        const redditSentiment = 0.6 * overallRedditScore + 0.4 * subredditScore;


        // Make a decision based on the analysis results
        const conclusion = makeDecision(annualizedReturn, sharpeRatio, maxDrawdown, twitterSentiment, redditSentiment);

        // Create an instance of the OpenAi class
        const openAiInstance = new OpenAi("AAPL", annualizedReturn, sharpeRatio, maxDrawdown, conclusion);

        // Call the run method
        const result = openAiInstance.run();

        console.log('Processing Analysis Results:', result);
        return "Processing complete!";
    } catch (error) {
        console.error('Error:', error.message);
        throw new functions.https.HttpsError('internal', 'Internal Server Error');
    }
});

// Function to parse CSV data
async function parseCSV(csvBuffer) {
    return new Promise((resolve, reject) => {
        const stream = new Readable();
        stream.push(csvBuffer);
        stream.push(null);

        const results = [];

        stream
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results[0])) 
            .on('error', (error) => reject(error));
    });
}
