import React, { useEffect, useState } from "react";
import axios from "axios";
import Sentiment from "sentiment";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NEWS_API_KEY } from "../config";
import { bestStock } from "./processAnalysisResults";



export function NewsCarousel() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [newsSentimentScores, setNewsSentimentScores] = useState([]);
  const sliderRef = React.useRef(null);
  const [newsStock, setNewsStock] = useState();

  setNewsStock(bestStock);
  
  
  useEffect(() => {
    const apiKey = NEWS_API_KEY || "";
    const stockSymbol = newsStock || "AAPL";
    const apiUrl = `https://newsapi.org/v2/everything?q=${stockSymbol}&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const articles = response.data.articles.slice(0, 5);
        setNewsArticles(articles);

        const sentiment = new Sentiment();
        const scores = articles.map(
          (article) => sentiment.analyze(article.title).score
        );
        setNewsSentimentScores(scores);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 3000, 
  };


 
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-md mx-auto p-8">
        <Slider ref={sliderRef} {...settings} >
          {newsArticles.map((article, index) => (
            <div key={index} className="p-4">
              <div className="flex flex-col items-center justify-center">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center"
                >
                  <span className="text-4xl font-semibold">{index + 1}</span>
                  <p className="text-sm mt-2">{article.title}</p>
                </a>
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="mt-4 object-cover w-full h-40 md:h-64 rounded"
                />
                <p className="text-sm mt-2">
                  Sentiment Score: {newsSentimentScores[index]}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};


// Function to get news sentiment scores
export function getNewsSentiment(articles) {
  const sentiment = new Sentiment();
  const scores = articles.map((article) => sentiment.analyze(article.title).score);
  return scores;
}

// Exporting the getNewsSentiment function
