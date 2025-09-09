import React from "react";
// import { Helmet } from "react-helmet-async";
import bg_image from "../../assets/bg-holton2.webp";
import Navbar from "../../ui/Navbar";
import WhoWeAre from "./WhoWeAre";
import WhatWeOffer from "./WhatWeOffer";
import ProjectPreview from "./ProjectPreview";
import { ArrowUpRight } from "lucide-react";
import OurCommitment from "./OurCommitment";
import Testimonials from "./Testimonials";
import TheTeam from "./TheTeam";
import QuickEnquiry from "./QuickEnquiry";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <Helmet> */}
      <title>Holton Properties | Transforming Dreams into Addresses</title>
      <meta
        name="description"
        content="Holton Properties delivers top-tier real estate solutions, building lasting value for clients and communities. Discover our landmark projects today."
      />
      <meta property="og:title" content="Holton Properties" />
      <meta
        property="og:description"
        content="Transforming dreams into addresses — explore our high-quality, community-driven real estate projects."
      />
      <meta property="og:image" content={bg_image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.holtonproperties.com/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Holton Properties" />
      <meta
        name="twitter:description"
        content="Top-tier developer building iconic real estate that benefits both clients and communities."
      />
      <meta name="twitter:image" content={bg_image} />
      {/* </Helmet> */}

      <div
        className={`relative w-full flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute w-full h-20 bg-white rounded-t-[5rem] z-[4] bottom-0"></div>
        <Navbar />

        <div className="relative z-[4] container flex flex-col justify-center items-center lg:px-[11rem] md:px-[2rem] px-[1rem]">
          <div
            className="flex flex-col items-center justify-center w-full border-b-2 border-gray-400 md:py-52 py-28"
            data-aos="fade-up"
          >
            <h1 className="md:text-[8rem] text-[6rem] mb-5 font-extrabold text-center text-white leading-none">
              Transforming dreams <br /> into addresses
            </h1>
            <p className="md:text-3xl text-[2.5rem] text-center text-gray-300 font-bold leading-tight">
              As a leading builder and developer, we invest wholeheartedly in
              our clients’ prosperity and in the growth of the communities we
              serve.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between w-full py-16 mt-16 text-center md:flex-row md:py-10 ">
            <div className=" md:w-[50%] w-full flex flex-col justify-center items-center md:items-start">
              <h2
                className="lg:text-[3.5rem] md:text-[3rem] text-[3.5rem] font-bold text-white md:text-left leading-none"
                data-aos="fade-right"
              >
                We develop landmark real estate projects that deliver lasting
                value to investors and communities.
              </h2>
            </div>
            <button
              onClick={() => navigate("/about_us")}
              aria-label="View Our Real Estate Services"
              className="flex items-center justify-center px-5 py-2 pl-8 pr-2 mt-10 text-2xl font-bold text-black transition-all duration-300 ease-in-out bg-white rounded-full md:text-xl md:mt-0 hover:bg-blue-800 hover:text-white"
            >
              View Services{" "}
              <span className="p-4 ml-4 text-white bg-blue-800 rounded-full">
                <ArrowUpRight />
              </span>
            </button>
          </div>

          {/* Info Cards */}
          <div className="flex flex-col items-center justify-between w-full gap-10 mt-20 md:flex-row">
            {[
              {
                title: "High quality products",
                description:
                  "The luxurious and exquisite design harmonious with the surrounding architecture provide the best living.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 32 32"
                    fill="#2f55ec"
                  >
                    <path d="M4.265 7.999..." />
                    {/* ...shortened for brevity */}
                  </svg>
                ),
                aos: "fade-right",
              },
              {
                title: "Professional services",
                description:
                  "The customer service center is ready to serve 24/7, supporting residents with quality information.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 32 32"
                    fill="#2f55ec"
                  >
                    <path d="M24.001 5.333..." />
                  </svg>
                ),
                aos: "fade-up",
              },
              {
                title: "Real partnership",
                description:
                  "We work with both investors and developers to create landmarks that make an impact.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 32 32"
                    fill="#2f55ec"
                  >
                    <path d="M15.999 24.532..." />
                  </svg>
                ),
                aos: "fade-left",
              },
            ].map(({ title, description, icon, aos }, i) => (
              <div
                key={i}
                className="w-[95%] md:w-1/3 p-16 sm:p-12 rounded-3xl bg-[#00000070] backdrop-blur-lg border border-gray-700"
                data-aos={aos}
              >
                <div className="w-full mb-10">{icon}</div>
                <div className="w-full h-px mb-10 bg-gray-500" />
                <h3 className="text-white text-[2.5rem] mb-4 font-semibold">
                  {title}
                </h3>
                <p className="md:text-[1.7rem] text-[1.9rem] font-medium text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Page Sections */}
      <WhoWeAre />
      <WhatWeOffer />
      <ProjectPreview />
      <OurCommitment />
      <Testimonials />
      <TheTeam />
      <QuickEnquiry />
    </>
  );
};

export default HeroSection;
