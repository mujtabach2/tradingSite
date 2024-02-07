import React from "react";
import { TradingViewChart } from "../components/tradingview";
import { TradingViewWidget } from "../components/tradingViewWidget.js";
import { StarryBackground } from "../components/starryBackground";
import logo from "../images/logo.png";
import { TradingViewInfo } from "../components/stockInfo";
import { SpeedometerCard } from "../components/speedometer";
import { NewsCarousel } from "../components/newsCarsoul";
import {GetAnalysisResults} from "../firebase";

export const Dashboard = () => {
  const newsArticles = [
    {
      title: "This is a test title",
      description: "This is a test description",
      url: "https://www.google.com",
      urlToImage: "https://www.google.com",
    },
    {
      title: "This is a test title 2",
      description: "This is a test description 2",
      url: "https://www.google.com",
      urlToImage: "https://www.google.com",
    },
    {
      title: "This is a test title 3",
      description: "This is a test description 3",
      url: "https://www.google.com",
      urlToImage: "https://www.google.com",
    },
  ];

  const dbData = GetAnalysisResults();
  const newsSentimentScores = [0.5, 0.6, 0.7];
  return (
    <div className="flex h-[100vh] w-[100vw]">
      <style>
        {`
          #stars-container {
            height: 100vh;
            background: #080E18;  
            z-index: -1;
          }


        `}
      </style>
      <StarryBackground />
      {/* First Column */}
      <div className="flex-col w-[10vw]">
        {/* First Row */}
        <div className="flex h-[7vh]  border-2 border-white">
          {/* Content for the first cell in the first row */}
          <img src={logo} alt="logo" className="h-[4vh]" />
        </div>

        {/* Second Row */}
        <div className="flex-col h-[93vh]  border-2 border-white">
          {/* Content for the second cell in the second row */}
          <div className="flex-row h-[20vh] w-[10vw]  border-2 border-white">
            Todays Signal
          </div>
          <div className="flex-row h-[20vh] w-[10vw]  border-2 border-white">
            Daily Report
          </div>
          <div className="flex-row h-[20vh] w-[10vw]  border-2 border-white">
            Buy/Sell
          </div>
          <div className="flex-row h-[20vh] w-[10vw]  border-2 border-white">
            Settings
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="flex-col w-[90vw] ">
        {/* Content for the second cell in the first row */}
        <div className="flex h-[7vh]  border-2 border-blue-300">
          {/* Content for the first cell in the first row */}
        </div>

        {/* Second Row */}
        <div className="flex-col h-[90vh]">
          {/* Content for the second cell in the second row */}
          <div className="flex h-[23vh] w-[90vw] ">
            <div className="flex-col h-[23vh] w-[18vw]">
              <div className="p-2">
                <div className="bg-gray-900 border-black rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                  <div>
                    <TradingViewWidget symbol={"AAPL"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col h-[23vh] w-[18vw]">
              <div className="p-2">
                <div className="bg-gray-900 border-black rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                  <div>
                    <TradingViewWidget symbol={"FB"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col h-[23vh] w-[18vw]">
              <div className="p-2">
                <div className="bg-gray-900 border-black rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                  <div>
                    <TradingViewWidget symbol={"TSLA"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col h-[23vh] w-[18vw]">
              <div className="p-2">
                <div className="bg-gray-900 border-black rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                  <div>
                    <TradingViewWidget symbol={"AMZN"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col h-[23vh] w-[18vw]">
              <div className="p-2">
                <div className="bg-gray-900 border-black rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                  <div>
                    <TradingViewWidget symbol={"GOOGL"} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[70vh] w-[90vw]">
            {/* Content for the second cell in the second row */}
            <div className="flex-col h-[70vh] w-[50vw] ">
              <div className="bg-gray-900 border-black rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                <TradingViewChart symbol={"AAPL"} />
              </div>
            </div>
            <div className="flex h-[70vh] w-[40vw]  ">
              <div className="flex-col h-[70vh] w-[20vw] p-2 ">
                <div className="flex-row h-[35vh] w-[20vw]  ">
                  <div className="bg-gray-900 border-black  rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                   {dbData}
                  </div>
                </div>
                <div className="flex-row h-[35vh] w-[20vw]  p-2">
                  <div className="bg-gray-900 border-black  rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                    <SpeedometerCard sentiment={80} sentimentType={"Twitter"} />
                  </div>
                </div>
              </div>
              <div className="flex-col h-[70vh] w-[20vw]  p-2">
                <div className="flex-row h-[35vh] w-[20vw]  hover:border hover:border-2 hover:border-yellow-400">
                  <NewsCarousel
                    newsArticles={newsArticles}
                    newsSentimentScores={newsSentimentScores}
                  />
                </div>
                <div className="flex-row h-[35vh] w-[20vw] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                  <div className="bg-gray-900 border-black  rounded-[13px] p-2">
                    <SpeedometerCard sentiment={60} sentimentType={"Reddit"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
