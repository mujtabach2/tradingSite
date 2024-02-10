import React, { useEffect, useState, useContext } from "react";
import { TradingViewChart } from "../components/tradingview";
import { TradingViewWidget } from "../components/tradingViewWidget";
import { SpeedometerCard } from "../components/speedometer";
import { NewsCarousel } from "../components/newsCarsoul";
import { StarryBackground } from "../components/starryBackground";
import logo from "../images/logo.png";
import Skeleton from "@mui/material/Skeleton";
import { AuthContext } from "../authContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db, fetchLatestAnalysisResult, fetchNewsArticles } from "../firebase";
import { getDoc, doc } from "firebase/firestore";

export const Dashboard = () => {
  const [latestAnalysisResult, setLatestAnalysisResult] = useState(null);
  const [twitterSentimentPercentage, setTwitterSentimentPercentage] =
    useState(0);
  const [redditSentimentPercentage, setRedditSentimentPercentage] = useState(0);
  const [stockSymbol, setStockSymbol] = useState("AAPL");
  const { user } = useContext(AuthContext);
  const [isPaid, setIsPaid] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const navigate = useNavigate();

  if (user) {
    (async () => {
      try {
        // Retrieve user document from Firestore
        const userDoc = await getDoc(
          doc(db, "users", AuthContext.currentUser.uid),
        );
        const userData = userDoc.data();

        // Set the isPaid state based on the Firestore data
        setIsPaid(userData?.paid);
      } catch (error) {
        console.error("Error fetching paid status from Firestore:", error);
        // Handle errors, e.g., set a default value or display an error message
      }
    })();
  }

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
      }
    };

    const fetchNewsData = async () => {
      try {
        const newsData = await fetchNewsArticles();
        setNewsData(newsData);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };
    fetchLatestData();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(AuthContext); // Assuming you have an instance of Firebase auth named 'auth'
      navigate("/login");
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
              <button className="text-white" onClick={() => navigate("/login")}>
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

          <div className="flex h-[70vh] w-[90vw mt-[-5vh]">
            {/* Content for the second cell in the second row */}
            <div className="flex-col h-[70vh] w-[50vw] ">
              <div className="bg-gray-900 border-black rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                {!latestAnalysisResult && isPaid ? (
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={"45vh"}
                    className="p-2"
                  />
                ) : (
                  <TradingViewChart symbol={stockSymbol} />
                )}
              </div>
            </div>
            <div className="flex h-[70vh] w-[40vw]  ">
              <div className="flex-col h-[70vh] w-[20vw] p-2 ">
                <div className="flex-row h-[35vh] w-[19vw]  ">
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
                        <div className="bg-gray-900 border-black h-[33vh] rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                          <div>
                            <h1>Latest Analysis Result</h1>
                            <p>
                              Annualized Return:{" "}
                              {latestAnalysisResult?.annualizedReturn}
                            </p>
                            <p>
                              Calmar Ratio: {latestAnalysisResult?.calmarRatio}
                            </p>
                            <p>
                              Max Drawdown: {latestAnalysisResult?.maxDrawdown}
                            </p>
                            <p>
                              News Sentiment:{" "}
                              {latestAnalysisResult?.newsSentiment}
                            </p>
                            <p>
                              Reddit Sentiment:{" "}
                              {latestAnalysisResult?.redditSentiment}
                            </p>
                            <p>
                              Sharpe Ratio: {latestAnalysisResult?.sharpeRatio}
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
                      <Skeleton
                        variant="circular"
                        width={200}
                        height={200}
                        className="bg-gray-300" // Use the appropriate shade level
                      />
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
                <div className="flex-row h-[35vh] w-[18vw]  hover:border hover:border-2 hover:border-yellow-400">
                  {user && isPaid && newsData ? (
                    <NewsCarousel
                      newsArticles={newsData}
                      newsSentimentScores={newsSentimentScores}
                    />
                  ) : (
                    <div className="flex flex-col justify-center items-center bg-gray-900 border-black h-[33vh] rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                      <Skeleton
                        variant="rectangular"
                        width="90%"
                        height="10%" // Adjust the height based on the layout
                        animation="wave"
                        sx={{ bgcolor: "rgb(31, 41, 55)" }} // Background color style
                      />

                      <Skeleton
                        variant="rectangular"
                        width="90%"
                        height="50%" // Adjust the height based on the layout
                        animation="wave"
                        sx={{ bgcolor: "rgb(31, 41, 55)", marginTop: 4 }} // Background color style
                      />
                      <Skeleton
                        variant="rectangular"
                        width="90%"
                        height="5%" // Adjust the height based on the layout
                        animation="wave"
                        sx={{ bgcolor: "rgb(31, 41, 55)", marginTop: 4 }} // Background color style
                      />
                      <Skeleton
                        variant="rectangular"
                        width="90%"
                        height="5%" // Adjust the height based on the layout
                        animation="wave"
                        sx={{ bgcolor: "rgb(31, 41, 55)", marginTop: 1 }} // Background color style
                      />
                      <Skeleton
                        variant="rectangular"
                        width="90%"
                        height="5%" // Adjust the height based on the layout
                        animation="wave"
                        sx={{ bgcolor: "rgb(31, 41, 55)", marginTop: 1 }} // Background color style
                      />
                    </div>
                  )}
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
