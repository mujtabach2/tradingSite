import React, { useState, useEffect, useContext } from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext";

export const HeaderComp = ({ scrollToPay, scrollToFeatures }) => {
  const [isHeaderFixed, setHeaderFixed] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header>
      {/* Your existing header content goes here */}
      <div className="flex justify-center">
        <div className={`container mx-auto py-4`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                className="h-[10vh] w-auto sm:h-[4vh]"
                src={logo}
                alt="Logo"
              />
            </div>
            <div
              className={` ml-[13vh] flex hidden md:flex ml-10 space-x-6 border border-solid border-white border-opacity-15 bg-white bg-opacity-15 backdrop-filter backdrop-blur-10 rounded-full px-4 py-5 z-20 ${isHeaderFixed ? "fixed left-1/2 transform -translate-x-1/2 bg-opacity-40 bg-grey" : ""}`}
            >
              <button
                className="text-white text-opacity-90 text-base font-medium font-['Inter'] leading-normal hover:bg-opacity-20 hover:underline decoration-[#F3BA2F] underline-offset-8"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </button>
              <button
                className="text-white text-opacity-90 text-base font-medium font-['Inter'] leading-normal hover:bg-opacity-20 hover:underline decoration-[#F3BA2F] underline-offset-8"
                onClick={scrollToPay}
              >
                Plans
              </button>
              <button
                className="text-white text-opacity-90 text-base font-medium font-['Inter'] leading-normal hover:bg-opacity-20 hover:underline decoration-[#F3BA2F] underline-offset-8"
                onClick={scrollToFeatures}
              >
                Features
              </button>
              <button className="text-white text-opacity-90 text-base font-medium font-['Inter'] leading-normal hover:bg-opacity-20 hover:underline decoration-[#F3BA2F] underline-offset-8">
                Community
              </button>
            </div>
            <div className="flex items-center space-x-6">
              {user ? (
                <button
                  className="text-white text-opacity-90 text-base font-medium font-['Inter'] leading-normal hover:text-opacity-80 "
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </button>
              ) : (
                <button
                  className="text-white text-opacity-90 text-base font-medium font-['Inter'] leading-normal hover:text-opacity-80 "
                  onClick={() => navigate("/register")}
                >
                  Login
                </button>
              )}

              <div className="bg-black rounded-3xl shadow-inner border border-[#F3BA2F] hover:bg-[#F3BA2F]">
                <button
                  className="py-3 px-6 text-center text-white text-lg font-medium font-['Inter'] leading-normal "
                  onClick={scrollToPay}
                >
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
