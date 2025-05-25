import React from "react";
import { useNavigate } from "react-router-dom";
import { shortletData } from "./shortletData";
import { MapPin } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/swiper.css";
import "swiper/module/pagination.css";
import "./swiper-pagination.css"; // Custom pagination styles

interface ShortletCardProps {
	limit: number;
	currentPage: number;
}

const ShortletCard: React.FC<ShortletCardProps> = ({ limit, currentPage }) => {
	const navigate = useNavigate();

	const slugify = (text: string): string =>
		text
			.toLowerCase()
			.replace(/ /g, "-")
			.replace(/[^\w-]+/g, "");

	// Pagination slice
	const startIndex = (currentPage - 1) * limit;
	const endIndex = startIndex + limit;
	const displayData = limit
		? shortletData.slice(startIndex, endIndex)
		: shortletData;

	return (
		<div className="w-full py-12">
			<div className="container md:px-[11rem] px-[2rem] mx-auto grid md:grid-cols-3 grid-cols-1 gap-14">
				{displayData.map((shortlet) => (
					<div
						key={shortlet.id}
						className="group w-full md:h-[50rem] h-[50rem] bg-gray-100 border-[1px] border-gray-300 rounded-[3rem] overflow-hidden cursor-pointer p-4"
						data-aos="fade-up"
						onClick={() =>
							navigate(
								`/shortlet_grid/detail/${shortlet.id}-${slugify(
									shortlet.shortletName
								)}`
							)
						}
					>
						{/* Swiper Image Carousel */}
						<div className="w-full relative h-[60%] rounded-[2.5rem] overflow-hidden">
							<Swiper
								pagination={{ dynamicBullets: true }}
								modules={[Pagination]}
								className="w-full h-full rounded-[2.5rem]"
							>
								{shortlet.images.map((img: string, index: number) => (
									<SwiperSlide key={index}>
										<img
											src={img}
											alt={`Shortlet ${index}`}
											className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
										/>
									</SwiperSlide>
								))}
							</Swiper>

							{/* Status Badge */}
							<div className="absolute top-4 left-4 w-full flex justify-start items-start z-10">
								<span
									className={`rounded-full md:text-[1.2rem] text-[1.3rem] text-white md:px-5 md:py-2 px-7 py-4 font-bold uppercase ${
										shortlet.status.toLowerCase() === "available"
											? "bg-[#2b6b28]"
											: "bg-[#2A286B]"
									}`}
								>
									{shortlet.status}
								</span>
							</div>
						</div>

						{/* Bottom Info */}
						<div className="w-full h-[40%] flex flex-col justify-between items-center z-[4] md:p-12 md:px-16 py-16 px-4">
							<div className="w-full">
								<div className="w-full flex justify-between items-center border-b-2 border-gray-400 pb-8">
									<p className="md:text-[1.4rem] text-[2rem] font-bold text-black flex items-center gap-4">
										<span className="text-blue-700">
											<MapPin />
										</span>
										{shortlet.location}
									</p>
									<p className="md:text-[1.4rem] text-[2rem] font-bold text-black">
										{shortlet.price}
									</p>
								</div>
								<h1 className="md:text-3xl text-4xl text-black pt-6 font-bold">
									{shortlet.shortletName}
								</h1>
								<div className="w-full flex justify-start items-start gap-10">
									<p className="text-black md:text-[1.4rem] text-[1.8rem] pt-6 font-bold">
										Bedroom {shortlet.numOfBedroom}
									</p>
									<p className="text-black md:text-[1.4rem] text-[1.8rem] pt-6 font-bold">
										Bathroom {shortlet.numOfBathroom}
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
