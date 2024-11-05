import { useState } from "react";
// import BgImage from "../../../assets/Retaurant-img/top-view-bell-pepper-pepper-sliced-black-bowl-white-horizontal 2.png";
import MarketImg from "../../../assets/Retaurant-img/MarketImg.png";
import PercentLogo from "../../../assets/logo/Ellipse 10.png";
import PercentDotLogo from "../../../assets/logo/Ellipse 11.png";
import CallLogo from "../../../assets/logo/call-alt.png";
import Delivery from "./Delivery";

const MarketExperiences = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div className="lg:px-[200px] px-4 lg:my-[120px] my-10">
        <div className="flex lg:flex-row flex-col gap-12">
          <div className="relative">
            <img
              src={MarketImg}
              className=" w-[450px] h-[300px]"
              alt="Market Image"
            />
            <div className="absolute top-3 left-3 bg-white p-2 rounded-3xl w-[200px] shadow-lg">
              <div className="text-black flex justify-center items-center">
                <div className="relative">
                  <img
                    src={PercentLogo}
                    className="w-[94.208px] h-[94.208px]"
                    alt=""
                  />
                  <img
                    src={PercentDotLogo}
                    className="absolute top-2 left-1 "
                    alt=""
                  />
                  <p className="absolute text-3xl font-sans top-[30%] left-[28%]">
                    50+
                  </p>
                </div>
                <p className="w-[95px] ms-2">Market Experiences</p>
              </div>
            </div>
          </div>

          {/* tabs */}
          <div className="lg:w-[50%]">
            <div className="w-full flex justify-center items-center m-0">
              <div className="tabs-container w-full max-w-md">
                <div className="tabs flex justify-start  border-b-2 border-[#B52B1D]">
                  <button
                    className={`tab ${
                      activeTab === 1 ? "bg-[#B52B1D] text-white" : ""
                    }`}
                    onClick={() => setActiveTab(1)}
                  >
                    About
                  </button>
                  <button
                    className={`tab ${
                      activeTab === 2 ? "bg-[#B52B1D] text-white " : ""
                    }`}
                    onClick={() => setActiveTab(2)}
                  >
                    Experience
                  </button>
                  <button
                    className={`tab ${
                      activeTab === 3 ? "bg-[#B52B1D] text-white " : ""
                    }`}
                    onClick={() => setActiveTab(3)}
                  >
                    Contact
                  </button>
                </div>

                {/* Tab content */}
                {activeTab === 1 && (
                  <div className="mt-[30px]">
                    <p className="text-[2.8rem] font-bebas leading-[45px]">
                      EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD
                    </p>
                    <p className="text-[.7rem] font-roboto font-light my-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ornare non sed est cursus. Vel hac convallis ipsum,
                      facilisi odio pellentesque bibendum viverra tempus. Lorem
                      ipsum dolor sit amet consectetur adipiscing elit do
                      eiusmod tempor incididunt ut labore et dolore magna minim
                      veniam nostrud exercitation.
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <button className="bg-[#FEBF00] px-[24px] py-[10px] font-roboto rounded-none">
                        ABOUT MORE
                      </button>
                      <div className="flex justify-center items-center">
                        <img src={CallLogo} alt="call" />
                        <p className="lg:text-[1.2rem] font-roboto font-medium ms-1">
                          +88 3426 739 485
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="mt-[30px]">
                    <p className="text-[2.8rem] font-bebas leading-[45px]">
                      EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD
                    </p>
                    <p className="text-[.7rem] font-roboto font-light my-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ornare non sed est cursus. Vel hac convallis ipsum,
                      facilisi odio pellentesque bibendum viverra tempus. Lorem
                      ipsum dolor sit amet consectetur adipiscing elit do
                      eiusmod tempor incididunt ut labore et dolore magna minim
                      veniam nostrud exercitation.
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <button className="bg-[#00f6fe] px-[24px] py-[10px] font-roboto rounded-none">
                        ABOUT MORE
                      </button>
                      <div className="flex justify-center items-center">
                        <img src={CallLogo} alt="call" />
                        <p className="lg:text-[1.2rem] font-roboto font-medium ms-1">
                          +88 3426 739 485
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 3 && (
                  <div className="mt-[30px]">
                    <p className="text-[2.8rem] font-bebas leading-[45px]">
                      EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD
                    </p>
                    <p className="text-[.7rem] font-roboto font-light my-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ornare non sed est cursus. Vel hac convallis ipsum,
                      facilisi odio pellentesque bibendum viverra tempus. Lorem
                      ipsum dolor sit amet consectetur adipiscing elit do
                      eiusmod tempor incididunt ut labore et dolore magna minim
                      veniam nostrud exercitation.
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <button className="bg-[#fe3b00] px-[24px] py-[10px] font-roboto rounded-none">
                        ABOUT MORE
                      </button>
                      <div className="flex justify-center items-center">
                        <img src={CallLogo} alt="call" />
                        <p className="lg:text-[1.2rem] font-roboto font-medium ms-1">
                          +88 3426 739 485
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Delivery />
      </div>
    </>
  );
};

export default MarketExperiences;
