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
  cancelSubscription,
} from "../firebase";
import teslaLogo from "../images/teslaLogo.png";
import appleLogo from "../images/appleLogo.png";
import metaLogo from "../images/metaLogo.png";
import amazonLogo from "../images/amazonLogo.png";
import googleLogo from "../images/googleLogo.png";
import { Popup } from "reactjs-popup";
import { AnalysisResult } from "../components/analysisResult";
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

  const subscribePremium = async () => {
    try {
      window.location.href = "https://buy.stripe.com/test_6oE16g8PtcKyfKMaEF";
    } catch (error) {
      console.error("Error subscribing to premium:", error);
    }
  };

  useEffect(() => {
    const today = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };
    setCurrentDate(today.toLocaleDateString(undefined, options));
  }, []);

  const getLogoSrc = (stock) => {
    switch (stock) {
      case "AMZN":
        return amazonLogo;
      case "AAPL":
        return appleLogo;
      case "META":
        return metaLogo;
      case "GOOGL":
        return googleLogo;
      case "TSLA":
        return teslaLogo;
      default:
        return "https://placehold.it/30/svg?text=?"; // Placeholder icon
    }
  };
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
  const yourPortfolio = [
    {
      stock: "AMZN",
      logo: amazonLogo, // Assuming you have imported amazonLogo
    },
    {
      stock: "AAPL",
      logo: appleLogo, // Assuming you have imported appleLogo
    },
    {
      stock: "META",
      logo: metaLogo, // Assuming you have imported metaLogo
    },
    {
      stock: "GOOGL",
      logo: googleLogo, // Assuming you have imported googleLogo
    },
    {
      stock: "TSLA",
      logo: teslaLogo, // Assuming you have imported teslaLogo
    },
  ];

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
    fetchNewsData();
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
  const newsSentimentScores = [1, 2, 3, 4, 5];
  const handleCancelPlan = async () => {
    try {
      await cancelSubscription(user.uid);
      setIsPaid(false);
      navigate("/");
    } catch (error) {
      console.error("Error cancelling subscription:", error);
    }
  };

  const gotoWealthSimple = () => {
    window.open("https://www.wealthsimple.com/", "_blank");
  };

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
      <div className="flex-col w-[10vw] mr-[1vw] bg-gray-900 rounded-lg">
        {/* First Row */}
        <div className="flex h-[7vh] items-center justify-center px-4 ">
          <img src={logo} alt="logo" className="h-[3.3vh]" />
        </div>

        {/* Second Row */}
        <div className="flex-col h-[93vh]">
          {/* Content for the second cell in the second row */}

          <div class="bg-[#080E18] rounded-3xl shadow-md p-4 flex flex-col h-[60vh] w-[9.7vw] justify-center  mt-4">
            <div className="flex justify-center  items-center text-center ">
              <p class="text-[1.5rem] font-bold text-gray-100 text-center">
                Signals
              </p>
            </div>
            {latestAnalysisResult ? (
              <div class="flex flex-col items-start gap-4 justify-center">
                {/* Show decision for latestAnalysisResult.stock */}
                <div
                  class={`bg-transparent rounded-md shadow-md p-4 flex flex-row items-center gap-4 justify-start ${
                    latestAnalysisResult.decision === "BUY"
                      ? "border-[#008000]"
                      : "border-[#FF0000]"
                  }`}
                >
                  <span class="font-bold text-2xl">
                    {latestAnalysisResult.decision === "BUY" ? (
                      <span class="text-green-500">Buy</span>
                    ) : (
                      <span class="text-red-500">Sell</span>
                    )}
                  </span>
                  <img
                    src={getLogoSrc(latestAnalysisResult.stock)}
                    alt={`${latestAnalysisResult.stock} logo`}
                    class="h-8"
                  />
                </div>
                <div className="flex flex-col items-start mt-[-3vh] w-[9vw]">
                  {/* Show "Hold" for other stocks in your portfolio */}
                  {yourPortfolio && // Assuming you have an array called `yourPortfolio`
                    Array.isArray(yourPortfolio) &&
                    yourPortfolio.length > 0 && // Check if it's an array and not empty
                    yourPortfolio.map((otherstock) => (
                      <div key={otherstock}>
                        {otherstock.stock !== latestAnalysisResult.stock && (
                          <div class="bg-transparent rounded-md shadow-md p-4 flex flex-row items-center gap-4 justify-start border-[#F7CA4A]">
                            <span class="font-bold text-2xl text-yellow-500">
                              Hold
                            </span>
                            <img
                              src={getLogoSrc(otherstock.stock)}
                              alt={`${otherstock} logo`}
                              class={
                                otherstock.stock === "META" ? "h-4" : "h-7"
                              }
                            />
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <p class="text-left text-gray-500 font-medium">
                No signal available
              </p>
            )}
          </div>

          <div className="flex flex-col h-[10vh] w-[10vw] px-4  text-white  mt-[3vh]">
            <div>
              <Popup
                trigger={
                  <button className="bg-[#F3BA2F] text-white py-2 px-4 rounded-lg hover:bg-[#FCD28D]">
                    Daily Report
                  </button>
                }
                modal
                nested
                closeOnDocumentClick={false}
                overlayStyle={{ background: "rgba(0, 0, 0, 0.7)" }}
              >
                {(close) => (
                  <div className="popup-content p-8 flex flex-col items-center bg-gray-800 rounded-lg shadow-md">
                    <button
                      className="self-end text-gray-400 hover:text-gray-600 focus:outline-none"
                      onClick={close}
                    >
                      &times;
                    </button>

                    <div className="flex flex-col items-start space-y-4 mt-4 mb-8">
                      {!latestAnalysisResult && isPaid ? (
                        <div className="text-center">
                          <img src={lock} alt="lock" className="h-16 mx-auto" />
                          <h1 className="text-xl font-bold mt-4">
                            Upgrade to see the Magical Report
                          </h1>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center justify-between w-full">
                            <h1 className="text-2xl font-bold text-white ml-2">
                              Report for {latestAnalysisResult?.stock},{" "}
                              {currentDate}
                            </h1>
                            <img
                              src={getLogoSrc(latestAnalysisResult?.stock)}
                              alt={`${latestAnalysisResult?.stock} logo`}
                              className="h-8"
                            />
                          </div>
                          <p className="text-gray-300 text-lg prose prose-sm ml-2">
                            {latestAnalysisResult?.result.text}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <div className="flex flex-col h-[2vh] w-[10vw] px-4 py-2 text-white mt-10">
            <button
              className="bg-gray-700 text-white hover:bg-gray-800 hover:text-gray-300 px-4 py-2 rounded-lg"
              onClick={gotoWealthSimple}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy/Sell
            </button>
          </div>
          <div className="flex flex-col h-[2vh] w-[10vw] justify-end px-4 py-2 text-white mt-[9vh] text-left">
            <Popup
              trigger={
                <button className="bg-gray-700 text-white hover:bg-gray-800 hover:text-gray-300 px-4 py-2 rounded-lg">
                  Settings
                </button>
              }
              modal
              nested
              closeOnDocumentClick={false}
              overlayStyle={{ background: "rgba(0, 0, 0, 0.7)" }}
            >
              {(close) => (
                <div className="popup-content pr-0 flex justify-center items-center">
                  {/* Move close button inside popup content and style appropriately */}
                  <button
                    className="absolute top-4 right-[13vw] text-white hover:text-gray-300 m-4"
                    onClick={close}
                  >
                    &times;
                  </button>

                  <div className="text-white border-none p-6 rounded-lg shadow-md bg-gray-800">
                    <h1 className="text-center pb-3 text-2xl font-bold">
                      Settings
                    </h1>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {/* Account Section */}
                      <div className="flex flex-col items-center space-y-4">
                        <h2 className="text-gray-300">Account</h2>
                        {user ? (
                          <>
                            <h1 className="text-center pb-3 text-xl font-medium">
                              {user?.displayName}
                            </h1>
                            <button
                              className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                              onClick={handleSignOut}
                            >
                              Sign Out
                            </button>
                          </>
                        ) : (
                          <>
                            <h1 className="text-center pb-3 text-xl font-medium ">
                              Not Logged In
                            </h1>
                            <button
                              className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                              onClick={handleLogin}
                            >
                              Log in
                            </button>
                          </>
                        )}
                      </div>

                      {/* Subscription Section */}
                      <div className="flex flex-col items-center space-y-4">
                        <h2 className="text-gray-300">Subscription</h2>
                        <h1 className="text-center pb-3 text-xl font-medium">
                          {isPaid ? (
                            <span className="flex items-center space-x-2">
                              <span className="w-4 h-4 rounded-full bg-green-500 animate-pulse mr-2"></span>
                              Active
                            </span>
                          ) : (
                            <span className="flex items-center space-x-2">
                              <span className="w-4 h-4 rounded-full bg-red-500 animate-pulse mr-2"></span>
                              Inactive
                            </span>
                          )}
                        </h1>
                        {isPaid ? (
                          <>
                            <button
                              className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                              onClick={() => {
                                if (
                                  window.confirm(
                                    "Are you sure you want to cancel your plan? This action cannot be undone.",
                                  )
                                ) {
                                  handleCancelPlan();
                                }
                              }}
                            >
                              Cancel Plan
                            </button>
                            <p className="text-gray-300 text-sm mt-2">
                              Cancelling your plan will result in losing access
                              to premium features.
                            </p>
                          </>
                        ) : (
                          <button
                            className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                            onClick={subscribePremium}
                          >
                            Purchase Plan
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Popup>
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
           <div className="absolute left-[12vw] text-white">Welcome, {user.displayName}</div>
           <div className="flex bg-gray-900 rounded-3xl shadow-inner border hover:bg-[#F3BA2F] hover:border-black ml-2">
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
          <div className="flex h-[23vh] w-[90vw] mb-[5vh]">
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
                  <div className="bg-gray-900 border-black  rounded-[13px] p-2 transform transition-transform">
                    <div>
                      {!user ? (
                        <div className="flex flex-col justify-center items-center">
                          <img src={lock} alt="lock" className="h-[4vh] m-4" />
                          <h1 className="text-white">log in to see results </h1>
                        </div>
                      ) : (
                        <div className="h-[33vh] w-[18vw] ">
                          {latestAnalysisResult ? (
                            <div>
                              {isPaid ? (
                                <AnalysisResult
                                  latestAnalysisResult={latestAnalysisResult}
                                />
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
                <div className="flex-row h-[35vh] w-[20vw]  pt-4 pr-2">
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
                <div className="flex flex-col justify-center mr-[1vw] items-center bg-gray-900 border-black h-[35vh] rounded-[13px] p-2 transform transition-transform hover:scale-105 hover:border hover:border-2 hover:border-yellow-400">
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
                            <div>
                              <NewsCarousel
                                newsArticles={newsData}
                                newsSentimentScores={newsSentimentScores}
                              />
                            </div>
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
                <div className="flex-row h-[35vh] w-[20vw] mr-[4vw] pt-4">
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
                                sentiment={redditSentimentPercentage}
                                sentimentType={"Reddit"}
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
