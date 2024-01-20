import * as React from "react"
import axios from 'axios';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function NewsCarousel() {
  const [newsArticles, setNewsArticles] = React.useState([]);

  React.useEffect(() => {
    const apiKey = 'YOUR_NEWS_API_KEY';
    const stockSymbol = 'AAPL'; // Replace with the stock symbol or company name
    const apiUrl = `https://newsapi.org/v2/everything?q=${stockSymbol}&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then(response => setNewsArticles(response.data.articles.slice(0, 5))) // Limit to 5 articles
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {newsArticles.map((article, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                    <p className="text-sm">{article.title}</p>
                  </a>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
