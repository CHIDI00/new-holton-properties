import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "./swiper-pagination.css";
import { formatCurrency } from "../../utils/helper";

interface Shortlet {
  id: number;
  name: string;
  slug: string;
  location: string;
  lat_long: "6.663628510864267, 3.5143298292724436";
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

interface ShortletCardProps {
  limit: number;
  currentPage: number;
  shortletData: Shortlet[];
}

const ShortletCard: React.FC<ShortletCardProps> = ({
  limit,
  currentPage,
  shortletData,
}) => {
  const navigate = useNavigate();

  // Pagination slice
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const displayData =
    limit && shortletData
      ? shortletData.slice(startIndex, endIndex)
      : shortletData;

  if (!displayData || displayData.length === 0) {
    return (
      <div className="w-full py-12 text-center">
        <p className="text-gray-500">No shortlets available</p>
      </div>
    );
  }

  return (
    <div className="w-full py-12">
      <div className="container lg:px-[11rem] px-[2rem] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14">
        {displayData.map((shortlet) => (
          <div
            key={shortlet.id}
            className="group w-full md:h-[50rem] h-[50rem] bg-gray-100 border-[1px] border-gray-300 rounded-[3rem] overflow-hidden cursor-pointer p-4"
            data-aos="fade-up"
            onClick={() => navigate(`/shortlet_grid/detail/${shortlet.slug}`)}
          >
            {/* Swiper Image Carousel */}
            <div className="relative w-full h-[60%] rounded-[2.5rem] overflow-hidden">
              {/* <Swiper
								pagination={{ dynamicBullets: true }}
								modules={[Pagination]}
								className="w-full h-full rounded-[2.5rem]"
							>
								{Object.values(shortlet?.image_paths || {}).map(
									(img: string, index: number) => (
										<SwiperSlide key={index}>
											<img
												src={`https://holtonrealty.com/admin/public${img}`}
												alt={`Shortlet ${index}`}
												loading="lazy"
												className="object-cover w-full h-full transition-transform duration-500 ease-in-out"
											/>
										</SwiperSlide>
									)
								)}
							</Swiper> */}

              {/* Status Badge */}
              {/* <div className="absolute z-10 flex items-start justify-start w-full top-4 left-4">
								<span
									className={`rounded-full md:text-[1.2rem] text-[1.3rem] text-white md:px-5 md:py-2 px-7 py-4 font-bold uppercase ${
										shortlet.status === "available"
											? "bg-[#2b6b28]"
											: "bg-[#2A286B]"
									}`}
								>
									{shortlet.status}
								</span>
							</div> */}

              <img
                src={`https://holtonrealty.com/admin/public${shortlet.image_paths[0]}`}
                alt={`Shortlet`}
                loading="lazy"
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out"
              />
            </div>

            {/* Bottom Info */}
            <div className="w-full h-[40%] flex flex-col justify-between items-center z-[4] md:p-12 md:px-16 py-16 px-4">
              <div className="w-full">
                <div className="flex items-center justify-between w-full pb-8 border-b-2 border-gray-400">
                  <p className="md:text-[1.4rem] text-[2rem] font-bold text-black flex items-center gap-4">
                    <span className="text-blue-700">
                      <MapPin />
                    </span>
                    {shortlet.location}
                  </p>
                  <p className="md:text-[1.4rem] text-[2rem] font-bold text-black">
                    {formatCurrency(shortlet.price)}
                  </p>
                </div>
                <h1 className="pt-6 text-4xl font-bold text-black md:text-3xl">
                  {shortlet.name}
                </h1>
                <div className="flex items-start justify-start w-full gap-10">
                  <p className="text-black md:text-[1.4rem] text-[1.8rem] pt-6 font-bold">
                    Bedroom {shortlet.bedrooms}
                  </p>
                  <p className="text-black md:text-[1.4rem] text-[1.8rem] pt-6 font-bold">
                    Bathroom {shortlet.bathrooms}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortletCard;
