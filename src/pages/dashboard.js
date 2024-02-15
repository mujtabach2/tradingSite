import React, { useEffect, useState, useContext } from "react";
import { TradingViewChart } from "../components/tradingview";
import { TradingViewWidget } from "../components/tradingViewWidget";
import { SpeedometerCard } from "../components/speedometer";
import { NewsCarousel } from "../components/newsCarsoul";
import { StarryBackground } from "../components/starryBackground";
import logo from "../images/logo.png";
import Skeleton from "@mui/material/Skeleton";
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router-dom";
import {
  fetchLatestAnalysisResult,
  fetchNewsArticles,
  logout,
  getUserData,
} from "../firebase";
import { Popup } from "reactjs-popup";
import lock from "../images/lock.png";
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
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };
    setCurrentDate(today.toLocaleDateString(undefined, options));
  }, []);
  const [showPopup, setShowPopup] = useState(false);

  if (user) {
    (async () => {
      try {
        const userData = await getUserData(user.uid);
        setIsPaid(userData.paid);
        console.log("User data:", isPaid);
      } catch (error) {
        console.error("Error fetching user data:", error);
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
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleLogin = () => {
    navigate("/login");
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

          .popup-content {
            color: white;
      
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            width: 90%;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 0px;
          }

        `}
      </style>
      <StarryBackground />
      {/* First Column */}
      <div className="flex-col w-[10vw] mr-[1vw] bg-gray-900 ">
        {/* First Row */}
        <div className="flex h-[7vh]  border-r-black border-r-4 ">
          {/* Content for the first cell in the first row */}
          <img src={logo} alt="logo" className="h-[4vh]" />
        </div>

        {/* Second Row */}
        <div className="flex-col h-[93vh]  ">
          {/* Content for the second cell in the second row */}
          <div className="flex flex-col h-[20vh] w-[10vw] border-r-black border-r-4 text-white justify-center ">
            <p>Todays Signal</p>
            {latestAnalysisResult && latestAnalysisResult?.decision ? (
              <p>
                {latestAnalysisResult?.decision}: {latestAnalysisResult.stock}
              </p>
            ) : (
              <p>No signal available</p>
            )}
          </div>
          <div className="flex-row h-[20vh] w-[10vw]  border-r-black border-r-4 border-r-4 text-white">
            <div>
              <Popup
                trigger={<button className="text-white">Daily Report</button>}
                modal
                nested
                closeOnDocumentClick={false}
                overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
              >
                {(close) => (
                  <div className="popup-content pr-0 flex justify-center items-center">
                    <button
                      className="absolute top-4 right-[5vw] text-white  m-4 hover:scale-110 transition-transform "
                      onClick={close}
                    >
                      X
                    </button>
                    {/* Content for your popup */}
                    <div className="text-white border-none p-6 rounded-lg shadow-lg bg-gray-800">
                      {!latestAnalysisResult && isPaid ? (
                        <div className="flex flex-col border-none text-center">
                          <img src={lock} alt="lock" className="h-[4vh] m-4" />
                          <h1 className="text-white text-[1.2rem]">
                            Purchase a Plan To see this Magical Report
                          </h1>
                        </div>
                      ) : (
                        <div className="border-none">
                          <h1 className="text-center pb-3 text-3xl font-bold">
                            Report for {latestAnalysisResult?.stock},{" "}
                            {currentDate}
                          </h1>
                          <p className="text-left text-lg">
                            {latestAnalysisResult?.result.text}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <div className="flex-row h-[20vh] w-[10vw]   border-r-black border-r-4  text-white">
            <button>
              <a
                href="https://wealthsimple.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy/Sell
              </a>
            </button>
          </div>
          <div className="flex-row h-[20vh] w-[10vw] justify-end mb-2 border-r-black border-r-4 ">
            {user ? (
              <div>
                <button
                  className="text-white border-none hover:underline pb-1 decoration-yellow-400"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="text-white border-none hover:underline pb-1 decoration-yellow-400"
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="flex-col w-[89vw] ">
        {/* Content for the second cell in the first row */}
        <div className="flex flex-row h-[7vh] justify-end pr-10">
          {/* Content for the first cell in the first row */}
          {user ? (
            <div className="flex flex-row justify-center items-center h-[7vh]">
              <div className="flex text-white">Welcome, {user.displayName}</div>
              <div className="bg-gray-900 rounded-3xl shadow-inner border hover:bg-[#F3BA2F] hover:border-black ml-2">
                <button
                  className="py-1 px-6 text-center text-white text-lg font-medium font-['Inter'] leading-normal "
                  onClick={handleSignOut}
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-white">Welcome</div>
              <div className="bg-gray-900 rounded-3xl shadow-inner border hover:bg-[#F3BA2F] hover:border-black ml-2">
                <button
                  className="py-1 px-6 text-center text-white text-lg font-medium font-['Inter'] leading-normal "
                  onClick={handleLogin}
                >
                  Log in
                </button>
              </div>
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
            <div className="flex-col h-[23vh] w-[17vw]">
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
            <div className="flex-col h-[23vh] w-[17vw]">
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
                {!latestAnalysisResult && !isPaid ? (
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
                      {!user ? (
                        <div className="flex flex-col justify-center items-center">
                          <img src={lock} alt="lock" className="h-[4vh] m-4" />
                          <h1 className="text-white">log in to see results </h1>
                        </div>
                      ) : (
                        <div className="bg-gray-900 border-black h-[33vh] rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                          {latestAnalysisResult ? (
                            <div>
                              {isPaid ? (
                                <div>
                                  <h1>Latest Analysis Result</h1>
                                  <p>
                                    Annualized Return:{" "}
                                    {latestAnalysisResult?.annualizedReturn}
                                  </p>
                                  <p>
                                    Calmar Ratio:{" "}
                                    {latestAnalysisResult?.calmarRatio}
                                  </p>
                                  <p>
                                    Max Drawdown:{" "}
                                    {latestAnalysisResult?.maxDrawdown}
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
                                    Sharpe Ratio:{" "}
                                    {latestAnalysisResult?.sharpeRatio}
                                  </p>
                                </div>
                              ) : (
                                <div className="flex flex-col border-none text-center">
                                  <img
                                    src={lock}
                                    alt="lock"
                                    className="h-[4vh] m-4"
                                  />
                                  <h1 className="text-white text-[1.2rem]">
                                    Purchase a Plan To see this Magical Report
                                  </h1>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div>
                              <Skeleton
                                variant="rectangular"
                                width="100%"
                                height={200}
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-row h-[35vh] w-[20vw]  p-1 ">
                  <div className="bg-gray-900 border-black rounded-[13px] h-[35vh] transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                    {!user ? (
                      <div className="flex flex-col justify-center items-center">
                        <img src={lock} alt="lock" className="h-[4vh] m-4" />
                        <h1 className="text-white">log in to see results </h1>
                      </div>
                    ) : (
                      <div className="p-2">
                        {!isPaid ? (
                          <div className="flex flex-col border-none text-center">
                            <img
                              src={lock}
                              alt="lock"
                              className="h-[4vh] m-4"
                            />
                            <h1 className="text-white text-[1.2rem]">
                              Purchase a Plan To see this Magical Report
                            </h1>
                          </div>
                        ) : (
                          <div>
                            {!latestAnalysisResult ? (
                              <div>
                                <Skeleton
                                  variant="circular"
                                  width={200}
                                  height={200}
                                  className="bg-gray-300"
                                />
                              </div>
                            ) : (
                              <SpeedometerCard
                                sentiment={twitterSentimentPercentage}
                                sentimentType={"Twitter"}
                              />
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex-col h-[70vh] w-[20vw]  p-2">
                <div className="flex-row h-[35vh] w-[18vw]  hover:border hover:border-2 hover:border-yellow-400">
                  {!user ? (
                    <div className="flex flex-col justify-center items-center">
                      <img src={lock} alt="lock" className="h-[4vh] m-4" />
                      <h1 className="text-white">log in to see results </h1>
                    </div>
                  ) : (
                    <div className="p-2">
                      {!isPaid ? (
                        <div className="flex flex-col border-none text-center">
                          <img src={lock} alt="lock" className="h-[4vh] m-4" />
                          <h1 className="text-white text-[1.2rem]">
                            Purchase a Plan To see this Magical Report
                          </h1>
                        </div>
                      ) : (
                        <div>
                          {newsData ? (
                            <NewsCarousel
                              newsArticles={newsData}
                              newsSentimentScores={newsSentimentScores}
                            />
                          ) : (
                            <div className="flex flex-col justify-center items-center bg-gray-900 border-black h-[33vh] rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                              <Skeleton
                                variant="rectangular"
                                width="90%"
                                height="10%"
                                animation="wave"
                                sx={{ bgcolor: "rgb(31, 41, 55)" }}
                              />

                              <Skeleton
                                variant="rectangular"
                                width="90%"
                                height="50%"
                                animation="wave"
                                sx={{
                                  bgcolor: "rgb(31, 41, 55)",
                                  marginTop: 4,
                                }}
                              />
                              <Skeleton
                                variant="rectangular"
                                width="90%"
                                height="5%"
                                animation="wave"
                                sx={{
                                  bgcolor: "rgb(31, 41, 55)",
                                  marginTop: 4,
                                }}
                              />
                              <Skeleton
                                variant="rectangular"
                                width="90%"
                                height="5%"
                                animation="wave"
                                sx={{
                                  bgcolor: "rgb(31, 41, 55)",
                                  marginTop: 1,
                                }}
                              />
                              <Skeleton
                                variant="rectangular"
                                width="90%"
                                height="5%"
                                animation="wave"
                                sx={{
                                  bgcolor: "rgb(31, 41, 55)",
                                  marginTop: 1,
                                }}
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex-row h-[35vh] w-[20vw]  p-1 ">
                  <div className="bg-gray-900 border-black rounded-[13px] h-[35vh] transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
                    {!user ? (
                      <div>
                        <h1 className="text-white">log in to see results </h1>
                      </div>
                    ) : (
                      <div className="p-2">
                        {!isPaid ? (
                          <div className="flex flex-col border-none text-center">
                            <img
                              src={lock}
                              alt="lock"
                              className="h-[4vh] m-4"
                            />
                            <h1 className="text-white text-[1.2rem]">
                              Purchase a Plan To see this Magical Report
                            </h1>
                          </div>
                        ) : (
                          <div>
                            {!latestAnalysisResult ? (
                              <div>
                                <Skeleton
                                  variant="circular"
                                  width={200}
                                  height={200}
                                  className="bg-gray-300"
                                />
                              </div>
                            ) : (
                              <SpeedometerCard
                                sentiment={twitterSentimentPercentage}
                                sentimentType={"Twitter"}
                              />
                            )}
                          </div>
                        )}
                      </div>
                    )}
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
