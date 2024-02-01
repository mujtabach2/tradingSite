import React from "react";
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

export const Features = () => {
  return (
    <div className="flex justify-center mb-[30vh]">
      <div className="relative w-[1024px] h-[872px] b">
        <div className="flex justify-center [font-family:lato] font-medium text-white text-[3rem] tracking-[0]  whitespace-nowrap">
          What makes us different?
        </div>
        <div className="absolute w-[909px] h-[652px] top-[128px] left-[100px]">
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
                  <div className="w-[220px] h-[300px] left-[107px] bg-[#ffffff1a] rounded-[30px] overflow-hidden shadow-[0px_10px_30px_#0000001a,0px_4px_10px_#00000005,0px_-18px_38px_#00000066] absolute top-0">
                    <div className="flex mt-[2vh] justify-center [font-family:'Unbounded-Medium',Helvetica] font-medium text-yellow-400 text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Twitter Sentiment
                    </div>
                    <div className="flex-col mt-[-3vh]">
                      <div className="flex justify-center">
                        <img className="h-[180px]" alt="Phone" src={twitter} />
                      </div>
                      <div className="flex justify-center mt-[-4vh]">
                        <p className="w-[12rem] text-center text-white text-[13px]">
                          Real-time sentiment analysis of popular tweets and
                          trending hashtags, providing actionable insights for
                          informed trading decisions.
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
                  <div className="w-[220px] h-[300px] top-0 left-2 bg-[#ffffff1a] rounded-[30px] shadow-[0px_10px_30px_#0000001a,0px_4px_10px_#00000005,0px_-18px_38px_#00000066] absolute overflow-hidden">
                    <div className="flex mt-[2vh] justify-center [font-family:'Unbounded-Medium',Helvetica] font-medium text-yellow-400 text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
                      News Sentiment
                    </div>
                    <div className="flex-col mt-1">
                      <div className="flex justify-center">
                        <img className="h-[100px]" alt="Phone" src={news} />
                      </div>
                      <div className="flex justify-center mt-[1vh]">
                        <p className="w-[12rem] text-center text-white text-[13px]">
                          Real-time sentiment analysis of news articles, blogs,
                          and trending posts, providing actionable insights for
                          informed trading decisions.
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
                  <div className="w-[220px] h-[300px] top-0 left-[-20px] bg-[#ffffff1a] rounded-[30px] shadow-[0px_10px_30px_#0000001a,0px_4px_10px_#00000005,0px_-18px_38px_#00000066] absolute overflow-hidden">
                    <div className="flex mt-[2vh] justify-center [font-family:'Unbounded-Medium',Helvetica] font-medium text-yellow-400 text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
                      Reddit Sentiment
                    </div>
                    <div className="flex-col mt-[1vh]">
                      <div className="flex justify-center">
                        <img className="h-[100px]" alt="Phone" src={reddit} />
                      </div>
                      <div className="flex justify-center mt-[1vh]">
                        <p className="w-[12rem] text-center text-white text-[13px]">
                          Real-time sentiment analysis of popular posts on
                          twitter and trends on r/wallstreetbets, providing
                          actionable insights for informed trading decisions.
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
                    <div className="absolute w-[220px] h-[300px] top-[26px] left-[29px] bg-[#ffffff1a] rounded-[30px] shadow-[0px_10px_30px_#0000001a,0px_4px_10px_#00000005,0px_-18px_38px_#00000066] overflow-hidden">
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
                          <p className="w-[12rem] text-center text-white text-[13px]">
                            Comprehensive stock analysis facilitated by
                            cutting-edge machine learning algorithms, leveraging
                            a diverse range of indicators and reinforcement
                            learning techniques.
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
      </div>
    </div>
  );
};
