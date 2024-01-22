import * as React from "react";
import axios from "axios";
import Sentiment from "sentiment";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../@/components/ui/carousel"
import { Card, CardContent } from "../@/components/ui/card"

import dotenv from "dotenv";



export function NewsCarousel() {
  const [newsArticles, setNewsArticles] = React.useState([]);
  const [newsSentimentScores, setNewsSentimentScores] = React.useState([]);

  React.useEffect(() => {
    const apiKey = process.env.NEWS_API_KEY || "";
    const stockSymbol = "AAPL"; // Replace with the stock symbol or company name
    const apiUrl = `https://newsapi.org/v2/everything?q=${stockSymbol}&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const articles = response.data.articles.slice(0, 5); // Limit to 5 articles
        setNewsArticles(articles);

        // Perform sentiment analysis and store scores
        const sentiment = new Sentiment();
        const scores = articles.map(
          (article) => sentiment.analyze(article.title).score,
        );
        setNewsSentimentScores(scores);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  // Function to get news sentiment scores


  return (
    <div>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {newsArticles.map((article, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                      <p className="text-sm">{article.title}</p>
                    </a>
                    <p className="text-sm mt-2">
                      Sentiment Score: {newsSentimentScores[index]}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

// Function to get news sentiment scores
export default function getNewsSentiment(articles) {
  const sentiment = new Sentiment();
  const scores = articles.map((article) => sentiment.analyze(article.title).score);
  return scores;
}

// Exporting the getNewsSentiment function
