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
    <div ref={ref} className="px-4 md:px-8 lg:px-20 py-10 flex flex-col items-center">
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

        @media (max-width: 768px) {
          .lato {
            font-size: 1.5rem;
          }
        }
        `}
      </style>

      <div className="flex justify-center items-center w-full max-w-4xl">
        <div className="divider divider-warning mb-10 w-full"></div>
      </div>

      <div className="flex flex-col items-center justify-center text-center mb-10 max-w-4xl">
        <p className="text-sm md:text-base lato text-yellow-500">Decode Market Sentiment</p>
        <p className="text-2xl md:text-4xl lg:text-5xl lato font-bold">
          Empower Your Trades with
          <br className="hidden md:block" />
          <span className="bg-yellow-500 text-white px-2 md:px-3 rounded-xl md:rounded-2xl inline-block mt-2 md:mt-3">
            Real-time Insights!
          </span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl mt-10">
        <div className="w-full md:w-1/2">
          {/* Collapse sections */}
          {["twitter", "news", "reddit", "analysis"].map((id) => (
            <div key={id} className="collapse colHover collapse-plus mb-4">
              <input
                type="radio"
                name="my-accordion-1"
                id={id}
                checked={activeId === id}
                onChange={() => handleClick(id)}
              />
              <div
                className={`collapse-title text-xl md:text-2xl font-medium flex flex-row items-center ${
                  activeId === id ? "text-yellow-500" : ""
                }`}
                onClick={() => handleClick(id)}
              >
                {id === "twitter" && <p className="twit mr-2">𝕏</p>}
                {id === "news" && <span className="mr-2">📰</span>}
                {id === "reddit" && <span className="mr-2">🤖</span>}
                {id === "analysis" && <span className="mr-2">💹</span>}
                <span>{getTitle(id)}</span>
              </div>
              <div className={`collapse-content ${activeId === id ? "" : "hidden"}`}>
                <p className="text-white text-sm">{getContent(id)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="video-container">
            <video
              key={videoSource}
              className="video-content"
              controls
              autoPlay
              muted
              loop
            >
              <source src={activeId === null ? newsVids : videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
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
          
        

          
        @media (max-width: 768px) {
          .collapse-title {
            font-size: 1.25rem;
          }
          .collapse-content p {
            font-size: 0.875rem;
          }
        }
        `}
      </style>
    </div>
  );
});

// Helper functions to get titles and content
function getTitle(id) {
  const titles = {
    twitter: "Social Media Sentiment",
    news: "News Sentiment",
    reddit: "AI Written Reports",
    analysis: "Stock Analysis"
  };
  return titles[id];
}

function getContent(id) {
  const content = {
    twitter: "Real-time social media sentiment analysis of popular tweets and trending Reddit posts, providing actionable insights for informed trading decisions.",
    news: "Real-time sentiment analysis of news articles, blogs, and trending posts, providing actionable insights for informed trading decisions.",
    reddit: "AI models analyze both the sentiment data and the reinforcement learning results to generate insights that consider both the quantitative and qualitative aspects of the market.",
    analysis: "Comprehensive stock analysis facilitated by cutting-edge machine learning algorithms, leveraging a diverse range of indicators and reinforcement learning techniques."
  };
  return content[id];
}
