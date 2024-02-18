import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slide from "./Slide";

export const AnalysisResult = ({ latestAnalysisResult }) => {
  const roundNumber = (number, decimalPlaces) => {
    return Number(number).toFixed(decimalPlaces);
  };

  const [hoveredIndex, setHoveredIndex] = useState(true);

  const values = [
    {
      label: "Annualized Return:",
      value: latestAnalysisResult?.annualizedReturn,
      explanation:
        "Average annual gain or loss on an investment over time, expressed as a percentage of the initial investment. Assesses long-term profitability.",
    },
    {
      label: "Calmar Ratio:",
      value: latestAnalysisResult?.calmarRatio,
      explanation:
        "Performance measure that evaluates investment performance relative to its maximum drawdown. Helps understand risk-adjusted returns.",
    },
    {
      label: "Max Drawdown:",
      value: latestAnalysisResult?.maxDrawdown,
      explanation:
        "Maximum loss incurred by an investment from its peak value to its lowest point during a specific time period. Measures downside risk.",
    },
    {
      label: "News Sentiment:",
      value: latestAnalysisResult?.newsSentiment,
      explanation:
        "Overall sentiment conveyed by news articles and headlines related to a particular asset or market. Provides insights into market sentiment.",
    },
    {
      label: "Reddit Sentiment:",
      value: latestAnalysisResult?.redditSentiment,
      explanation:
        "Sentiment or opinions expressed by users on Reddit regarding a specific topic, asset, or market. Offers insights into investor sentiment.",
    },
    {
      label: "Sharpe Ratio:",
      value: latestAnalysisResult?.sharpeRatio,
      explanation:
        "Risk-adjusted measure that evaluates investment performance by considering return and risk. Indicates risk-adjusted return per unit of risk.",
    },
  ];

  const handleHover = () => {
    setHoveredIndex(false); // Reset hoveredIndex when hovering over the main div
  };

  const handleUnhover = () => {
    setHoveredIndex(true); // Reset hoveredIndex when unhovering
  };

  const slideElements = values.map((value, index) => {
    return (
      <Slide
        key={index}
        label={value.label}
        value={roundNumber(value.value, 2)}
        explanation={value.explanation}
        hovered={hoveredIndex === index}
      />
    );
  });
  return (
    <div className="h-[32vh] w-[17vw] bg-gray-900" onMouseEnter={handleHover}>
      {hoveredIndex ? (
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          swipeable={true}
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
                className="text-gray-900"
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
                className="text-gray-900"
              >
                &#10095;
              </button>
            )
          }
        >
          {slideElements}
        </Carousel>
      ) : (
        <div
          className="bg-gradient-to-t from-yellow-500 to-gray-900 h-[34vh] w-[18vw] rounded-3xl p-4 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center"
          onMouseLeave={handleUnhover}
        >
          <h1 className="text-white text-4xl font-bold mb-6">
            Analysis Result
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
            <div className="flex flex-col text-left w-40">
              <p className="font-bold">Annualized Return:</p>
              <p className="font-bold">Calmar Ratio:</p>
              <p className="font-bold">Max Drawdown:</p>
              <p className="font-bold">News Sentiment:</p>
              <p className="font-bold">Reddit Sentiment:</p>
              <p className="font-bold">Sharpe Ratio:</p>
            </div>
            <div className="flex flex-col text-right">
              <p>{roundNumber(latestAnalysisResult?.annualizedReturn, 2)}</p>
              <p>{roundNumber(latestAnalysisResult?.calmarRatio, 2)}</p>
              <p>{roundNumber(latestAnalysisResult?.maxDrawdown, 2)}</p>
              <p>{roundNumber(latestAnalysisResult?.newsSentiment, 2)}</p>
              <p>{roundNumber(latestAnalysisResult?.redditSentiment, 2)}</p>
              <p>{roundNumber(latestAnalysisResult?.sharpeRatio, 2)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
