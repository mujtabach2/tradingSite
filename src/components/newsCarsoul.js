import React from "react";

const Slider = require("react-slick");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");

export const NewsCarousel = ({ newsArticles, newsSentimentScores }) => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-md mx-auto p-8">
        <Slider ref={sliderRef} {...settings}>
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

export default NewsCarousel;
