const axios = require("axios");

const {RAPID_API_KEY} = require("../config");

const tactistreamConfig = {
  apiKey: RAPID_API_KEY,
  host: "tactistream.p.rapidapi.com",
};

// Function to get sentiment analysis for stock-related data
const getRedditSentiment = async (bestStock) => {
  const options = {
    method: "GET",
    url: "https://tactistream.p.rapidapi.com/api/v1/sentiment/summary",
    params: {
      tickers: bestStock,
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
    console.log(response.data);
    return response.data.sentiment;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {getRedditSentiment};
