import React, { forwardRef, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import whiteCircle from "../images/whiteCircle.png";
import yellowCircle from "../images/yellowCircle.png";
import basic from "../images/basicTier.png";
import premium from "../images/premium.png";
import enterprise from "../images/enterpriseTier.png";

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
        <div className={`flex justify-start items-center mb-10 h-[30vh] ${isSmallScreen ? "mb-[2vh]" : ""}`}>
        <h1 className={`text-white font-bold font-sans ml-[10vw]  text-left z-2 ${ isSmallScreen ? " text-[2rem]" : "text-[6rem]"}`}>
             CHOOSE A PLAN THAT WORKS FOR YOU
        </h1>

        </div>
        <div className={`PricingV1 w-full flex relative bg-black ${isSmallScreen ? "flex-col" : "flex-wrap"} gap-5`}>
        {!isSmallScreen ? (
  <div className="w-full sm:w-1/2 lg:w-[8%]"></div>
) : null}

          <div className="w-full sm:w-1/2 lg:w-[25%] relative mb-8 p-4 bg-white rounded-3xl shadow border border-gray-100 hover:border-[#F3BA2F] hover:border-4 flex-col justify-start items-center inline-flex">
            {/* ... Content for the first pricing box ... */}
            <div className={`lg:w-96 h-[35rem] relative ${isSmallScreen ? 'pr-[80vw]' : ""}`}>
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

          <div className="w-full sm:w-1/2 lg:w-[28%] relative mb-8 p-4 bg-black rounded-3xl shadow border border-gray-100 hover:border-[#F3BA2F] hover:border-4 flex-col justify-start items-center inline-flex">
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
          <div className="w-full sm:w-1/2 lg:w-[25%] relative mb-8 p-4 bg-white rounded-3xl shadow border border-gray-100 hover:border-[#F3BA2F] hover:border-4 flex-col justify-start items-center inline-flex">
            <div className="w-96 h-[35rem] relative">
              <div className="w-10 h-80 left-[348px] top-[184px] absolute opacity-0 bg-white" />
              <div className="w-10 h-80 left-0 top-[184px] absolute opacity-0 bg-white" />
              <div className="w-80 h-96 left-[40px] top-0 absolute">
                <div className="h-36 left-0 top-[10px] absolute flex-col justify-center items-start gap-4 inline-flex">
                  <div className="w-56 h-16 relative flex-col justify-start items-start flex">
                    <div className="w-16 h-16 justify-center items-center inline-flex">
                      <div className="w-16 h-16 bg-gray-100 rounded-2xl ">
                        <img
                          src={enterprise}
                          alt="Basic"
                          className="left-2 h-[55px] absolute"
                          style={{ zIndex: 10 }}
                        />
                      </div>
                    </div>

                    <div className="pb-1 flex-col justify-start items-start inline-flex">
                      <div className="text-slate-500 text-lg font-medium font-['DM Sans'] leading-tight">
                        For big companies
                      </div>
                      <div className="text-yellow-950 text-2xl font-bold font-['DM Sans'] leading-9">
                        Enterprise
                      </div>
                    </div>
                    <div className="w-11 h-11 relative"></div>
                  </div>
                  <div className="self-stretch h-14 justify-center items-center inline-flex"></div>
                </div>
                <div className="pb-6 left-0 top-[192px] absolute flex-col justify-start items-start gap-4 inline-flex">
                  <div className="self-stretch h-16 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-yellow-950 text-5xl font-bold font-['DM Sans'] leading-10">
                      $399
                    </div>
                    <div className="w-20 h-10 relative">
                      <div className="w-1.5 h-1.5 left-[7.57px] top-0 absolute opacity-0 bg-white" />
                      <div className="left-0 top-[19.78px] absolute text-slate-500 text-xl font-medium font-['DM Sans'] leading-snug">
                        /monthly
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-48 relative">
                    <div className="left-0 top-0 absolute text-yellow-950 text-lg font-bold font-['DM Sans'] leading-tight">
                      What’s included
                    </div>
                    <div className="w-72 h-36 left-0 top-[44px] absolute flex-col justify-center items-start gap-4 inline-flex">
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
                            Signals every day in multiple markets
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
                            Dedicated support
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
                            Up to 50 team members
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-80 left-0 top-[489px] absolute justify-start items-start inline-flex">
                  <button className="grow shrink basis-0 h-16 px-9 py-6 bg-[#F3BA2F] rounded-full justify-center items-center gap-1.5 flex transition-transform transform-gpu hover:shadow-lg hover:opacity-95">
                    <div className="text-center text-white text-lg font-bold font-['DM Sans'] leading-tight">
                      Contact Us
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
