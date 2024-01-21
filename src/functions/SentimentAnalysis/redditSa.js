import axios from "axios";
import Sentiment from "sentiment";

import dotenv from "dotenv";
dotenv.config();

const tactistreamConfig = {
  apiKey: process.env.RAPID_API_KEY, // Replace with your Tactistream API key
  host: "tactistream.p.rapidapi.com",
};

const stockSymbol = "AAPL";
const sentiment = new Sentiment();

// Function to get sentiment analysis for stock-related data
const getRedditSentiment = async () => {
  const options = {
    method: "GET",
    url: "https://tactistream.p.rapidapi.com/api/v1/sentiment/summary",
    params: {
      tickers: stockSymbol,
      from_date: "2023-11-15",
      to_date: "2023-11-17",
    },
    headers: {
      "X-RapidAPI-Key": tactistreamConfig.apiKey,
      "X-RapidAPI-Host": tactistreamConfig.host,
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data; // Adjust as needed based on the API response structure

    // Assuming the sentiment data is available in response.data.sentiment
    const sentimentData = data.sentiment || [];

    // Extracting comments from sentiment data, adjust this based on the actual API response structure
    const comments = sentimentData.map((item) => item.comment);

    return analyzeSentiment(comments);
  } catch (error) {
    console.error(`Error fetching stock sentiment: ${error.message}`);
    return null;
  }
};

// Function to analyze sentiment of comments
const analyzeSentiment = (comments) => {
  let overallScore = 0;

  comments.forEach((comment) => {
    const analysis = sentiment.analyze(comment);
    overallScore += analysis.score;

    console.log(`Comment: ${comment}`);
    console.log(`Sentiment Score: ${analysis.score}`);
    console.log("---");
  });

  const averageScore = overallScore / comments.length;
  console.log(`Overall Sentiment Score for ${stockSymbol}: ${averageScore}`);
  return averageScore;
};

export { getRedditSentiment };
