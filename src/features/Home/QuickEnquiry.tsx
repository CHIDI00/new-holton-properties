import React from "react";
import project3 from "../../assets/project_3.webp";
import sketch1 from "../../assets/sketch1.webp";
import sketch2 from "../../assets/sketch2.webp";
import ScrollVelocity from "../../ui/ScrollVelocity";
import { ArrowUpRight } from "lucide-react";

const QuickEnquiry: React.FC = () => {
  return (
    <div className="w-full bg-[#fbfbfb] pb-32">
      <div
        className="relative w-[95%] lg:h-[94vh] md:h-[70vh] h-[90vh] flex justify-center items-center mx-auto rounded-[3rem] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${project3})` }}
      >
        <div className="absolute w-80 h-[5rem] left-0 bottom-0 rounded-bl-[3rem] rounded-tr-[3rem] bg-[#fbfbfb] flex justify-end items-start">
          <div
            className="absolute w-[30px] h-[30px] right-[-29px] bottom-0 rotate-360 bg-[#fbfbfb]"
            style={{
              clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
            }}
          ></div>
          <div
            className="absolute w-[30px] h-[30px] top-[-29px] left-0 rotate-360 bg-[#fbfbfb]"
            style={{
              clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
            }}
          ></div>
        </div>

        <div className="relative flex flex-col justify-center items-center md:w-[85%] w-[95%] md:h-[80%] h-[85%] bg-white rounded-[3rem] overflow-hidden">
          <img
            src={sketch1}
            alt=""
            data-aos="fade-right"
            className="absolute left-[-35%] bottom-0"
          />
          <img
            src={sketch2}
            alt=""
            data-aos="fade-left"
            className="absolute right-[-20%] bottom-0"
          />

          <div className="md:w-[60%] w-full flex flex-col justify-center items-center gap-10 p-10 pt-16 mx-auto z-10">
            <div
              className="md:max-w-[120px] max-w-[130px] md:py-1 md:px-5 py-4 px-7 border-[1.4px] border-blue-600 rounded-full text-black"
              data-aos="flip-left"
            >
              <ScrollVelocity
                texts={["QUICK ENQUIRY •"]}
                velocity={12}
                className="custom-scroll-text"
              />
            </div>

            <h1 className="text-black md:text-[3rem] text-center text-[2.8rem] font-bold leading-none">
              Get specialist advice for residential, commercial or property
            </h1>
          </div>

          <form action="submit" className="lg:w-[55%] w-full z-10 py-7">
            <div className="grid w-full grid-cols-1 gap-8 px-10 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full py-6 mb-5 mr-8 text-4xl font-medium bg-gray-100 border-none rounded-full md:px-8 md:py-7 md:text-2xl px-9"
              />
              <input
                type="email"
                placeholder="Email *"
                className="w-full py-6 mb-5 mr-8 text-4xl font-medium bg-gray-100 border-none rounded-full md:px-8 md:py-7 md:text-2xl px-9"
              />
              <input
                type="text"
                placeholder="Phone number *"
                className="w-full py-6 mb-5 mr-8 text-4xl font-medium bg-gray-100 border-none rounded-full md:px-8 md:py-7 md:text-2xl px-9"
              />
              <select className="w-full py-6 mb-5 mr-8 text-4xl font-medium text-gray-500 bg-gray-100 border-none rounded-full md:px-8 md:py-7 md:text-2xl px-9">
                <option value="1">You inqure about....</option>
                <option value="2">Service 1</option>
                <option value="2">Service 1</option>
                <option value="2">Service 1</option>
              </select>
            </div>
            <div className="flex flex-col items-center justify-between w-full gap-10 px-10 py-5 mx-auto md:flex-row">
              <div className="">
                <p className="text-[1.7rem] font-medium text-gray-600">
                  We're excited to connect with you!{" "}
                </p>
                <p className="text-[1.7rem] font-medium text-gray-600">
                  Required fields are marked *
                </p>
              </div>
              <button className="flex justify-center items-center bg-blue-600 md:text-xl text-2xl rounded-full text-white font-bold px-5 pr-2 pl-8 py-2 mt-10 md:mt-0 hover:bg-[#000] hover:text-[#fff] transition-all ease-in-out duration-300">
                Get A Call Back{" "}
                <span className="ml-4 p-4 bg-[#fff] text-black rounded-full">
                  <ArrowUpRight />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickEnquiry;
