import React from "react";
import project4 from "../assets/project_4.webp";
import logo from "../assets/HOLTONicon-dark.webp";
import Magnet from "./Magnet";
import { NavLink } from "react-router-dom";
import facebook from "./../assets/socialIcons/Facebook.png";
import x from "./../assets/socialIcons/X.png";
import instagram from "./../assets/socialIcons/Instagram.png";
import youtube from "./../assets/socialIcons/Youtube.png";
import { HashLink } from "react-router-hash-link";
import { scrollWithDelay } from "../lib/helper";
// import { HashLink } from "react-router-hash-link";

const Footer: React.FC = () => {
  return (
    <div
      className="relative w-full pt-[10rem] pb-[4rem] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${project4})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute w-full h-20 bg-[#fbfbfb] rounded-b-[5rem] z-[4] -top-1"></div>

      <div className="flex flex-col items-center justify-center">
        <h1
          className="text-[6.5rem] font-bold text-white text-center leading-none z-[4] mb-5"
          data-aos="fade-up"
        >
          Your dream <br /> home awaits
        </h1>
        <p
          className="text-[1.7rem] text-center text-white font-semibold leading-tight z-[4] mb-10"
          data-aos="fade-up"
        >
          Whether you’re exploring our homes or envisioning something <br />{" "}
          custom, we’re here to bring your dream to life.
        </p>

        <Magnet
          padding={50}
          disabled={false}
          magnetStrength={3}
          data-aos="fade-up"
        >
          <div className="w-[150px] h-[150px] hidden lg:flex justify-center items-center bg-[#111111a2] border-[1px] border-gray-600 backdrop-blur-xl rounded-full text-white p-6">
            <p className="text-[2rem] text-center font-semibold leading-tight">
              Get your <br /> free <br /> Quote
            </p>
          </div>
        </Magnet>
      </div>

      <div className="w-[97%] lg:mb-[-250px] md:mb-[-180px] mb-[-100px] lg:mt-[-100px] md:mt-[-50px] mt-[-30px] flex justify-center items-center z-[4]">
        <h1
          className="lg:text-[40rem] md:text-[30rem] text-[15rem] leading-none bg-gradient-to-b from-[rgba(255,255,255,0.47)] to-[rgba(0,0,0,0.2)] bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          holton
        </h1>
      </div>

      <div
        className="mt-[6rem] md:w-[97%] lg:h-[45rem] w-[95%] bg-white z-[4] rounded-[3rem] flex flex-col justify-center items-center md:px-[2rem] md:py-0 p-[2rem]"
        data-aos="fade-up"
      >
        <div className="lg:w-[85%] md:h-full w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between items-center md:py-20">
          <div className=" lg:h-full w-full flex flex-col md:justify-between md:items-start justify-center items-center px-[2rem] md:border-r-[1px] md:border-b-0 border-b-[1px] border-gray-200 pb-6 mg:gap-[5rem] ">
            <img src={logo} alt="holton logo" />
            <p className="md:text-[1.5rem] text-[2rem] md:text-left text-center py-5 font-medium text-gray-500">
              We are creators of transformative spaces that inspire, innovate,
              and endure.
            </p>
          </div>
          <div className=" flex justify-start items-start lg:h-full w-full md:py-0 px-10 py-[3rem] lg:border-r-[1px] md:border-b-0 border-b-[1px] border-gray-200">
            <ul className="w-full grid grid-cols-2 justify-start items-center md:px-0 px-[5rem] md:text-[2rem] text-[2rem] font-bold ">
              <li className="mb-[1.5rem]">
                <NavLink to="/about_us">About Us</NavLink>
              </li>
              <li className="mb-[1.5rem]">
                <HashLink to="/home#what-we-offer" scroll={scrollWithDelay}>
                  Why Choose Us
                </HashLink>
              </li>
              {/* <li className="mb-[1.5rem]">
                <a href="">Our Team</a>
              </li>
              <li className="mb-[1.5rem]">
                <a href="">Solutions</a>
              </li> */}
              <li className="mb-[1.5rem]">
                <a href="/">Partners</a>
              </li>
              {/* <li className="mb-[1.5rem]">
                <a href="">Core Values</a>
              </li> */}
              {/* <li className="mb-[1.5rem]">
                <a href="">Our Projects</a>
              </li>
              <li className="mb-[1.5rem]">
                <a href="">News & Updates</a>
              </li> */}
              {/* <li className="mb-[1.5rem]">
                <a href="">Terms & Conditions</a>
              </li> */}
              {/* <li className="mb-[1.5rem]">
                <a href="">Support Center</a>
              </li> */}
              <li className="mb-[1.5rem]">
                <NavLink to="/contact_us">Contacts</NavLink>
              </li>
            </ul>
          </div>

          <div className=" h-full flex flex-col md:justify-start justify-center md:items-start items-center md:h-full w-full lg:py-0 py-[3rem] lg:px-10 md:px-10 gap-[7rem]">
            <div className="w-full flex flex-col md:justify-start md:items-start justify-center items-center gap-[1rem]">
              <p className="md:text-[3.2rem] text-[3rem] font-bold border-b-[1px] border-blue-700">
                +(090) 782-388-24
              </p>
              <p className="md:text-[3.2rem] text-[3rem] font-bold border-b-[1px] border-blue-700">
                holtonrealty@gmail.com
              </p>
            </div>

            <div className="flex justify-start items-center gap-[1rem] md:text-[3rem] text-gray-400 text-[2rem] transition-all duration-300">
              <div className="cursor-pointer hover:text-black">
                <a href=''>
                <img
                  src={facebook}
                  alt="FaceBook"
                  className="w-12 h-12 transition duration-500 ease-in-out grayscale hover:grayscale-0"
                /></a>
              </div>
              <p>•</p>
              <div className="cursor-pointer hover:text-black">
                <a href='https://www.instagram.com/holtonproperties?igsh=MWE5eDZmN2ZhZWg3eQ=='>

                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-12 h-12 transition duration-500 ease-in-out grayscale hover:grayscale-0"
                /></a>
              </div>
              <p>•</p>
              <div className="cursor-pointer hover:text-black">
                <img
                  src={x}
                  alt="x"
                  className="w-12 h-12 transition duration-500 ease-in-out grayscale hover:grayscale-0"
                />
              </div>
              <p>•</p>
              <div className="cursor-pointer hover:text-black">
                <img
                  src={youtube}
                  alt="Youtube"
                  className="w-12 h-12 transition duration-500 ease-in-out grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[85%] w-full flex justify-center items-center py-[4rem] border-t-[1px] border-gray-200">
          <p className="md:text-[1.5rem] text-[2rem] font-medium text-gray-500 text-center">
            &copy; 2025 <span className="font-bold text-black">Holton</span>.
            All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
