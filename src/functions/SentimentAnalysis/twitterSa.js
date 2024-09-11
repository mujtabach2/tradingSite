const axios = require("axios");
const Sentiment = require("sentiment");
const dotenv = require("dotenv");
dotenv.config();

const rapidAPIConfig = {
  apiKey: process.env.RAPID_API_KEY, // Replace with your RapidAPI key
};

const sentiment = new Sentiment();

// Function to get tweets containing the stock symbol
const getTweets = async (bestStock) => {
  console.log("called getTweets");
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const formattedStartDate = oneWeekAgo.toISOString().split("T")[0];
  const options = {
    method: "GET",
    url: "https://twitter154.p.rapidapi.com/search/search",
    headers: {
      "X-RapidAPI-Key": rapidAPIConfig.apiKey,
      "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET", // Allow only GET requests
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
    params: {
      query: `#${bestStock}`,
      section: "top",
      min_retweets: "1",
      min_likes: "1",
      limit: "100",
      start_date: formattedStartDate,
      language: "en",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(" twitter response", response);
    const tweets = Array.isArray(response.data.results) ?
      response.data.results :
      [];
    const returned = analyzeSentiment(tweets);
    console.log("returned twitter", returned);
    return returned;
  } catch (error) {
    console.error(`Error fetching tweets: ${error.message}`);
    return null;
  }
};

// Function to analyze sentiment of tweets
const analyzeSentiment = (tweets) => {
  console.log("called analyzeSentiment", tweets);
  let overallScore = 0;

  tweets.forEach((tweet) => {
    const tweetText = tweet.text || "";
    const analysis = sentiment.analyze(tweetText);
    overallScore += analysis.score;
  });

  const averageScore = overallScore / tweets.length;

  return averageScore;
};

module.exports = {getTweets, analyzeSentiment};
