import React, { useEffect, useState } from "react";
import stars from "../images/starss.png";
import dashboardImg from "../images/dashboardPic.png";

export const Landing = ({ scrollToPay }) => {
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
  }, []); // Empty dependency array ensures that this effect only runs once after initial render
  return (
    <div className="relative w-full flex-col justify-start items-center gap-10 inline-flex my-20">
      <style>
        {`
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

            .shadow-inner-radial {
            box-shadow: inset 0 0 20px #F3BA2F, 0 0 20px #F3BA2F;
            animation: pulse 2s infinite;
            }

            @keyframes slideInFromLeft {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(0);
              }
            }

            .animate-slide-in {
              animation: slideInFromLeft 1s ease-in-out;
            }
        `}
      </style>
      <div className="w-96 h-16 bg-black rounded-3xl border-1 px-5 relative">
        <div class="shadow-container">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-yellow-400 via-transparent to-black"></div>
          <div className="absolute inset-0 rounded-3xl bg-black shadow-inner-radial"></div>
        </div>

        <div className="left-[28px] top-[16px] absolute justify-start items-center gap-3 inline-flex">
          <div className=" relative">
            <img src={stars} alt="Group3" className="w-7 h-8 relative" />
          </div>
          <div className="items-center flex">
            <div className="NewOurAiIntegrationJustLanded text-white text-lg font-medium font-['Inter'] leading-normal p2-2">
              New: Our AI integration just landed
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-center gap-6 flex">
        <div className="flex-col justify-start items-start flex">
          <div
            className={`text-center text-white font-bold font-['Inter'] leading-10 animate-slide-in ${isSmallScreen ? "text-2xl w-[90vw]" : " text-6xl"}`}
            style={{ lineHeight: "1" }}
          >
            Discover endless possibilities in the world of Trading.
          </div>
        </div>
        <div
          className={`w-[54rem] text-center text-gray-400 font-medium font-['Inter'] leading-normal ${isSmallScreen ? "text-1l w-[90vw]" : " text-lg "}`}
        >
          Step into the world of trading excellence and seize every opportunity
          with our advanced platform, expert guidance, and strategic insights
          for unrivaled financial success.
        </div>
      </div>
      <div className="justify-start items-start gap-6 inline-flex">
        <div className="Spacing justify-start items-center gap-2 flex">
          <div className="F1ba65dd9532c03e563LineSvg w-9 h-9  relative" />
          <div
            className={`FastTrading text-white font-medium font-['Inter'] leading-normal ${isSmallScreen ? "text-[0.9rem]" : "text-lg"}`}
          >
            Daily Signals 📈
          </div>
        </div>
        <div className="Spacing justify-start items-center gap-2 flex">
          <div className="F1a01baa4acd99a562aCornerSvg w-9 h-9 relative" />
          <div
            className={`FastTrading text-white font-medium font-['Inter'] leading-normal ${isSmallScreen ? "text-[0.9rem]" : "text-lg"}`}
          >
            Diverse Assets 🌎
          </div>
        </div>
        <div className="Spacing justify-start items-center gap-2 flex">
          <div className="7 h-9 justify-center items-center flex">
            <div className="F1b7c69a23ad15cc47cUpdateSvg grow shrink basis-0 self-stretch justify-center items-start inline-flex">
              <div className="F1b7c69a23ad15cc47cUpdateSvg w-9 h-9 relative" />
            </div>
          </div>
          <div
            className={`FastTrading text-white font-medium font-['Inter'] leading-normal ${isSmallScreen ? "text-[0.9rem]" : "text-lg"}`}
          >
            Continuous Market Updates 🚀
          </div>
        </div>
      </div>
      <div className="justify-start items-start gap-6 inline-flex">
        <div className="Link pl-6 pr-7 py-4 bg-dark-blue rounded-3xl shadow shadow-inner justify-center items-center gap-2.5 flex">
          <div className=" h-6 justify-center items-start flex">
            <div className="h-6 px-0.5 py-px justify-start items-start flex" />
          </div>
          <div className="pr-px justify-center items-start flex">
            <button
              className="px-5 py-2 rounded-[15px] border-2 border-yellow-400 bg-gradient-to-r from-yellow-500 to- hover:from-black hover:to-yellow-500 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring focus:border-blue-300"
              onClick={scrollToPay}
            >
              <div className="StartTrading text-center text-white text-lg font-medium font-['Inter'] leading-normal">
                🚀 Start Trading
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[-2vh]">
        <div className="relative w-[80%]">
          <img src={dashboardImg} alt="Dashboard" className="w-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-150"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-[10%]"></div>
        </div>
      </div>
    </div>
  );
};
