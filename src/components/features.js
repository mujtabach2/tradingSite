import React, { forwardRef, useEffect, useState, useRef } from "react";
import phone from "../images/phone.png";
import { StarryBackground } from "./starryBackground";
import vector6 from "../images/Vector6.png";
import vector5 from "../images/Vector5.png";
import ethereum from "../images/Ethereum Cryptocurrency Coin.M16 1.png";
import stock from "../images/stock.png";
import news from "../images/news.png";
import twitter from "../images/twitter.webp";
import reddit from "../images/reddit.png";
import stockAn from "../images/stockAnal.png";
import backStock from "../images/Group 1658.png";
import anime from "animejs/lib/anime.es.js";





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
  const [currentGroup, setCurrentGroup] = useState('stock');
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (animationIndex + 1) % 4;
      setCurrentGroup(['stock', 'twitter', 'reddit', 'news'][nextIndex]);
      setAnimationIndex(nextIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div ref={ref} className={isSmallScreen ? " mb-[60vh]" : ""}>
      <div id="features" className=".features relative flex justify-center items-center mb-10 bg-[#F3BA2F] h-20">
        <h1 className="text-black font-bold font-sans text-3xl underline decoration-white underline-offset-8 relative z-10">
          What Makes Us Different
        </h1>
      </div>

      <div className="flex justify-center mb-[30vh]">
        <div className="relative w-[90vw] h-[90vh] b">
          {isSmallScreen ? (
            // Show the specified divs in a column on small screens
            <div className="flex flex-col items-center">
              <div id='twitter-group' className={`w-[220px] h-[300px] bg-[#ffffff1a] rounded-[30px] overflow-hidden shadow-[0px_10px_30px_#0000001a,0px_4px_10px_#00000005,0px_-18px_38px_#00000066] mb-4 transition-all duration-500 ease-in-out ${
            currentGroup === 'twitter' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'
          }`}>
                {/* Content for Twitter Sentiment */}
                <div className="flex flex-col justify-center items-center">
                  <div className="font-medium text-yellow-400 text-2xl tracking-wide leading-normal mt-4">
                    Twitter Sentiment
                  </div>
                  <div className="flex justify-center mt-4">
                    <img className="h-[100px]" alt="Phone" src={twitter} />
                  </div>
                  <div className="flex justify-center mt-4">
                    <p className="w-[11.5rem] text-white text-sm">
                      Real-time sentiment analysis of popular tweets and
                      trending hashtags, providing actionable insights for
                      informed trading decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div id='news-group' className="w-[220px] h-[300px] bg-[#ffffff1a] rounded-[30px] overflow-hidden shadow-[0px_10px_30px_#0000001a,0px_4px_10px_#00000005,0px_-18px_38px_#00000066] mb-4">
                {/* Content for News Sentiment */}
                <div className="flex flex-col justify-center items-center">
                  <div className="font-medium text-yellow-400 text-2xl tracking-wide leading-normal mt-4">
                    News Sentiment
                  </div>
                  <div className="flex justify-center mt-4">
                    <img className="h-[100px]" alt="Phone" src={news} />
                  </div>
                  <div className="flex justify-center mt-4">
                    <p className="w-[11.5rem] text-white text-sm">
                      Real-time sentiment analysis of news articles, blogs, and
                      trending posts, providing actionable insights for informed
                      trading decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div id='reddit-group' className="w-[220px] h-[300px] bg-[#ffffff1a] rounded-[30px] overflow-hidden shadow-[0px_10px_30px_#0000001a,0px_4px_10px_#00000005,0px_-18px_38px_#00000066] mb-4">
                {/* Content for Reddit Sentiment */}
                <div className="flex flex-col justify-center items-center">
                  <div className="font-medium text-yellow-400 text-2xl tracking-wide leading-normal mt-4">
                    Reddit Sentiment
                  </div>
                  <div className="flex justify-center mt-4">
                    <img className="h-[100px]" alt="Phone" src={reddit} />
                  </div>
                  <div className="flex justify-center mt-4">
                    <p className="w-[11.5rem] text-white text-sm">
                      Real-time sentiment analysis of popular posts on twitter
                      and trends on r/wallstreetbets, providing actionable
                      insights for informed trading decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div id='stock-group' className=".stock-group w-[220px] h-[300px] bg-[#ffffff1a] rounded-[30px] overflow-hidden shadow-[0px_10px_30px_#0000001a,0px_4px_10px_#00000005,0px_-18px_38px_#00000066] mb-4">
                {/* Content for Stock Analysis */}
                <div className="flex flex-col justify-center items-center">
                  <div className="font-medium text-yellow-400 text-2xl tracking-wide leading-normal mt-4">
                    Stock Analysis
                  </div>
                  <div className="flex justify-center mt-4">
                    <img className="h-[100px]" alt="Phone" src={stockAn} />
                  </div>
                  <div className="flex justify-center mt-4">
                    <p className="w-[11.5rem] text-white text-sm">
                      Comprehensive stock analysis facilitated by cutting-edge
                      machine learning algorithms, leveraging a diverse range of
                      indicators and reinforcement learning techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-[80vw] h-[70vh] top-[10vh] left-[15vw]">
              <img
                className="absolute w-[220px] h-[220px] top-0 left-[689px] object-cover"
                alt="Ethereum"
                src={ethereum}
              />
              <img
                className="absolute  h-[420px] top-[-4px] left-[219px] object-cover"
                alt="Enlarge option"
                src={stock}
                style={{ zIndex: 10 }}
              />
              <div className="absolute w-[826px] h-[629px] top-[23px] left-0">
                <div className="absolute w-[327px] h-[526px] top-[103px] left-[499px]">
                  <div className="absolute w-[327px] h-[396px] top-0 left-0">
                    <div className="relative h-[396px] left-[-2px]">
                      <div class=".twitter-group w-[220px] h-[300px] left-[107px] bg-[#ffffff1a] rounded-[30px] overflow-hidden shadow-[0px_10px_30px_#0000001a,0px_4px_10px_#00000005,0px_-18px_38px_#00000066] absolute top-0 div-on-hover hover:shadow-inner-radial">
                        <div className="flex mt-[2vh] justify-center [font-family:'Unbounded-Medium',Helvetica] font-medium text-yellow-400 text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
                          Twitter Sentiment
                        </div>
                        <div className="flex-col mt-[-3vh]">
                          <div className="flex justify-center">
                            <img
                              className="h-[180px]"
                              alt="Phone"
                              src={twitter}
                            />
                          </div>
                          <div className="flex justify-center mt-[-4vh]">
                            <p className="w-[11.5rem] hyphens-auto text-white font-monaco  text-[0.8rem]">
                              Real-time sentiment analysis of popular tweets and
                              trending hashtags, providing actionable insights
                              for informed trading decisions.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex mt-[1vh] justify-center font-family:'Unbounded-Medium',Helvetica] font-medium text-white text-[19px] tracking-[0] leading-[normal] whitespace-nowrap">
                        <img
                          className="absolute w-[123px] h-[330px] top-[67px] left-0"
                          alt="Vector"
                          src={vector6}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[222px] h-[160px] top-[366px] left-[105px]">
                    <div className="relative w-[220px] h-[160px] rounded-[30px]">
                      <div className=".news-group w-[220px] h-[300px] top-0 left-2 bg-[#ffffff1a] rounded-[30px] shadow-[0px_10px_30px_#0000001a,0px_4px_10px_#00000005,0px_-18px_38px_#00000066] absolute overflow-hidden  div-on-hover">
                        <div className="flex mt-[2vh] justify-center [font-family:'Unbounded-Medium',Helvetica] font-medium text-yellow-400 text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
                          News Sentiment
                        </div>
                        <div className="flex-col mt-1">
                          <div className="flex justify-center">
                            <img className="h-[100px]" alt="Phone" src={news} />
                          </div>
                          <div className="flex justify-center mt-[1vh]">
                            <p className="w-[11.5rem] hyphens-auto text-white font-monaco text-[0.8rem]">
                              Real-time sentiment analysis of news articles,
                              blogs, and trending posts, providing actionable
                              insights for informed trading decisions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute w-[314px] h-[526px] top-0 left-0">
                  <div className="absolute w-[222px] h-[60px] top-[366px] left-0">
                    <div className="relative w-[220px] h-[60px] rounded-[30px]">
                      <div className=".reddit-group w-[220px] h-[300px] top-0 left-[-20px] bg-[#ffffff1a] rounded-[30px] shadow-[0px_10px_30px_#0000001a,0px_4px_10px_#00000005,0px_-18px_38px_#00000066] absolute overflow-hidden  div-on-hover ">
                        <div className="flex mt-[2vh] justify-center [font-family:'Unbounded-Medium',Helvetica] font-medium text-yellow-400 text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
                          Reddit Sentiment
                        </div>
                        <div className="flex-col mt-[1vh]">
                          <div className="flex justify-center">
                            <img
                              className="h-[100px]"
                              alt="Phone"
                              src={reddit}
                            />
                          </div>
                          <div className="flex justify-center mt-[1vh]">
                            <p className="w-[11.5rem] hyphens-auto text-white font-monaco text-[0.8rem]">
                              Real-time sentiment analysis of popular posts on
                              twitter and trends on r/wallstreetbets, providing
                              actionable insights for informed trading
                              decisions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[314px] h-[383px] top-0 left-0">
                    <div className="relative w-[220px] h-[160px] rounded-[30px]">
                      <div className="relative w-[350px] h-[440px] top-[-56px] left-[-38px]">
                        <img
                          className="absolute w-[128px] h-[312px] top-[127px] left-[222px]"
                          alt="Vector"
                          src={vector5}
                        />
                        <div className=".stock-group absolute w-[220px] h-[300px] top-[26px] left-[29px] bg-[#ffffff1a] rounded-[30px] shadow-[0px_10px_30px_#0000001a,0px_4px_10px_#00000005,0px_-18px_38px_#00000066] overflow-hidden  div-on-hover">
                          <div className="flex mt-[1vh] justify-center  [font-family:'Unbounded-Medium',Helvetica] font-medium text-yellow-400 text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
                            Stock Analysis
                          </div>
                          <div className="flex-col mt-0">
                            <div className="flex justify-center mt-[1vh]">
                              <img
                                className="h-[110px]"
                                alt="Phone"
                                src={stockAn}
                              />
                            </div>
                            <div className="flex justify-center mt-[1vh]">
                              <p className="w-[11.5rem] hyphens-auto text-white font-monaco  text-[0.8rem]">
                                Comprehensive stock analysis facilitated by
                                cutting-edge machine learning algorithms,
                                leveraging a diverse range of indicators and
                                reinforcement learning techniques.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>
        {`
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
