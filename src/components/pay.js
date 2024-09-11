import React, { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import whiteCircle from "../images/whiteCircle.png";
import yellowCircle from "../images/yellowCircle.png";
import basic from "../images/basicTier.png";
import premium from "../images/premium.png";
import enterprise from "../images/enterpriseTier.png";
import arrow from "../images/arrow.png";

export const Pay = forwardRef((props, ref) => {
  const navigate = useNavigate();

  const subscribePremium = async () => {
    try {
      window.location.href = "https://buy.stripe.com/test_6oE16g8PtcKyfKMaEF";
    } catch (error) {
      console.error("Error subscribing to premium:", error);
    }
  };
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
    <div ref={ref}>
      <div className="bg-black z-2 pt-[5vh] px-4 md:px-8 relative">
        <div className="flex flex-col justify-start items-center mb-8 md:mb-10">
          <h4 className="text-yellow-400 text-lg md:text-xl mb-2">Pricing</h4>
          <h1 className="text-white font-bold font-sans text-center z-2 text-3xl md:text-5xl lg:text-6xl mb-4">
            Start now! Choose your plan
          </h1>

          <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-base md:text-lg">
            <h2 className="text-white">
              <span className="text-[#50C878] mr-2">&#10003;</span> Save Hours Daily
            </h2>
            <h2 className="text-white">
              <span className="text-[#50C878] mr-2">&#10003;</span> Over 100+ Users
            </h2>
            <h2 className="text-white">
              <span className="text-[#50C878] mr-2">&#10003;</span> Average ROI of 10%
            </h2>
          </div>
        </div>
        <style>
          {`
           .arrow {
            z-index: 2;
            position: relative;
            /* Add styles for your arrow here (border, width, height, etc.) */
            animation: bounce 1s ease-in-out infinite;
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(3px); }
          }
          @keyframes glow {
            0% { box-shadow: 0 0 10px #fff; }
            50% { box-shadow: 0 0 20px #fff; }
            100% { box-shadow: 0 0 10px #fff; }
          }
            .cardy {
              z-index: 1;
            }
            .bouncy {
              animation: glow 3s infinite;
            }
          `}
        </style>

        <div className="hidden md:block absolute right-[calc(25%-2rem)] top-[calc(40vh-2rem)] w-16 h-16 arrow">
          <img src={arrow} alt="arrow" className="w-full h-full transform rotate-[-30deg]" />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-5">
          <PricingCard
            tier="Basic"
            price="Free"
            features={[
              "24-hour trial access",
              "Basic analytics features",
              "Email support",
              "Single user access"
            ]}
            buttonText="Start Free Trial"
            onClick={() => navigate("/dashboard")}
            isLight={true}
          />

          <PricingCard
            tier="Premium"
            price="$19"
            period="/monthly"
            features={[
              "Full analytics suite",
              "Daily trading signals",
              "Priority support",
              "Up to 2 team members"
            ]}
            buttonText="Subscribe Now"
            onClick={subscribePremium}
            isPopular={true}
          />
        </div>
      </div>
    </div>
  );
});

const PricingCard = ({ tier, price, period, features, buttonText, onClick, isLight, isPopular }) => {
  const bgColor = isLight ? "bg-white" : "bg-black";
  const textColor = isLight ? "text-yellow-950" : "text-white";
  const buttonBgColor = isLight ? "bg-[#F3BA2F]" : "bg-white";
  const buttonTextColor = isLight ? "text-white" : "text-[#F3BA2F]";

  return (
    <div className={`w-full max-w-sm ${bgColor} rounded-3xl shadow border border-gray-100 hover:border-[#F3BA2F] hover:border-4 p-6 flex flex-col justify-between`}>
      <div>
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className={`${textColor} text-lg font-medium`}>{tier === "Basic" ? "For Trial" : "For Regular Users"}</p>
            <h3 className={`${isLight ? "text-yellow-950" : "text-yellow-500"} text-2xl font-bold`}>{tier}</h3>
          </div>
          {isPopular && (
            <div className="bg-yellow-500 text-white text-sm font-bold py-1 px-3 rounded-lg transform -rotate-12">
              Popular
            </div>
          )}
        </div>
        <div className="mb-6">
          <span className={`${textColor} text-4xl font-bold`}>{price}</span>
          {period && <span className={`${textColor} text-xl ml-1`}>{period}</span>}
        </div>
        <div className="mb-8">
          <h4 className={`${textColor} font-bold mb-4`}>What's included</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <img src={isLight ? yellowCircle : whiteCircle} alt="check" className="w-5 h-5 mr-3" />
                <span className={`${textColor} text-base`}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        className={`w-full ${buttonBgColor} ${buttonTextColor} font-bold py-3 px-6 rounded-full hover:opacity-90 transition-opacity`}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};
