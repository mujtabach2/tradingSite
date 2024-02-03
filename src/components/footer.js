import React from "react";
import linkedin from "../images/icons8-linkedin-24.png";
import github from "../images/icons8-github-24.png";
import email from "../images/icons8-email-24.png";
import logo from "../images/logo.png";
export const Footer = () => {
  return (
    <footer className="footer absolute w-full bg-[#1a1a1a] h-[50vh] mt-20">
      <div className="flex justify-center items-center">
        <div className="flex-col text-center ml-10">
          <div className="text-white flex justify-center font-bold font-lato text-[2rem] text-base mb-10 mt-10">
            <img src={logo} alt="Logo" className="h-[10vh]" />
          </div>
          <div className="text-white font-bold font-open-sans w-[60vw] text-xs">
            SharpeTrade is a trading platform that allows users to make informed
            decisions about their investments with the help of AI and machine
            learning techniques combined with real-time data and sentiment
            analysis.
          </div>
          <div className="flex justify-center items-center gap-4 mt-10 mb-20">
            <button className="text-white px-5 py-1 text-opacity-90 text-base font-medium font-Inter leading-normal hover:text-opacity-80 border-white bg-[#F3BA2F] rounded-[12px]">
              Contact Us
            </button>
            <button className="text-white px-5  py-1 text-opacity-90 text-base font-medium font-Inter leading-normal hover:text-opacity-80 border-white bg-[#F3BA2F] rounded-[12px]">
              About Us
            </button>
            <button className="text-white px-5  py-1 text-opacity-90 text-base font-medium font-Inter leading-normal hover:text-opacity-80 border-white bg-[#F3BA2F] rounded-[12px]">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-10">
        <div className="text-white font-bold font-open-sans text-base">
          SharpeTrade. All rights reserved.© 2024
        </div>

        <div className="text-white font-bold font-open-sans text-base">
          <div className="flex justify-center items-center gap-4">
            <button className="text-white text-opacity-90 text-base font-medium font-Inter leading-normal hover:text-opacity-80 ">
              <img src={email} alt="email" />
            </button>
            <button className="text-white text-opacity-90 text-base font-medium font-Inter leading-normal hover:text-opacity-80 ">
              <img src={linkedin} alt="linkedin" />
            </button>
            <button className="text-white text-opacity-90 text-base font-medium font-Inter leading-normal hover:text-opacity-80 ">
              <img src={github} alt="github" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
