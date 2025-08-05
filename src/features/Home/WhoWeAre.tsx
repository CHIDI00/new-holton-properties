import React from "react";
import bg_image from "../../assets/bg-holton2.webp";
import ScrollVelocity from "../../ui/ScrollVelocity";
import { Gem, Rocket } from "lucide-react";
import CountUp from "../../ui/CountUp";

const WhoWeAre: React.FC = () => {
  return (
    <div id="whychooseus" className="w-full px-4 bg-white md:py-48 py-28">
      <div className="container mx-auto md:px-[11rem] px-[1rem]">
        <div className="flex flex-col items-start justify-between md:flex-row">
          <div
            className="md:max-w-[120px] max-w-[130px] md:py-1 md:px-5 py-4 px-7 border-[1.4px] border-blue-600 rounded-full"
            data-aos="flip-left"
          >
            <ScrollVelocity
              texts={[`WHO WE ARE •`]}
              velocity={10}
              className="custom-scroll-text"
            />
          </div>

          <div className="md:w-[67%] w-full flex flex-col justify-center items-start md:mt-0 mt-10">
            <h1 className="md:text-[6.3rem] text-6xl mb-20" data-aos="fade-up">
              The largest privately held real estate investors and managers in
              the world
            </h1>
            <div className="flex flex-col items-start justify-between w-full gap-10 md:flex-row">
              <div
                className="w-full md:w-[40%] flex flex-col justify-center items-start gap-5"
                data-aos="fade-up"
              >
                <span className="md:text-[2.4rem] text-[3rem] font-bold text-[#000000] leading-none flex justify-center items-center gap-5 mb-4">
                  <Gem />
                  <h1>Our vision</h1>
                </span>
                <p className="md:text-[1.6rem] text-[2.4rem] font-semibold text-[#6c6c6c] leading-tight">
                  To empower businesses with cutting-edge web solutions that
                  enhance their digital presence and drive growth.
                </p>
              </div>
              <div
                className="w-full md:w-[40%] flex flex-col justify-center items-start gap-5"
                data-aos="fade-up"
              >
                <span className="md:text-[2.4rem] text-[3rem] font-bold text-[#000000] leading-none flex justify-center items-center gap-5 mb-4">
                  <Rocket />
                  <h1>Our mission</h1>
                </span>
                <p className="md:text-[1.6rem] text-[2.4rem] font-semibold text-[#6c6c6c] leading-snug">
                  Our solutions are designed to meet the needs of modern
                  enterprises, ensuring they thrive in today’s competitive
                  online landscape.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:h-[65rem] flex md:flex-row flex-col justify-between items-start mt-20 gap-12">
          <div
            className="relative md:w-[50%] w-full md:h-full h-[50rem] bg-white rounded-[3rem] bg-cover"
            style={{ backgroundImage: `url(${bg_image})` }}
            data-aos="fade-right"
          >
            <div className="absolute top-0 left-0 h-24 w-[22rem] bg-inherite">
              <div className="w-full h-full rounded-ee-[2rem]  bg-white border-none"></div>
              <div
                className="absolute w-[30px] h-[30px] bottom-[-30px] left-0 rotate-90 bg-white"
                style={{
                  clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
                }}
              ></div>
              <div
                className="absolute w-[30px] h-[30px] right-[-30px] top-0 rotate-90 bg-white"
                style={{
                  clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
                }}
              ></div>
            </div>
          </div>

          <div className="w-full md:w-[50%] md:h-full h-[50%]  grid md:grid-cols-2 grid-cols-1 justify-center items-start gap-12">
            <div
              className="w-full h-[100%] flex flex-col justify-between items-start gap-5 p-14 rounded-[3rem] bg-gray-100"
              data-aos="fade-up"
            >
              <p className="text-2xl border-b-[1px] w-full pb-6 uppercase">
                Years of experience
              </p>

              <div className="w-full">
                <h1 className="flex items-start justify-start text-7xl">
                  <CountUp
                    from={0}
                    to={10}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />{" "}
                  <span className="ml-2 text-5xl text-blue-600">+</span>
                </h1>
                <p className="text-2xl text-gray-400">Over a decade</p>
              </div>
            </div>

            <div
              className="w-full h-[100%] flex flex-col justify-between items-start gap-5 p-14 rounded-[3rem] bg-gray-100"
              data-aos="fade-up"
            >
              <p className="text-2xl border-b-[1px] w-full pb-6 uppercase">
                Client Satisfaction
              </p>

              <div className="w-full">
                <h1 className="flex items-start justify-start text-7xl">
                  <CountUp
                    from={0}
                    to={500}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />{" "}
                  <span className="ml-2 text-5xl text-blue-600">+</span>
                </h1>
                <p className="text-2xl text-gray-400">satisfied</p>
              </div>
            </div>

            <div
              className="w-full h-[100%] flex flex-col justify-between items-start gap-5 p-14 rounded-[3rem] bg-gray-100"
              data-aos="fade-up"
            >
              <p className="text-2xl border-b-[1px] w-full pb-10 uppercase">
                our impact
              </p>

              <div className="w-full">
                <h1 className="flex items-start justify-start text-7xl">
                  <CountUp
                    from={0}
                    to={248}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />{" "}
                  <span className="ml-2 text-5xl text-blue-600">+</span>
                </h1>
                <p className="text-2xl text-gray-400">projects done</p>
              </div>
            </div>

            <div
              className="hidden w-full h-[100%] md:flex flex-col justify-between items-start gap-5 p-14 rounded-[3rem] bg-gray-100 bg-cover"
              style={{
                backgroundImage: `url(https://demo2.wpopal.com/spaciaz/wp-content/uploads/2025/03/h1_img-2.jpg)`,
              }}
              data-aos="fade-up-left"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
