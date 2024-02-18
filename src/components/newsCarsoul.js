import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const NewsCarousel = ({ newsArticles, newsSentimentScores }) => {
  return (
    <div className="h-[32vh] w-[17vw] bg-gray-900">
      <div className="text-white overflow-hidden">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "0px",
                  transform: "translateY(-50%)",
                  zIndex: "1",
                  cursor: "pointer",
                }}
              >
                &#10094;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0px",
                  transform: "translateY(-50%)",
                  zIndex: "1",
                  cursor: "pointer",
                }}
              >
                &#10095;
              </button>
            )
          }
        >
          {newsArticles.map((article, index) => (
            <div key={index}>
              <div className="p-4 h-full">
                <div className="flex flex-col items-center justify-center h-full">
                  <a
                    href={article.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center"
                  >
                    <p
                      className="news-title text-white text-[0.9rem] font-bold mb-2 hover:text-yellow-400"
                      style={{ lineHeight: "1.2" }}
                    >
                      {article.articleTitle}
                    </p>
                  </a>
                  <img
                    src={article.articleImage}
                    alt={article.articleTitle}
                    className="mt-4 object-cover w-full h-[18vh] rounded"
                    style={{ border: "2px solid rgb(250 204 21)" }}
                  />
                  <div className="news-item-sentiment flex flex-row text-sm mt-2 text-white gap-1 items-center">
                    <span className="sentiment-label mr-2 font-semibold">
                      Sentiment
                    </span>
                    <span className="sentiment-score flex items-center gap-1 ">
                      {(() => {
                        switch (Math.floor(newsSentimentScores[index])) {
                          case 5:
                            return (
                              <span className="emoji text-[1.3rem]">😍</span>
                            );
                          case 4:
                            return (
                              <span className="emoji text-[1.3rem]">🙂</span>
                            );
                          case 3:
                            return (
                              <span className="emoji  text-[1.3rem]">😐</span>
                            );
                          case 2:
                            return (
                              <span className="emoji text-[1.3rem]">😞</span>
                            );
                          case 1:
                            return (
                              <span className="emoji text-[1.3rem]">😠</span>
                            );
                          default:
                            return null;
                        }
                      })()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
