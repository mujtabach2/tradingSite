const axios = require("axios");
const Sentiment = require("sentiment");
const {RAPID_API_KEY} = require("../config");

const rapidAPIConfig = {
  apiKey: RAPID_API_KEY || "", // Replace with your RapidAPI key
};

const sentiment = new Sentiment();

// Function to get tweets containing the stock symbol
const getTweets = async (bestStock) => {
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const formattedStartDate = oneWeekAgo.toISOString().split("T")[0];
  const options = {
    method: "GET",
    url: "https://twitter154.p.rapidapi.com/search/search",
    headers: {
      "X-RapidAPI-Key": rapidAPIConfig.apiKey,
      "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
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
    const tweets = Array.isArray(response.data.results) ?
      response.data.results :
      [];
    return analyzeSentiment(tweets);
  } catch (error) {
    console.error(`Error fetching tweets: ${error.message}`);
    return null;
  }
};

// Function to analyze sentiment of tweets
const analyzeSentiment = (tweets) => {
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
