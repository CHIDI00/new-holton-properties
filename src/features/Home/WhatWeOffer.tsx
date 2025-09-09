import React from "react";
import ScrollVelocity from "../../ui/ScrollVelocity";
import image1 from "../../assets/whatweoffer/service-1.webp";
import image2 from "../../assets/whatweoffer/service-2.webp";
import image3 from "../../assets/whatweoffer/service-3.webp";
import image4 from "../../assets/whatweoffer/service-4.webp";
import image5 from "../../assets/whatweoffer/service-5.webp";
import { ArrowUpRight } from "lucide-react";

type Service = {
  id: number;
  title: string;
  image: string;
};

const services: Service[] = [
  {
    id: 1,
    title: `Real Estate Development`,
    image: image1,
  },
  {
    id: 2,
    title: "Property Management",
    image: image2,
  },
  {
    id: 3,
    title: "Interior Design",
    image: image3,
  },
];

const services2: Service[] = [
  {
    id: 4,
    title: "Brokerage",
    image: image4,
  },
  {
    id: 5,
    title: "Architecture & Design",
    image: image5,
  },
];

const WhatWeOffer: React.FC = () => {
  return (
    <section
      id="what-we-offer"
      className="w-full flex flex-col justify-center items-center md:py-48 py-28 bg-[#edecec]"
    >
      <div className="container mx-auto md:px-[11rem] px-[2rem]">
        <div className="flex flex-col items-start justify-center w-full">
          <div className="flex items-center justify-center w-full">
            <div
              className="md:max-w-[120px] max-w-[130px] md:py-1 md:px-5 py-4 px-7 border-[1.4px] border-blue-600 rounded-full"
              data-aos="flip-left"
            >
              <ScrollVelocity
                texts={[`WHAT WE OFFER •`]}
                velocity={12}
                className="custom-scroll-text"
              />
            </div>
          </div>

          <div className="py-16 mx-auto" data-aos="fade-up">
            <h1 className="md:text-[6rem] text-[5rem] text-center leading-none">
              Take a brief look at <br /> some of the services <br /> we offer
            </h1>
          </div>

          <div className="w-full md:h-[70rem] flex flex-col justify-center items-center gap-12">
            <div className="w-full md:h-[50%] grid md:grid-cols-3 grid-cols-1 gap-12 ">
              {/* card */}
              {services.map((service) => (
                <div
                  className="group relative md:h-full h-[40rem] bg-white flex flex-col justify-between items-start rounded-[3rem] bg-no-repeat bg-left-bottom p-5 overflow-hidden hover:bg-blue-600 transition-all duration-300 ease-linear"
                  key={service.id}
                  data-aos="fade-right"
                >
                  {/* Scalable background image */}
                  <div
                    className="absolute inset-0 transition-transform duration-500 ease-in-out scale-100 bg-left-bottom bg-no-repeat group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "auto",
                      backgroundPosition: "-40px calc(100% + 30px)",
                      zIndex: 0,
                    }}
                  ></div>
                  <p className="px-6 py-6 text-5xl font-bold transition-all duration-300 ease-linear md:text-4xl group-hover:text-white">
                    {service.title}
                  </p>

                  <div className="absolute w-24 h-24 right-0 top-0 rounded-bl-[3rem] bg-[#edecec] ">
                    <span className="absolute z-50 p-4 transition-all duration-300 ease-linear bg-white rounded-full top-2 right-2 group-hover:bg-blue-600 group-hover:text-white">
                      <ArrowUpRight />
                    </span>
                    <div
                      className="absolute z-40 w-[30px] h-[30px] bottom-[-29px] -right-1 rotate-180 bg-[#edecec]"
                      style={{
                        clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
                      }}
                    ></div>
                    <div
                      className="absolute z-40 w-[30px] h-[30px] left-[-29px] top-0 rotate-180 bg-[#edecec]"
                      style={{
                        clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full md:h-[50%]  grid md:grid-cols-2 grid-cols-1 gap-12 ">
              {services2.map((service) => (
                <div
                  className="group relative md:h-full h-[40rem] bg-white flex flex-col justify-between items-start rounded-[3rem] bg-no-repeat bg-left-bottom p-5 hover:bg-blue-600 transition-all duration-300 ease-linear overflow-hidden"
                  key={service.id}
                  data-aos="fade-left"
                >
                  {/* Scalable background image */}
                  <div
                    className="absolute inset-0 transition-transform duration-500 ease-in-out scale-100 bg-left-bottom bg-no-repeat group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "auto",
                      backgroundPosition: "-30px calc(100% + 30px)",
                      zIndex: 0,
                    }}
                  ></div>
                  <p className="px-6 py-6 text-5xl font-bold transition-all duration-300 ease-linear md:text-4xl group-hover:text-white">
                    {service.title}
                  </p>

                  <div className="absolute w-28 h-28 right-0 top-0 rounded-bl-[3rem] bg-[#edecec] flex justify-end items-start">
                    <span className="p-6 transition-all duration-300 ease-linear bg-white rounded-full group-hover:bg-blue-600 group-hover:text-white">
                      <ArrowUpRight />
                    </span>
                    <div
                      className="absolute w-[30px] h-[30px] bottom-[-29px] -right-1 rotate-180 bg-[#edecec]"
                      style={{
                        clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
                      }}
                    ></div>
                    <div
                      className="absolute w-[30px] h-[30px] left-[-29px] top-0 rotate-180 bg-[#edecec]"
                      style={{
                        clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex md:flex-row flex-col justify-center items-center mt-20 md:text-[1.5rem] text-[2rem] font-semibold">
            <p data-aos="fade-right">
              Discover top-tier real estate development services.
            </p>
            <p
              className="border-b-[1px] border-gray-900 hover:border-blue-600"
              data-aos="fade-left"
            >
              View all services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
