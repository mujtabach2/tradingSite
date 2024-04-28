import React, { forwardRef, useEffect, useState, useRef } from "react";
import aiVids from "../images/aiVid.mp4";
import twitterVids from "../images/twitterVid.mp4";
import newsVids from "../images/newsVid.mp4";
import stockVids from "../images/stockVid.mp4";

import reddit from "../images/reddit.png";

export const Features = forwardRef((props, ref) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [currentGroup, setCurrentGroup] = useState("stock");
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (animationIndex + 1) % 4;
      setCurrentGroup(["stock", "twitter", "reddit", "news"][nextIndex]);
      setAnimationIndex(nextIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(id === activeId ? null : id);
  };
  const [videoSource, setVideoSource] = useState(null);

  useEffect(() => {
    const newSource =
      {
        twitter: twitterVids,
        news: newsVids,
        reddit: aiVids,
        analysis: stockVids,
      }[activeId] || "";

    setVideoSource(newSource);
  }, [activeId]);

  return (
    <div ref={ref} className={isSmallScreen ? " mb-[60vh] " : ""}>
      <style>
        {`

        .cabin {
          font-family: "Cabin Sketch", sans-serif;
          font-weight: 700;
          font-style: normal;
          font: bold; 
        }

        .lato{
        font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: italic;
        }
        .caveat {
          font-family: "Caveat", cursive;
          font-optical-sizing: auto;
          font-weight: 400;
          font-style: normal;
        }

        `}
      </style>

      <div class=" flex justify-center items-center">
        <div className="divider divider-warning mb-20 w-[60rem]"></div>
      </div>

      <div class="flex flex-col items-start ml-20 justify-center text-left">
        <p class="text-[1rem] lato text-yellow-500">Decode Market Sentiment</p>
        <p class="text-l md:text-2xl lg:text-6xl lato font-bold">
          Empower Your Trades with{" "}
          <span class="bg-yellow-500 text-white px-3  rounded-2xl">
            Real-time Insights!
          </span>
        </p>
      </div>

      <div class=" text-left ml-20 mt-20 flex flex-row gap-10">
        <div className="w-[40rem] text-left ml-20 mt-20">
          <div className="collapse colHover collapse-plus">
            <input
              type="radio"
              name="my-accordion-1"
              id="twitter"
              checked={activeId === "twitter"}
              onChange={() => handleClick("twitter")}
            />
            <div
              className={`collapse-title text-2xl font-medium flex flex-row ${
                activeId === "twitter" ? "text-yellow-500" : ""
              }`}
              onClick={() => handleClick("twitter")}
            >
              <p class="twit">𝕏 </p> <span>Social Media Sentiment</span>
            </div>
            <div
              className={`collapse-content ${activeId === "twitter" ? "" : "hidden"}`}
            >
              <p className="text-white text-sm">
                Real-time social media sentiment analysis of popular tweets and
                trending Reddit osts , providing actionable insights for
                informed trading decisions.
              </p>
            </div>
          </div>
          <div className="collapse colHover collapse-plus">
            <input
              type="radio"
              name="my-accordion-1"
              id="news"
              checked={activeId === "news"}
              onChange={() => handleClick("news")}
            />
            <div
              className={`collapse-title text-2xl font-medium ${
                activeId === "news" ? "text-yellow-500" : ""
              }`}
              onClick={() => handleClick("news")}
            >
              📰 <span> News Sentiment</span>
            </div>
            <div
              className={`collapse-content ${activeId === "news" ? "" : "hidden"}`}
            >
              <p className="text-white text-sm">
                Real-time sentiment analysis of news articles, blogs, and
                trending posts, providing actionable insights for informed
                trading decisions.
              </p>
            </div>
          </div>
          <div className="collapse colHover collapse-plus">
            <input
              type="radio"
              name="my-accordion-1"
              id="reddit"
              checked={activeId === "reddit"}
              onChange={() => handleClick("reddit")}
            />
            <div
              className={`collapse-title text-2xl font-medium flex flex-row ${
                activeId === "reddit" ? "text-yellow-500" : ""
              }`}
              onClick={() => handleClick("reddit")}
            >
              🤖 <span>Ai Written Reports</span>
            </div>
            <div
              className={`collapse-content ${activeId === "reddit" ? "" : "hidden"}`}
            >
              <p className="text-white text-sm">
                AI models analyze both the sentiment data and the reinforcement
                learning results to generate insights that consider both the
                quantitative and qualitative aspects of the market.
              </p>
            </div>
          </div>

          <div className="collapse colHover collapse-plus z-2">
            <input
              type="radio"
              name="my-accordion-1"
              id="analysis"
              checked={activeId === "analysis"}
              onChange={() => handleClick("analysis")}
            />
            <div
              className={`collapse-title text-2xl font-medium ${
                activeId === "analysis" ? "text-yellow-500" : ""
              }`}
              onClick={() => handleClick("analysis")}
            >
              💹 <span>Stock Analysis</span>
            </div>
            <div
              className={`collapse-content ${activeId === "analysis" ? "" : "hidden"}`}
            >
              <p className="text-white text-sm">
                Comprehensive stock analysis facilitated by cutting-edge machine
                learning algorithms, leveraging a diverse range of indicators
                and reinforcement learning techniques.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[35rem]  border-2 border-yellow-500 rounded-lg flex items-center justify-center">
          <video
            key={videoSource}
            width="99%"
            height="99%"
            rounded-lg
            controls
            autoPlay
            muted
            loop
          >
            {activeId === null ? (
              <source src={newsVids} type="video/mp4" />
            ) : (
              videoSource && <source src={videoSource} type="video/mp4" />
            )}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <style>
        {`
        .twit {
          font-family: 'Lobster', cursive;
          color: white;
          margin-right: 10px;
        }
        .colHover:hover span{
         
          margin-left: 10px;
          cursor: pointer;
          
        }
        .yellow-text {
          color: #F3BA2F; /* Your desired yellow color */
        }
        

         .div-on-hover {
          transform-style: preserve-3d; /* preserves 3D space for tilt */
          perspective: 200px; /* adjust for desired tilt depth */
        }
        
        .div-on-hover:hover {
          cursor: pointer; /* indicate interactivity */
        }
        
        .div-on-hover:hover {
          transform: perspective(200px) rotateY(5deg); /* tilt on click/hold */
          box-shadow: inset 0 0 20px #F3BA2F, 0 0 20px #F3BA2F;
          animation: pulse 2s infinite; 
        }
        
        .div-on-hover {
          position: relative;
          /* Add any background color you want for the div itself */
        }
        
       
        
        .div-on-hover:hover:after {
          opacity: 0.3;
        }
        
        :root {
          --hover-color: #F3BA2F; /* Change this to your desired gradient color */
        }
        
        @keyframes pulse {
          0% {
              box-shadow: inset 0 0 20px #F3BA2F, 0 0 20px #F3BA2F;
          }
          50% {
              box-shadow: inset 0 0 30px #F3BA2F, 0 0 30px #F3BA2F;
          }
          100% {
              box-shadow: inset 0 0 20px #F3BA2F, 0 0 20px #F3BA2F;
          }
          }

          .animated {
            opacity: 1;
            /* Add other transition styles as needed */
          }
          .twitter-group {
            /* Initial opacity */
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
          }
          
          .twitter-group:hover {
            /* Opacity on hover */
            opacity: 1;
          }
          
          /* Similarly, define transitions for other animation properties like translateX, translateY, etc. */
          
        

          
        `}
      </style>
    </div>
  );
});
