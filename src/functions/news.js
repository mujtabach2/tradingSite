
const {useEffect, useState} = require("react");
const axios = require("axios");
const Sentiment = require("sentiment");


const {NEWS_API_KEY} = require("./config");


/**
 * Class representing a NewsCarousel instance.
 * @param {string} bestStock - The best stock.
 *
 */
class NewsCarousel {
  constructor(bestStock) {
    this.newsArticles = [];
    this.newsSentimentScores = [];
    this.newsStock = bestStock || "AAPL";
  }

  async fetchNews() {
    const apiKey = NEWS_API_KEY || "";
    const apiUrl = `https://newsapi.org/v2/everything?q=${this.newsStock}&apiKey=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      const articles = response.data.articles.slice(0, 5);
      this.newsArticles = articles;

      const sentiment = new Sentiment();
      this.newsSentimentScores = articles.map(
        (article) => sentiment.analyze(article.content).score
      );
    } catch (error) {
      console.error("Error fetching news:", error);
    }

    return {newsArticles, newsSentimentScores};
}
}


// Exporting the getNewsSentiment function

module.exports = {NewsCarousel};