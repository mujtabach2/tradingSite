import React from "react";
import whiteCircle from "../images/whiteCircle.png";
import yellowCircle from "../images/yellowCircle.png";
import basic from "../images/basicTier.png";
import premium from "../images/premium.png";
import enterprise from "../images/enterpriseTier.png";

export const Pay = () => {
  return (
    <div>
      <div className="flex justify-center items-center  mb-10 bg-white h-20">
        <h1 className="text-black font-bold font-sans text-3xl underline decoration-[#F3BA2F] underline-offset-8 z-2">
          Account Options
        </h1>
      </div>
      <div className="PricingV1 w-full flex relative bg-black flex-wrap gap-5">
        <div className=" w-full sm:w-1/2 lg:w-[8%]"></div>
        <div className="w-full sm:w-1/2 lg:w-[25%] relative mb-8 p-4 bg-white rounded-3xl shadow border border-gray-100 flex-col justify-start items-center inline-flex">
          {/* ... Content for the first pricing box ... */}
          <div className="w-96 h-96 relative">
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
                    $99
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
                          Up to 250,000 tracked visits
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
                          Up to 3 team members
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-80 left-0 top-[489px] absolute justify-start items-start inline-flex">
                <button className="grow shrink basis-0 h-16 px-9 py-6 bg-[#F3BA2F] rounded-full justify-center items-center gap-1.5 flex transition-transform transform-gpu hover:shadow-lg hover:opacity-95">
                  <div className="text-center text-white text-lg font-bold font-['DM Sans'] leading-tight">
                    Get started
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-[28%] relative mb-8 p-4 bg-black-400 rounded-3xl shadow border border-gray-100 flex-col justify-start items-center inline-flex">
          <div className="w-96 h-[35rem] relative">
            <div className="w-10 h-80 left-[348px] top-[184px] absolute opacity-0 bg-white" />
            <div className="w-10 h-80 left-0 top-[184px] absolute opacity-0 bg-white" />
            <div className="w-80 h-96 left-[40px] top-0 absolute">
              <div className="w-80 h-36 left-0 top-[10px] absolute">
                <div className="w-40 h-16 left-0 top-0 absolute">
                  <div className="w-16 h-16 left-0 top-0 absolute justify-center items-center inline-flex">
                    <div className="w-16 h-16 bg-white rounded-2xl" />
                  </div>
                  <div className="w-16 h-16 justify-center items-center inline-flex">
                    <div className="w-16 h-16 bg-white rounded-2xl ">
                      <img
                        src={premium}
                        alt="Basic"
                        className="left-1 h-[55px] absolute "
                        style={{ zIndex: 10 }}
                      />
                    </div>
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
                    $199
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
                          Up to 1,000,000 tracked visits
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
                          Up to 10 team members
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-80 left-0 top-[489px] absolute justify-start items-start inline-flex">
              <button className="grow shrink basis-0 h-16 px-9 py-6 bg-white rounded-full justify-center items-center gap-1.5 flex transition-transform transform-gpu hover:shadow-lg hover:opacity-95">
                  <div className="text-center text-[#F3BA2F] text-lg font-bold font-['DM Sans'] leading-tight">
                    Get started
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-[25%] relative mb-8 p-4 bg-white rounded-3xl shadow border border-gray-100 flex-col justify-start items-center inline-flex">
          <div className="w-96 h-96 relative">
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
                          Up to 5,000,000 tracked visits
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
                    Get started
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
