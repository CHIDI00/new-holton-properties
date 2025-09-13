import React from "react";
import CircularText from "../../ui/CircularText";
import project13 from "../../assets/project_13.webp";
import quote from "../../assets/quotesvg.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials: React.FC = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#f5f5f5] to-[#fbfbfb] flex justify-start items-center md:mt-72 mt-44">
      <div className="absolute md:-top-[22%] -top-[15.2rem] left-[50%] transform -translate-x-1/2 p-5 bg-white rounded-full">
        <div
          className="absolute w-[30px] h-[30px] md:bottom-[7.5rem] md:-right-[27px] right-[-25px] bottom-[8.6rem] rotate-90 bg-[#fff]"
          style={{
            clipPath: "path('M0 0 Q0,30 20,30 L 0 30 Z')",
          }}
        ></div>
        <div
          className="absolute w-[30px] h-[30px] md:left-[-25px] md:bottom-[8.5rem] left-[-25px] bottom-[9.7rem] rotate-180 bg-[#fff]"
          style={{
            clipPath: "path('M0 0 Q0,20 30,20 L0 20 Z')",
          }}
        ></div>
        <div className="flex items-center justify-center text-black ">
          <CircularText
            text={[
              " WHAT PEOPLE SAY *",
              "WHAT PEOPLE SAY *",
              "WHAT PEOPLE SAY *",
              "WHAT PEOPLE SAY *",
            ]}
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          >
            <div
              className="w-[75%] h-[75%] bg-white rounded-full bg-cover bg-no-repeat bg-center flex justify-center items-center "
              style={{ backgroundImage: `url('${project13}')` }}
            >
              <img src={quote} draggable="false" alt="" className="" />
            </div>
          </CircularText>
        </div>
      </div>

      <div className="container lg:px-[11rem] flex flex-col md:flex-row justify-between items-center mx-7 my-[15rem] lg:gap-52 gap-20 md:mx-auto">
        <div className="hidden md:flex">
          <button
            type="button"
            title="Previous"
            className="w-[60px] h-[60px] bg-white rounded-full text-center flex justify-center items-center cursor-pointer"
          >
            <ChevronLeft />
          </button>
        </div>
        <div className="flex flex-col items-start justify-start w-full md:gap-10 ">
          <h1 className="text-center text-[2.5rem] md:text-[3.7rem] font-extrabold leading-tight text-black mb-10">
            "A wonderfull experience, they knew what they were doing and were
            incredibly knowledgable throughout the process"
          </h1>

          <div className="flex flex-col items-center justify-center w-full">
            <p className="text-[2rem] font-bold border-b-2 border-blue-900 mb-3">
              John McConnor
            </p>
            <p className="text-[1.5rem] text-gray-500 font-medium">
              Senior Marketer Manager
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center md:hidden gap-14">
          <button
            type="button"
            title="Previous"
            className="w-[60px] h-[60px] bg-white rounded-full text-center flex justify-center items-center cursor-pointer"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            title="Next"
            className="w-[60px] h-[60px] bg-white rounded-full text-center flex justify-center items-center cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
        <div className="hidden md:flex">
          <button
            type="button"
            title="Next"
            className="w-[60px] h-[60px] bg-white rounded-full text-center flex justify-center items-center cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
