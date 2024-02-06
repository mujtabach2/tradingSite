const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const tactistreamConfig = {
  apiKey: process.env.RAPID_API_KEY,
  host: "tactistream.p.rapidapi.com",
};

// Function to get sentiment analysis for stock-related data
const getRedditSentiment = async (bestStock) => {
  const today = new Date();
  //  YYYY-MM-DD
  const formattedStartDate = today.toISOString().split("T")[0];

  console.log("callad getRedditSentiment");
  const options = {
    method: "GET",
    url: "https://tactistream.p.rapidapi.com/api/v1/sentiment/summary",
    params: {
      tickers: bestStock,
      from_date: "2023-11-15",
      to_date: formattedStartDate,
    },
    headers: {
      "X-RapidAPI-Key": tactistreamConfig.apiKey,
      "X-RapidAPI-Host": tactistreamConfig.host,
      "Access-Control-Allow-Origin": "*", // Allow requests from any origin
      "Access-Control-Allow-Methods": "GET", // Allow only GET requests
      "Access-Control-Allow-Headers":
       "Origin, X-Requested-With, Content-Type, Accept",
    },
  };

  try {
    const response = await axios.request(options);
    console.log("Reddit sent", response);
    return response.data.sentiment;
  } catch (error) {
    console.log("Error fetching Reddit sentiment:", error.message);
  }
};

module.exports = {getRedditSentiment};
