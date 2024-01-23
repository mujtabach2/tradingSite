import axios from "axios";
import Sentiment from "sentiment";
import dotenv from "dotenv";
dotenv.config();
import { RAPID_API_KEY } from "../config";
const rapidAPIConfig = {
  apiKey: RAPIDAPI_KEY || "", // Replace with your RapidAPI key
};

const stockSymbol = "AAPL"; // Replace with the desired stock symbol
const sentiment = new Sentiment();

// Function to get tweets containing the stock symbol
const getTweets = async () => {
  const options = {
    method: "POST",
    url: "https://twitter154.p.rapidapi.com/search/search",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": rapidAPIConfig.apiKey,
      "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
    },
    data: {
      query: `#${stockSymbol}`,
      limit: 100, // Adjust as needed
      section: "top",
      language: "en",
      min_likes: 20,
      min_retweets: 20,
      start_date: "2022-01-01",
    },
  };

  try {
    const response = await axios.request(options);
    return analyzeSentiment(response.data);
  } catch (error) {
    console.error(`Error fetching tweets: ${error.message}`);
    return null;
  }
};

// Function to analyze sentiment of tweets
const analyzeSentiment = (tweets) => {
  let overallScore = 0;

  tweets.forEach((tweet) => {
    const tweetText = tweet.text || ""; // Adjust if the structure of the response is different
    const analysis = sentiment.analyze(tweetText);
    overallScore += analysis.score;

    console.log(`Tweet: ${tweetText}`);
    console.log(`Sentiment Score: ${analysis.score}`);
    console.log("---");
  });

  const averageScore = overallScore / tweets.length;
  return `Overall Sentiment Score for ${stockSymbol}: ${averageScore}`;
};

export { getTweets, analyzeSentiment };
