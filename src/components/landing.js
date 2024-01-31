import React from "react";
import stars from "../images/starss.png";

export const Landing = () => {
    return (
        <div className="16 w-full flex-col justify-start items-center gap-10 inline-flex my-20">
            <style>
                {`
                    .shadow-inner-radial{
                        box-shadow: inset 0 0 20px #F3BA2F, 0 0 20px #F3BA2F;; 
                      }
                `}                      
            </style>
            <div className="relative w-96 h-16 bg-black rounded-3xl border-1 ">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-yellow-400 via-transparent to-black"></div>
            <div className="absolute inset-0 rounded-3xl bg-black shadow-inner-radial"></div>
                <div className="5 w-24 h-1 left-[155px] top-[60px] absolute bg-white rounded-tl-full rounded-tr-full" />
                <div className="10 left-[29px] top-[16px] absolute justify-start items-center gap-3 inline-flex">
                <div className=" relative">
                    <img src={stars} alt="Group3" className="w-7 h-8 relative" />
                </div>
                <div className="items-center flex">
                    <div className="NewOurAiIntegrationJustLanded text-white text-lg font-medium font-['Inter'] leading-normal">New: Our AI integration just landed</div>
                </div>
                </div>
            </div>
            <div className="12 flex-col justify-start items-center gap-6 flex">
                <div className="2 flex-col justify-start items-start flex">
                <div className="text-center text-white text-6xl font-bold font-['Inter'] leading-10" style={{ lineHeight: "1" }}>
                    Discover endless possibilities in the world of Trading.
                </div>

               
                </div>
                <div className="w-[54rem] text-center text-gray-400 text-lg font-medium font-['Inter'] leading-normal">Step into the world of trading excellence and seize every opportunity with our advanced platform, expert guidance, and strategic insights for unrivaled financial success.</div>
            </div>
            <div className="8 justify-start items-start gap-6 inline-flex">
                <div className="Spacing justify-start items-center gap-2 flex">
                <div className="F1ba65dd9532c03e563LineSvg w-9 h-9 relative" />
                <div className="FastTrading text-white text-lg font-medium font-['Inter'] leading-normal">Fast Trading</div>
                </div>
                <div className="Spacing justify-start items-center gap-2 flex">
                <div className="F1a01baa4acd99a562aCornerSvg w-9 h-9 relative" />
                <div className="SecureReliable text-white text-lg font-medium font-['Inter'] leading-normal">Secure & Reliable</div>
                </div>
                <div className="Spacing justify-start items-center gap-2 flex">
                <div className="7 h-9 justify-center items-center flex">
                    <div className="F1b7c69a23ad15cc47cUpdateSvg grow shrink basis-0 self-stretch justify-center items-start inline-flex">
                    <div className="F1b7c69a23ad15cc47cUpdateSvg w-9 h-9 relative" />
                    </div>
                </div>
                <div className="ContinuousMarketUpdates text-white text-lg font-medium font-['Inter'] leading-normal">Continuous Market Updates</div>
                </div>
            </div>
            <div className="11 justify-start items-start gap-6 inline-flex">
                <div className="Link pl-6 pr-7 py-4 bg-white rounded-3xl shadow shadow-inner justify-center items-center gap-2.5 flex">
                <div className="E275df6d0fc5b329129b81FireSvg h-6 justify-center items-start flex">
                    <div className="E275df6d0fc5b329129b81FireSvg h-6 px-0.5 py-px justify-start items-start flex" />
                </div>
                <div className="DivBtnLabel pr-px justify-center items-start flex">
                    <div className="StartTrading text-center text-white text-lg font-medium font-['Inter'] leading-normal">Start Trading</div>
                </div>
                </div>
                <div className="Link h-14 pl-6 pr-7 py-4 bg-white rounded-3xl shadow shadow-inner justify-start items-start gap-3 flex">
                <div className="D2ad7739c0ae2d6a345GiftSvg h-6 justify-center items-start flex">
                    <div className="D2ad7739c0ae2d6a345GiftSvg w-6 h-6 relative" />
                </div>
                <div className="TryDemo text-center text-white text-lg font-medium font-['Inter'] leading-normal">Try Demo</div>
                </div>
            </div> 
            </div>
    );
    }