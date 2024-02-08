import React, { useEffect, useState, useContext } from "react";
import { TradingViewChart } from "../components/tradingview";
import { TradingViewWidget } from "../components/tradingViewWidget.js";
import { StarryBackground } from "../components/starryBackground";
import logo from "../images/logo.png";
import { SpeedometerCard } from "../components/speedometer";
import { NewsCarousel } from "../components/newsCarsoul";
import { fetchLatestAnalysisResult, fetchNewsArticles } from "../firebase";
import Skeleton from "@mui/material/Skeleton";
import { AuthContext } from "../authContext";
import { getIdTokenResult } from "firebase/auth";

export const Dashboard = () => {
  const [latestAnalysisResult, setLatestAnalysisResult] = useState(null);
  const [twitterSentimentPercentage, setTwitterSentimentPercentage] =
    useState(0);
  const [redditSentimentPercentage, setRedditSentimentPercentage] = useState(0);
  const [stockSymbol, setStockSymbol] = useState("AAPL");
  const { user } = useContext(AuthContext);
  const [isPaid, setIsPaid] = useState(false);
  const [newsData, setNewsData] = useState([]);

  if (user)
    async () => {
      const idTokenResult = await getIdTokenResult(auth.currentUser);
      setIsPaid(idTokenResult.claims.paid);
    };
  useEffect(() => {
    const fetchLatestData = async () => {
      try {
        const latestData = await fetchLatestAnalysisResult();
        setLatestAnalysisResult(latestData);
        setTwitterSentimentPercentage(
          convertSentimentToPercentage(latestData.twitterSentiment),
        );
        setRedditSentimentPercentage(
          convertSentimentToPercentage(latestData.redditSentiment),
        );
        setStockSymbol(latestData.stock);
      } catch (error) {
        console.error("Error fetching latest data:", error);
        // Handle error state here
      }
    };

    const fetchNewsData = async () => {
      try {
        const newsData = await fetchNewsArticles();
        setNewsData(newsData);
      } catch (error) {
        console.error("Error fetching news data:", error);
        // Handle error state here
      }
    };
    fetchLatestData();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Assuming you have an instance of Firebase auth named 'auth'
      history.push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const convertSentimentToPercentage = (score) => {
    // Convert score from range -5 to 5 to range 0 to 10
    const convertedScore = score + 5;
    // Convert score from range 0 to 10 to range 0 to 100
    return convertedScore * 10;
  };
  const newsSentimentScores = newsData.map((article) => article.sentimentScore);

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
        <div className="flex h-[7vh]  border-2 border-blue-300 align-right">
          {/* Content for the first cell in the first row */}
          {user ? (
            <div>
              <div className="text-white">Welcome, {user.displayName}</div>
              <button className="text-white" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          ) : (
            <div>
              <div className="text-white">Welcome</div>
              <button
                className="text-white"
                onClick={() => history.push("/login")}
              >
                Sign In
              </button>
            </div>
          )}
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
                {!latestAnalysisResult && isPaid ? (
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={"45vh"}
                    style="m-2"
                  />
                ) : (
                  <TradingViewChart symbol={stockSymbol} />
                )}
              </div>
            </div>
            <div className="flex h-[70vh] w-[40vw]  ">
              <div className="flex-col h-[70vh] w-[20vw] p-2 ">
                <div className="flex-row h-[35vh] w-[20vw]  ">
                  <div className="bg-gray-900 border-black  rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                    <div>
                      {!latestAnalysisResult && isPaid ? (
                        <div className="bg-gray-900 border-black rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                          <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={200}
                          />
                        </div>
                      ) : (
                        <div className="bg-gray-900 border-black rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                          <div>
                            <h1>Latest Analysis Result</h1>
                            <p>
                              Annualized Return:{" "}
                              {latestAnalysisResult.annualizedReturn}
                            </p>
                            <p>
                              Calmar Ratio: {latestAnalysisResult.calmarRatio}
                            </p>
                            <p>
                              Max Drawdown: {latestAnalysisResult.maxDrawdown}
                            </p>
                            <p>
                              News Sentiment:{" "}
                              {latestAnalysisResult.newsSentiment}
                            </p>
                            <p>
                              Reddit Sentiment:{" "}
                              {latestAnalysisResult.redditSentiment}
                            </p>
                            <p>
                              Sharpe Ratio: {latestAnalysisResult.sharpeRatio}
                            </p>
                            <p>
                              Date:{" "}
                              {latestAnalysisResult.date
                                .toDate()
                                .toLocaleString()}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Render other properties as needed */}
                    </div>
                  </div>
                </div>
                <div className="flex-row h-[35vh] w-[20vw]  p-2">
                  {!latestAnalysisResult && isPaid ? (
                    <div className="bg-gray-900 border-black rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                      <Skeleton variant="circular" width={200} height={200} />
                    </div>
                  ) : (
                    <div className="bg-gray-900 border-black rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                      <SpeedometerCard
                        sentiment={twitterSentimentPercentage}
                        sentimentType={"Twitter"}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-col h-[70vh] w-[20vw]  p-2">
                <div className="flex-row h-[35vh] w-[20vw]  hover:border hover:border-2 hover:border-yellow-400">
                  <NewsCarousel
                    newsArticles={newsData}
                    newsSentimentScores={newsSentimentScores}
                  />
                </div>
                <div className="flex-row h-[35vh] w-[20vw] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                  {!latestAnalysisResult && isPaid ? (
                    <div className="bg-gray-900 border-black rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                      <Skeleton variant="circular" width={200} height={200} />
                    </div>
                  ) : (
                    <div className="bg-gray-900 border-black rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                      <SpeedometerCard
                        sentiment={redditSentimentPercentage}
                        sentimentType={"Reddit"}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
