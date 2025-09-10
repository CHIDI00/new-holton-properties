import React, { useState, useEffect } from "react";
import Navbar from "../../ui/Navbar";
import bg_image from "../../assets/project_11.webp";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  ChartArea,
  Check,
  DollarSign,
  MapPin,
  Video,
} from "lucide-react";
import GoogleMapEmbed from "../../ui/GoogleMap";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { formatCurrency } from "../../utils/helper";
import Loader from "../../ui/Loader";

// Define the interface for API response
interface ApiShortlet {
  id: number;
  name: string;
  slug: string;
  location: string;
  lat_long: "6.663628510864267, 3.5143298292724436";
  lat: number;
  lng: number;
  price: string;
  status: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  features: string[];
  image_paths: string[];
  video_url?: string;
}

const ShortletDetail: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const { shortletSlug } = useParams<{ shortletSlug: string }>();
  const [shortlet, setShortlet] = useState<ApiShortlet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!shortletSlug) {
      setError("No shortlet ID provided");
      setLoading(false);
      return;
    }

    const slug = shortletSlug;
    if (!slug) {
      setError("Invalid shortlet ID format");
      setLoading(false);
      return;
    }

    const fetchShortletDetail = async () => {
      try {
        console.log("Fetching data for shortlet SLUG:", slug);

        const response = await fetch(
          `https://holtonrealty.com/admin/api/shortlet/${shortletSlug}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        const data = JSON.parse(text);

        console.log("Full API Response:", data);

        const foundShortlet = data.find((item: { slug: string }) => {
          if (!item || !item.slug) return false;
          return String(item.slug) === slug;
        });

        if (!foundShortlet) {
          throw new Error(`Shortlet with ID ${slug} not found`);
        }

        setShortlet(foundShortlet);
        setError(null);
      } catch (err) {
        console.error("Error fetching shortlet:", err);
        setError(
          err instanceof Error ? err.message : "Failed to fetch shortlet data"
        );
        setShortlet(null);
      } finally {
        setLoading(false);
      }
    };

    fetchShortletDetail();
  }, [shortletSlug]);

  // Loading state
  if (loading) {
    return (
      <>
        <div
          className={`relative w-full flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat`}
          style={{ backgroundImage: `url(${bg_image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute w-full h-20 bg-white rounded-t-[5rem] z-[4] -bottom-1"></div>
          <Navbar />

          <div className="w-full flex flex-col md:flex-row justify-between md:items-end gap-5 items-start md:px-[4rem] md:pt-[10rem] pt-16 px-[1rem] md:py-[10rem] py-[8rem] z-[4]">
            <p className="md:text-[1.4rem] text-[2rem] text-gray-300 font-bold leading-tight">
              <NavLink
                to="/"
                className="transition-all duration-300 ease-in hover:text-blue-400"
              >
                Home
              </NavLink>{" "}
              •{" "}
              <NavLink
                to="/shortlet_grid"
                className="transition-all duration-300 ease-in hover:text-blue-400"
              >
                Shortlets
              </NavLink>{" "}
              • {shortlet?.name}
            </p>
          </div>
        </div>
        <div className="container h-[40rem] mx-auto md:px-[11rem] px-[2rem] flex justify-center items-center py-20">
          <div className="text-2xl font-bold text-gray-600">
            <Loader />
          </div>
        </div>
      </>
    );
  }

  // Error state
  if (error) {
    return (
      <>
        <div
          className={`relative w-full flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat`}
          style={{ backgroundImage: `url(${bg_image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute w-full h-20 bg-white rounded-t-[5rem] z-[4] -bottom-1"></div>
          <Navbar />

          <div className="w-full flex flex-col md:flex-row justify-between md:items-end gap-5 items-start md:px-[4rem] md:pt-[10rem] pt-16 px-[1rem] md:py-[10rem] py-[8rem] z-[4]">
            <p className="md:text-[1.4rem] text-[2rem] text-gray-300 font-bold leading-tight">
              <NavLink
                to="/"
                className="transition-all duration-300 ease-in hover:text-blue-400"
              >
                Home
              </NavLink>{" "}
              •{" "}
              <NavLink
                to="/shortlet_grid"
                className="transition-all duration-300 ease-in hover:text-blue-400"
              >
                Shortlets
              </NavLink>{" "}
              • {shortlet?.name}
            </p>
          </div>
        </div>
        <div className="container h-[40rem] mx-auto md:px-[11rem] px-[2rem] flex justify-center items-center py-20">
          <div className="flex flex-col items-center justify-center text-2xl font-bold text-red-600">
            <p className="text-5xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-unplug-icon lucide-unplug"
              >
                <path d="m19 5 3-3" />
                <path d="m2 22 3-3" />
                <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
                <path d="M7.5 13.5 10 11" />
                <path d="M10.5 16.5 13 14" />
                <path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" />
              </svg>
            </p>
            <p>Connection failed </p>
          </div>
        </div>
      </>
    );
  }

  // If shortlet not found
  if (!shortlet) {
    return (
      <div className="container mx-auto md:px-[11rem] px-[2rem] flex justify-center items-center py-20">
        <div className="text-2xl font-bold text-gray-600">
          {/* Shortlet not found */}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        className={`relative w-full flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute w-full h-20 bg-white rounded-t-[5rem] z-[4] -bottom-1"></div>
        <Navbar />

        <div className="w-full flex flex-col md:flex-row justify-between md:items-end gap-5 items-start md:px-[4rem] md:pt-[10rem] pt-16 px-[1rem] md:py-[10rem] py-[8rem] z-[4]">
          <p className="md:text-[1.4rem] text-[2rem] text-gray-300 font-bold leading-tight">
            <NavLink
              to="/"
              className="transition-all duration-300 ease-in hover:text-blue-400"
            >
              Home
            </NavLink>{" "}
            •{" "}
            <NavLink
              to="/shortlet_grid"
              className="transition-all duration-300 ease-in hover:text-blue-400"
            >
              Shortlets
            </NavLink>{" "}
            • {shortlet?.name}
          </p>
        </div>
      </div>

      <div className="container mx-auto lg:px-[11rem] md:py-16 px-[2rem]">
        <div className="w-full border-b-[1px] border-gray-400 pb-12">
          <p className="md:text-[1.7rem] text-[2rem] text-gray-800 font-bold leading-tight flex items-center mb-7 gap-4">
            <span className="text-blue-700">
              <MapPin />
            </span>{" "}
            {shortlet?.location}
          </p>

          <h1 className="lg:text-[7rem] text-[5rem] leading-none font-bold">
            {shortlet?.name}
          </h1>
        </div>

        <div className="container flex flex-wrap items-center justify-start mx-auto md:px-0 lg:flex-nowrap shrink-0 lg:gap-2 md:gap-20 md:py-5">
          <div className="flex flex-col items-center justify-center w-1/2 gap-5 p-10 font-bold md:p-2 lg:w-1/5 md:w-1/3 md:flex-row md:gap-5">
            <span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
              <ChartArea />
            </span>
            <div className="flex flex-col items-center justify-center md:justify-start md:items-start">
              <p className="lg:text-[1.6rem] text-[2rem] text-gray-400">
                Status
              </p>
              <p className="lg:text-[1.6rem] text-[2rem] font-extrabold">
                {shortlet?.status}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-1/2 gap-5 p-10 font-bold md:p-2 md:w-1/5 md:flex-row md:gap-5">
            <span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
              <DollarSign />
            </span>
            <div className="flex flex-col items-center justify-center md:justify-start md:items-start">
              <p className="lg:text-[1.6rem] text-[2rem] text-gray-400">
                Price Range
              </p>
              <p className="lg:text-[1.6rem] text-[2rem] font-extrabold">
                {formatCurrency(shortlet?.price)}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:h-[75rem] h-[50rem] md:my-16 ">
          <div className="flex flex-col items-center justify-center w-full h-full gap-5 overflow-hidden">
            <Swiper
              style={{
                //@ts-expect-error CSS custom properties are not recognized in TypeScript
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="h-[85%] w-full rounded-[2rem]"
            >
              {Object.values(shortlet?.image_paths || {}).map(
                (img: string, index: number) => (
                  <SwiperSlide
                    key={index}
                    className="flex items-center justify-center bg-gray-700"
                  >
                    <img
                      src={`https://holtonrealty.com/admin/public${img}`}
                      alt={shortlet?.name}
                      className="object-cover w-full h-full"
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="h-[15%] w-full box-border py-2 grid grid-cols-4 gap-1 overflow-hidden"
            >
              {Object.values(shortlet?.image_paths || {}).map(
                (img: string, index: number) => (
                  <SwiperSlide
                    key={index}
                    className="w-full h-full opacity-60 [&.swiper-slide-thumb-active]:opacity-100 transition-opacity"
                  >
                    <img
                      src={`https://holtonrealty.com/admin/public${img}`}
                      alt={shortlet?.name}
                      className="rounded-[1rem] h-full w-full"
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between w-full md:flex-row gap-28">
          <div className="md:w-[60%] w-full">
            <p className="md:text-[5rem] text-[3.5rem] font-bold mb-5">
              Shortlet Description
            </p>
            <p className="md:text-[1.8rem] text-[2rem] font-bold text-black md:py-8">
              {shortlet?.name} in {shortlet?.location}
            </p>
            <p className="md:text-[1.5rem] text-[2rem] font-medium text-gray-500">
              {shortlet?.description}
            </p>
          </div>

          <div className="md:w-[40%] w-full pb-20">
            <p className="md:text-[2.5rem] text-[2.5rem] font-bold mb-5">
              Features
            </p>

            <ul className="grid items-start justify-start grid-cols-2 gap-5 md:grid-cols-3 md:gap-y-10 gap-y-8">
              {shortlet?.features.map((feature, index) => (
                <li
                  key={index}
                  className="md:text-[1.5rem] text-[2rem] font-medium gap-5 flex justify-start items-center"
                >
                  <Check color="red" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-center justify-between w-full">
            <p className="md:text-[5rem] text-[3.5rem] font-bold mb-5">Media</p>
          </div>

          {/* <div className="flex flex-col items-start justify-start w-full my-10">
						<p className="flex justify-center items-center bg-[#ffffff] md:text-xl text-3xl text-black font-bold px-8 pl-8 py-4 gap-4 border-[1px] border-black rounded-full">
							<Expand /> Plan
						</p>
						<div className="flex items-center justify-center w-full">
							<img src={shortlet.plan} alt="" />
						</div>
					</div> */}

          {/* {shortlet?.video && ( */}
          {shortlet.video_url && (
            <div className="flex flex-col items-start justify-start w-full my-10">
              <p className="flex justify-center items-center bg-[#ffffff] md:text-xl text-3xl text-black font-bold px-8 pl-8 py-4 gap-4 border-[1px] border-black rounded-full">
                <Video /> Video
              </p>
              <div className="aspect-video w-full mx-auto rounded-[1rem] overflow-hidden my-10">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${shortlet?.video_url}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
          {/* // )} */}
        </div>

        {/* Map */}
        <div className="flex flex-col-reverse items-start justify-start w-full gap-16 my-10 lg:flex-row">
          <div className="lg:w-[50%] w-full lg:h-[700px] h-full rounded-[3rem] border-[1px] border-gray-300 my-10 md:p-24 p-7 py-10">
            <p className="text-5xl font-bold leading-tight text-center md:text-6xl md:text-left ">
              Request more <br /> information
            </p>
            <form action="submit" className="z-10 w-full py-7">
              <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 ">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full py-6 mb-5 mr-8 text-4xl font-medium bg-gray-100 border-none rounded-full md:px-8 md:py-7 md:text-2xl px-9"
                />

                <input
                  type="text"
                  placeholder="Phone number *"
                  className="w-full py-6 mb-5 mr-8 text-4xl font-medium bg-gray-100 border-none rounded-full md:px-8 md:py-7 md:text-2xl px-9"
                />
              </div>
              <input
                type="email"
                placeholder="Email *"
                className="w-full py-6 mb-5 mr-8 text-4xl font-medium bg-gray-100 border-none rounded-full md:px-8 md:py-7 md:text-2xl px-9"
              />
              <textarea
                placeholder="Message *"
                className="w-full h-[25rem] md:px-8 md:py-7 md:text-2xl text-gray-500 px-9 py-6 text-4xl border-none bg-gray-100 rounded-[2rem] font-medium mb-5 mr-8"
              ></textarea>
              <div className="flex flex-col items-center justify-between w-full gap-10 px-10 py-5 mx-auto md:flex-row">
                <div className="">
                  <p className="text-[1.7rem] font-medium text-gray-600">
                    Required fields are marked *
                  </p>
                </div>
                <button className="flex justify-center items-center bg-blue-600 md:text-xl text-4xl rounded-full text-white font-bold px-5 pr-2 pl-8 py-2 mt-10 md:mt-0 hover:bg-[#000] hover:text-[#fff] transition-all ease-in-out duration-300">
                  Submit{" "}
                  <span className="ml-4 p-4 bg-[#fff] text-black rounded-full">
                    <ArrowUpRight />
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-[50%] w-full rounded-[3rem]">
            <GoogleMapEmbed lat_long={shortlet?.lat_long ?? ""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortletDetail;
