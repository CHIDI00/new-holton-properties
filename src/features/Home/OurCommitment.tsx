import React from "react";
import image6 from "../../assets/project_6.webp";
import ScrollVelocity from "../../ui/ScrollVelocity";
import { CircleDotDashed, ThumbsUp, Users } from "lucide-react";

const OurCommitment: React.FC = () => {
  return (
    <div className="w-full lg:h-[80rem] py-32 flex justify-center items-center">
      <div className="container lg:px-[11rem] md:h-full flex flex-col lg:flex-row justify-between items-center mx-7 gap-20">
        <div className="flex items-center justify-center w-full gap-5 lg:hidden">
          <div
            className="md:max-w-[120px] max-w-[130px] md:py-1 md:px-5 py-4 px-7 mb-6 border-[1.4px] border-blue-600 rounded-full text-black"
            data-aos="flip-left"
          >
            <ScrollVelocity
              texts={["OUR COMMITMENT •"]}
              velocity={12}
              className="custom-scroll-text"
            />
          </div>
        </div>

        <div
          className="group relative lg:h-full w-full lg:w-[45%] md:h-[60rem] h-[40rem] bg-white flex flex-col justify-between items-start rounded-[3rem] bg-no-repeat bg-left-bottom p-5 hover:bg-blue-800 transition-all duration-300 ease-linear overflow-hidden"
          style={{
            backgroundImage: `url(${image6})`,
          }}
          // data-aos="fade-left"
        >
          <div className="absolute w-80 h-24 right-0 top-0 rounded-bl-[3rem] bg-[#fff] flex justify-end items-start">
            <div
              className="absolute w-[30px] h-[30px] bottom-[-29px] -right-1 rotate-180 bg-[#fff]"
              style={{
                clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
              }}
            ></div>
            <div
              className="absolute w-[30px] h-[30px] left-[-29px] top-0 rotate-180 bg-[#fff]"
              style={{
                clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
              }}
            ></div>
          </div>
        </div>

        <div className="w-full lg:w-[50%] md:h-full flex flex-col justify-start items-start  md:gap-10">
          <div className="flex flex-col items-start justify-start w-full gap-5 md:flex">
            {/* <div
							className="hidden md:flex md:max-w-[120px] max-w-[130px] md:py-1 md:px-5 py-4 px-7 mb-6 border-[1.4px] border-[#2A286B] rounded-full text-black "
							data-aos="flip-left"
						>
							<ScrollVelocity
								texts={["OUR COMMITMENT •"]}
								velocity={12}
								className="custom-scroll-text"
							/>
						</div> */}
            <div className="items-start justify-start hidden w-full gap-5 lg:flex">
              <div
                className="md:max-w-[120px] max-w-[130px] md:py-1 md:px-5 py-4 px-7 mb-6 border-[1.4px] border-[#2A286B] rounded-full text-black"
                data-aos="flip-left"
              >
                <ScrollVelocity
                  texts={["OUR COMMITMENT •"]}
                  velocity={12}
                  className="custom-scroll-text"
                />
              </div>
            </div>
            <h1 className="text-black md:text-[6rem] text-[5rem] text-center md:text-left font-bold leading-none">
              What makes us different
            </h1>
            <p className="md:text-[1.5rem] text-[2.2rem] text-center md:text-left font-medium text-gray-600 pt-6 mb-10">
              It’s not just about creating something good; it’s about designing,
              innovating, and collaborating to forge remarkable and unparalleled
              experiences.
            </p>
          </div>

          <div className="flex flex-col w-full ">
            <div className="w-full flex md:flex-row flex-row justify-between md:items-center items-start border-t-[1px] border-gray-300 py-8 gap-11 md:gap-0">
              <span className="md:p-8 p-10 bg-blue-700 rounded-full text-[4rem] text-white mr-8">
                <ThumbsUp />
              </span>
              <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
                <h1 className="text-black md:text-[2rem] leading-tight text-[2.5rem] font-extrabold">
                  Corporate Responsibility
                </h1>
                <p className="md:text-[1.5rem] text-[2.4rem] font-medium text-gray-600 pt-6 md:w-[55%]">
                  Our goal is zero incidents and our lost time frequency rate is
                  industry leading.
                </p>
              </div>
            </div>
            <div className="w-full flex md:flex-row flex-row justify-between md:items-center items-start border-t-[1px] border-gray-300 py-8 gap-11 md:gap-0">
              <span className="md:p-8 p-10 bg-blue-700 rounded-full text-[4rem] text-white mr-8">
                <Users />
              </span>
              <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
                <h1 className="text-black md:text-[2rem] leading-tight text-[2.5rem] font-extrabold">
                  Experts with Team Spirit
                </h1>
                <p className="md:text-[1.5rem] text-[2.4rem] font-medium text-gray-600 pt-6 md:w-[55%]">
                  Our multi-skilled team provides innovative, forward-thinking
                  solutions.
                </p>
              </div>
            </div>
            <div className="w-full flex md:flex-row flex-row justify-between md:items-center items-start border-t-[1px] border-gray-300 py-8 gap-11 md:gap-0">
              <span className="md:p-8 p-10 bg-blue-700 rounded-full text-[4rem] text-white mr-8">
                <CircleDotDashed />
              </span>
              <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
                <h1 className="text-black md:text-[2rem] leading-tight text-[2.5rem] font-extrabold">
                  Diversity, Equity & Inclusion
                </h1>
                <p className="md:text-[1.5rem] text-[2.4rem] font-medium text-gray-600 pt-6 md:w-[55%]">
                  We work with both investors and developers to create landmarks
                  that make an impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
