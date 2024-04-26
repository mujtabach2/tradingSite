import React, { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import whiteCircle from "../images/whiteCircle.png";
import yellowCircle from "../images/yellowCircle.png";
import basic from "../images/basicTier.png";
import premium from "../images/premium.png";
import enterprise from "../images/enterpriseTier.png";
import arrow from "../images/arrow-07-svgrepo-com.svg";

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
      <div className="bg-black z-2 pt-[10vh]">
        <div
          className={`flex flex-col justify-start items-center mb-10 h-[30vh] ${isSmallScreen ? "mb-[2vh]" : ""}`}
        >
          <h4 class="text-yellow-400">Pricing</h4>
          <h1
            className={`text-white font-bold font-sans  text-left z-2 ${isSmallScreen ? " text-[2rem]" : "text-[6rem]"}`}
          >
            Start now! Choose your plan
          </h1>

          <div class="flex flex-row gap-10">
            <h2 class="text-white">
              <span class="text-[#50C878] mr-2">&#10003;</span> Save Hours Daily
            </h2>
            <h2 class="text-white">
              <span class="text-[#50C878] mr-2">&#10003;</span> Over 100+ Users
            </h2>
            <h2 class="text-white">
              <span class="text-[#50C878] mr-2">&#10003;</span> Average ROI of
              10%
            </h2>
          </div>
        </div>
        <style>
          {`
           .arrow {
            z-index: 2;
            position: relative;
            /* Add styles for your arrow here (border, width, height, etc.) */
            animation: bounce infinite 1s ease-in-out;
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(3px); }
          }
            .cardy {
              z-index: 1;
            }
          `}
        </style>

        <div class="w-[4rem] ml-[70rem] mb-[-18px] arrow">
          <svg
            viewBox="-20.5 0 287 287"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffe014"
            transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M156.25 265.656C157.94 265.444 158.573 265.656 159.207 265.444C197.847 242.174 224.029 209.172 233.953 164.747C236.487 153.535 236.065 141.899 233.109 130.476C226.985 105.936 206.504 89.0121 181.377 87.5312C168.286 86.685 155.617 88.1659 144.215 95.3586C143.37 101.493 142.737 107.628 141.47 113.34C139.359 122.648 134.502 130.264 125.845 134.918C119.51 138.515 113.176 138.515 109.798 135.13C105.363 130.687 105.364 124.764 108.108 119.898C111.909 113.129 116.554 106.782 121.411 100.859C124.578 97.051 128.801 93.8777 132.602 90.7045C129.012 66.7994 106.419 56.645 79.3921 66.5878C78.5475 69.9726 77.7029 73.569 76.6472 76.9537C72.4242 89.4352 64.6117 98.9549 51.9427 103.397C47.0863 105.09 41.8075 105.724 37.5845 101.282C34.4173 97.8972 34.4173 91.9738 37.7957 86.0504C43.2856 76.7422 51.5204 70.1842 60.3887 64.4723C63.5559 62.5684 66.7232 60.6644 69.8904 58.972C65.6674 21.9508 32.517 -4.28131 0 10.5272C0.211149 7.77702 -1.29001e-05 5.44997 0.844584 4.18067C1.90033 2.69982 4.22297 1.85363 6.12332 1.43053C24.071 -1.95427 40.7518 0.161227 54.4765 13.2773C64.8228 23.0086 71.7908 34.8554 76.4361 48.3946C77.0695 50.2985 77.703 52.2024 78.5476 54.1064C78.5476 54.3179 78.9698 54.5295 79.8144 55.1641C81.7147 54.9526 84.0374 54.9526 86.36 54.5295C114.654 50.087 129.434 57.7027 142.526 84.1464C145.06 83.3002 148.016 82.454 150.761 81.3963C167.019 75.896 183.278 75.4729 199.747 80.9732C226.563 89.8583 243.877 112.917 245.778 142.111C246.833 157.977 244.089 173.209 238.388 188.017C224.452 223.769 201.648 251.905 167.441 270.31C165.752 271.368 163.852 272.214 162.163 273.272C161.951 273.483 161.74 273.906 161.107 275.176C168.286 276.868 175.043 276.233 181.8 275.81C188.345 275.599 195.102 274.964 202.281 274.541C201.648 280.041 198.691 282.157 195.102 283.426C190.879 284.695 186.656 286.388 182.433 286.599C171.031 287.023 159.418 287.234 147.804 286.599C138.725 285.965 136.191 281.099 140.203 273.695C148.86 258.04 157.728 242.386 166.597 226.731C168.075 224.192 169.975 222.077 172.298 219.115C176.31 223.769 174.62 227.154 173.142 230.327C167.23 241.751 161.951 253.175 156.25 265.656ZM43.919 94.9355C58.4883 93.0315 67.5677 83.7233 68.2012 70.6073C58.4883 76.9537 49.1978 82.6656 43.919 94.9355ZM115.288 127.726C127.745 124.764 133.658 116.302 132.391 103.397C124.367 110.167 117.399 116.514 115.288 127.726Z"
                fill="#ffe014"
              ></path>{" "}
            </g>
          </svg>
        </div>

        {/* if small screen then point arrow to the expensively priced plan */}

        <div
          className={`PricingV1 w-full flex justify-center relative bg-black ${isSmallScreen ? "flex-col" : "flex-wrap"} gap-5`}
        >
          {!isSmallScreen ? (
            <div className="w-full sm:w-1/2 lg:w-[8%]"></div>
          ) : null}

          <div className="w-full sm:w-1/2 lg:w-[25%] relative mb-8 p-4 bg-white rounded-3xl shadow border border-gray-100 hover:border-[#F3BA2F] hover:border-4 flex-col justify-center items-center inline-flex">
            {/* ... Content for the first pricing box ... */}
            <div
              className={`lg:w-96 h-[35rem] cardy relative ${isSmallScreen ? "pr-[80vw]" : ""}`}
            >
              <div className="w-10 h-80 left-0 top-[184px] absolute opacity-0 bg-white" />
              <div className="w-80 h-96 left-[40px] top-0 absolute">
                <div className="h-36 left-0 top-[10px] absolute flex-col justify-center items-start gap-4 inline-flex">
                  <div className="w-40 h-16 relative flex-col justify-start items-start flex">
                    <div className="w-16 h-16 justify-center items-center inline-flex">
                      <div className="w-16 h-16 bg-gray-100 rounded-2xl ">
                        <img
                          src={basic}
                          alt="Basic"
                          className="left-1 h-[55px] absolute"
                          style={{ zIndex: 10 }}
                        />
                      </div>
                    </div>

                    <div className="pb-1 flex-col justify-start items-start inline-flex">
                      <div className="text-slate-500 text-lg font-medium font-['DM Sans'] leading-tight">
                        For individuals
                      </div>
                      <div className="text-yellow-950 text-2xl font-bold font-['DM Sans'] leading-9">
                        Basic
                      </div>
                    </div>
                    <div className="w-9 h-9 bg-[#F3BA2F] rounded-full" />
                    <div className="w-10 h-9 origin-top-left -rotate-180 bg-violet-300 rounded-full" />
                  </div>
                  <div className="self-stretch h-14 justify-center items-center inline-flex"></div>
                </div>
                <div className="pb-6 left-0 top-[192px] absolute flex-col justify-start items-start gap-4 inline-flex">
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="text-yellow-950 text-5xl font-bold font-['DM Sans'] leading-10">
                      Free
                    </div>
                    <div className="w-20 h-10 relative">
                      <div className="w-1.5 h-1.5 left-[7.57px] top-0 absolute opacity-0 bg-white" />
                      <div className="left-0 top-[19.78px] absolute text-slate-500 text-xl font-medium font-['DM Sans'] leading-snug"></div>
                    </div>
                  </div>
                  <div className="self-stretch h-48 relative">
                    <div className="left-0 top-0 absolute text-yellow-950 text-lg font-bold font-['DM Sans'] leading-tight">
                      What’s included
                    </div>
                    <div className="w-72 h-36 left-0 top-[44px] absolute flex-col justify-start items-start gap-4 inline-flex">
                      <div className="justify-start items-start inline-flex">
                        <div className="justify-start items-center gap-3.5 flex">
                          <div className="w-6 h-6 justify-center items-center flex">
                            <div className="w-6 h-6 relative">
                              <img
                                src={yellowCircle}
                                alt="yellowCircle"
                                className="w-6 h-6"
                              />
                            </div>
                          </div>
                          <div className="text-yellow-950 text-lg font-normal font-['DM Sans'] leading-tight">
                            1 24 hour Trial
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-start inline-flex">
                        <div className="justify-start items-center gap-3.5 flex">
                          <div className="w-6 h-6 justify-center items-center flex">
                            <div className="w-6 h-6 relative">
                              <img
                                src={yellowCircle}
                                alt="yellowCircle"
                                className="w-6 h-6"
                              />
                            </div>
                          </div>
                          <div className="text-yellow-950 text-lg font-normal font-['DM Sans'] leading-tight">
                            All analytics features
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-start inline-flex">
                        <div className="justify-start items-center gap-3.5 flex">
                          <div className="w-6 h-6 justify-center items-center flex">
                            <div className="w-6 h-6 relative">
                              <img
                                src={yellowCircle}
                                alt="yellowCircle"
                                className="w-6 h-6"
                              />
                            </div>
                          </div>
                          <div className="text-yellow-950 text-lg font-normal font-['DM Sans'] leading-tight">
                            Normal support
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-start inline-flex">
                        <div className="justify-start items-center gap-3.5 flex">
                          <div className="w-6 h-6 justify-center items-center flex">
                            <div className="w-6 h-6 relative">
                              <img
                                src={yellowCircle}
                                alt="yellowCircle"
                                className="w-6 h-6"
                              />
                            </div>
                          </div>
                          <div className="text-yellow-950 text-lg font-normal font-['DM Sans'] leading-tight">
                            1 team members access
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-80 left-0 top-[489px] absolute justify-start items-start inline-flex">
                  <button
                    className="grow shrink basis-0 h-16 px-9 py-6 bg-[#F3BA2F] rounded-full justify-center items-center gap-1.5 flex transition-transform transform-gpu hover:shadow-lg hover:opacity-95"
                    onClick={navigate("/dashboard")}
                  >
                    <div className="text-center text-white text-lg font-bold font-['DM Sans'] leading-tight">
                      Get started
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-[28%] cardy relative mb-8 p-4 bg-black rounded-3xl shadow border border-gray-100 hover:border-[#F3BA2F] hover:border-4 flex-col justify-start items-center inline-flex">
            <div className="w-96 h-[35rem] relative">
              <div className="w-80 h-96 left-[40px] top-0 absolute">
                <div className="w-80 h-36 left-0 top-[10px] absolute">
                  <div className="w-40 h-16 left-0 top-0 absolute">
                    <div className="w-16 h-16 left-0 top-0 absolute justify-center items-center inline-flex">
                      <div className="w-16 h-16 bg-white rounded-2xl" />
                      <img
                        src={premium}
                        alt="Basic"
                        className="left-1 h-[55px] absolute "
                        style={{ zIndex: 10 }}
                      />
                    </div>

                    <div className="pb-1 absolute top-[9vh]">
                      <div className="flex flex-col left">
                        <div className="text-white w-40 text-lg font-medium font-sans leading-tight">
                          For Regular Users
                        </div>
                        <div className="text-yellow-500 text-2xl font-bold font-sans leading-9">
                          Premium
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-80 h-14 left-0 top-[90px] absolute justify-center items-center inline-flex"></div>

                  <div className="w-24 h-10 left-[222px] top-[-18px] absolute">
                    <div className="w-24 h-10 left-0 top-3 absolute bg-yellow-500 rounded-lg transform     rotate-[-5]">
                      <p className="left-5 top-2 absolute text-white text-sm font-bold font-['DM Sans']">
                        Popular
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pb-6 left-0 top-[192px] absolute flex-col justify-start items-start gap-4 inline-flex">
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="text-white text-5xl font-bold font-['DM Sans'] leading-10">
                      $19
                    </div>
                    <div className="w-20 h-10 relative">
                      <div className="w-1.5 h-1.5 left-[7.57px] top-0 absolute opacity-0 bg-white" />
                      <div className="left-0 top-[19.78px] absolute text-zinc-200 text-xl font-medium font-['DM Sans'] leading-snug">
                        /monthly
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-48 relative">
                    <div className="left-0 top-0 absolute text-white text-lg font-bold font-['DM Sans'] leading-tight">
                      What’s included
                    </div>
                    <div className="w-72 h-36 left-0 top-[44px] absolute flex-col justify-start items-start gap-4 inline-flex">
                      <div className="justify-start items-start inline-flex">
                        <div className="justify-start items-center gap-3.5 flex">
                          <div className="w-6 h-6 justify-center items-center flex">
                            <div className="w-6 h-6 relative">
                              <img
                                src={whiteCircle}
                                alt="yellowCircle"
                                className="w-6 h-6"
                              />
                            </div>
                          </div>
                          <div className="text-zinc-200 text-lg font-normal font-['DM Sans'] leading-tight">
                            All analytics features
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-start inline-flex">
                        <div className="justify-start items-center gap-3.5 flex">
                          <div className="w-6 h-6 justify-center items-center flex">
                            <div className="w-6 h-6 relative">
                              <img
                                src={whiteCircle}
                                alt="yellowCircle"
                                className="w-6 h-6"
                              />
                            </div>
                          </div>
                          <div className="text-zinc-200 text-lg font-normal font-['DM Sans'] leading-tight">
                            Signals every weekday
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-start inline-flex">
                        <div className="justify-start items-center gap-3.5 flex">
                          <div className="w-6 h-6 justify-center items-center flex">
                            <div className="w-6 h-6 relative">
                              <img
                                src={whiteCircle}
                                alt="yellowCircle"
                                className="w-6 h-6"
                              />
                            </div>
                          </div>
                          <div className="text-zinc-200 text-lg font-normal font-['DM Sans'] leading-tight">
                            Premium support
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-start inline-flex">
                        <div className="justify-start items-center gap-3.5 flex">
                          <div className="w-6 h-6 justify-center items-center flex">
                            <div className="w-6 h-6 relative">
                              <img
                                src={whiteCircle}
                                alt="yellowCircle"
                                className="w-6 h-6"
                              />
                            </div>
                          </div>
                          <div className="text-zinc-200 text-lg font-normal font-['DM Sans'] leading-tight">
                            Up to 2 team members
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-80 left-0 top-[489px] absolute justify-start items-start inline-flex">
                  <button
                    className="grow shrink basis-0 h-16 px-9 py-6 bg-white rounded-full justify-center items-center gap-1.5 flex transition-transform transform-gpu hover:shadow-lg hover:opacity-95"
                    onClick={subscribePremium}
                  >
                    <div className="text-center text-[#F3BA2F] text-lg font-bold font-['DM Sans'] leading-tight">
                      Get started
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
