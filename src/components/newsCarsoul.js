import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const NewsCarousel = ({ newsArticles, newsSentimentScores }) => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-black h-[35vh] w-[20vw] text-white overflow-hidden">
      <div className="max-w-[20vw] h-[35vh] mx-auto p-8">
        <Slider ref={sliderRef} {...settings} className="h-full">
          {newsArticles.map((article, index) => (
            <div key={index} className="p-4 h-full">
              <div className="flex flex-col items-center justify-center h-full">
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
                <p className="text-sm mt-[-2vh] text-white">
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
