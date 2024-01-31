import React from "react";
import phone from "../images/phone.png";   
import { StarryBackground } from "./starryBackground";

export const Features = () => {
    return (
        <div >
        <div className="DesktopFeatureLight14 w-full py-24  flex-col justify-start items-start inline-flex">
        <div className="BackgroundContent w-96 h-px relative" />
        <div className="Content self-stretch h-96 py-24 flex-col justify-start items-center gap-44 flex">
          <div className="TextContent flex-col justify-start items-center gap-1.5 flex">
            <div className="H3 justify-start items-center inline-flex">
              <div className="Product text-center text-white text-2xl font-bold font-sans leading-9 tracking-tight">Features</div>
            </div>
          </div>
          <div className="Container justify-start items-center gap-16 inline-flex" >
            <div className="Mobile w-96 h-96 mr-40 flex-col justify-center items-center inline-flex" style={{marginTop: '-45vh'}}>
              <div className="Screen w-96 h-96 relative">
                <img src={phone} alt="Screen" className="rounded-3xl" />
              </div>
            </div>
            <div className="Row flex-col justify-center items-center gap-9 inline-flex">
              <div className="FeatureStyle1 flex-col justify-start items-start gap-2.5 flex">
                <div className="Headline justify-start items-center gap-2.5 inline-flex">
                  <div className="Numb w-14 h-14 py-3.5 bg-gradient-to-tr from-yellow-400 to-yellow-500 rounded-3xl justify-center items-center flex">
                    <div className=" grow shrink basis-0 self-stretch pr-px flex-col justify-center items-center inline-flex">
                      <div className=" text-center text-white text-2xl font-bold font-['Montserrat'] leading-9 tracking-tight">1</div>
                    </div>
                  </div>
                  <div className="H3 p-2.5 justify-start items-center gap-2.5 flex">
                    <div className="FeatureOne w-52 text-white text-2xl font-bold font-['Montserrat'] leading-9 tracking-tight">FEATURE ONE </div>
                  </div>
                </div>
                <div className="TextParagraphe py-2.5 justify-start items-center gap-2.5 inline-flex">
                  <div className="SlateHelpsYouSeeHowManyMoreDaysYouNeedToWorkToReachYourFinancialGoal w-80 text-neutral-500 text-base font-medium font-['Montserrat'] leading-7 tracking-tight">Slate helps you see how many more days you need to work to reach your financial goal. </div>
                </div>
              </div>
              <div className="FeatureStyle1 flex-col justify-start items-start gap-2.5 flex">
                <div className="Headline justify-start items-center gap-2.5 inline-flex">
                  <div className="Numb w-14 h-14 py-3.5 bg-gradient-to-tr from-yellow-400 to-yellow-500 rounded-3xl justify-center items-center flex">
                    <div className=" grow shrink basis-0 self-stretch flex-col justify-center items-center inline-flex">
                      <div className=" text-center text-white text-2xl font-bold font-['Montserrat'] leading-9 tracking-tight">2</div>
                    </div>
                  </div>
                  <div className="H3 p-2.5 justify-start items-center gap-2.5 flex">
                    <div className="FeatureTwo w-52 text-white text-2xl font-bold font-['Montserrat'] leading-9 tracking-tight">FEATURE TWO </div>
                  </div>
                </div>
                <div className="TextParagraphe py-2.5 justify-start items-center gap-2.5 inline-flex">
                  <div className="SlateHelpsYouSeeHowManyMoreDaysYouNeedToWorkToReachYourFinancialGoal w-80 text-neutral-500 text-base font-medium font-['Montserrat'] leading-7 tracking-tight">Slate helps you see how many more days you need to work to reach your financial goal. </div>
                </div>
              </div>
              <div className="FeatureStyle1 flex-col justify-start items-start gap-2.5 flex">
                <div className="Headline justify-start items-center gap-2.5 inline-flex">
                  <div className="Numb w-14 h-14 py-3.5 bg-gradient-to-tr from-yellow-400 to-yellow-500 rounded-3xl justify-center items-center flex">
                    <div className=" grow shrink basis-0 self-stretch pr-px flex-col justify-center items-center inline-flex">
                      <div className=" text-center text-white text-2xl font-bold font-['Montserrat'] leading-9 tracking-tight">3</div>
                    </div>
                  </div>
                  <div className="H3 p-2.5 justify-start items-center gap-2.5 flex">
                    <div className="FeatureThree w-52 text-white text-2xl font-bold font-['Montserrat'] leading-9 tracking-tight">FEATURE THREE </div>
                  </div>
                </div>
                <div className="TextParagraphe py-2.5 justify-start items-center gap-2.5 inline-flex">
                  <div className="SlateHelpsYouSeeHowManyMoreDaysYouNeedToWorkToReachYourFinancialGoal w-80 text-neutral-500 text-base font-medium font-['Montserrat'] leading-7 tracking-tight">Slate helps you see how many more days you need to work to reach your financial goal. </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}