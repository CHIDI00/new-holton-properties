import React from "react";
import Navbar from "../../ui/Navbar";
import bg_image from "../../assets/project_11.jpg";
import plan from "../../assets/plan/project_plan_1.jpg";
import { useParams } from "react-router-dom";
import { propertyData } from "./propertyData";
import { NavLink } from "react-router-dom";
import {
	ChartArea,
	Check,
	DollarSign,
	Expand,
	LandPlot,
	MapPin,
	Video,
} from "lucide-react";

const PropertyDetail: React.FC = () => {
	// Get the propertyId from the URL Parameters
	const { propertyIdSlug } = useParams();

	// Split the ID from the slug
	const propertyId = propertyIdSlug ? propertyIdSlug.split("-")[0] : "";

	const property = propertyData.find((p) => p.id.toString() === propertyId);

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
							className="hover:text-blue-400 transition-all ease-in duration-300"
						>
							Home
						</NavLink>{" "}
						•{" "}
						<NavLink
							to="/property_grid"
							className="hover:text-blue-400 transition-all ease-in duration-300"
						>
							Properties
						</NavLink>{" "}
						• {property?.propertyName}
					</p>
				</div>
			</div>

			<div className="container mx-auto md:px-[11rem] md:py-16 px-[2rem]">
				<div className="w-full border-b-[1px] border-gray-400 pb-12">
					<p className="md:text-[1.7rem] text-[2rem] text-gray-800 font-bold leading-tight flex items-center mb-7 gap-4">
						<span className="text-blue-700">
							<MapPin />
						</span>{" "}
						{property?.location}
					</p>

					<h1 className="md:text-[7rem] text-[5rem] leading-none font-bold">
						{property?.propertyName}
					</h1>
				</div>

				<div className="container mx-auto md:px-0 flex md:flex-nowrap flex-wrap shrink-0 md:justify-start justify-start items-center md:gap-2 md:py-5">
					<div className="md:p-2 md:w-1/5 w-1/2 p-10 flex md:flex-row flex-col justify-center items-center md:gap-5 gap-5 font-bold">
						<span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
							<ChartArea />
						</span>
						<div className="flex flex-col md:justify-start md:items-start justify-center items-center">
							<p className="md:text-[1.6rem] text-[2rem] text-gray-400">
								Status
							</p>
							<p className="md:text-[1.6rem] text-[2rem]">{property?.status}</p>
						</div>
					</div>
					{/* <div className="md:p-2 md:w-1/5 w-1/2 p-10 flex md:flex-row flex-col justify-center items-center md:gap-5 gap-5 font-bold">
						<span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
							<Building />
						</span>
						<div className="flex flex-col md:justify-start md:items-start justify-center items-center">
							<p className="md:text-[1.6rem] text-[2rem] text-gray-400">
								property Type
							</p>
							<p className="md:text-[1.6rem] text-[2rem]">
								{property?.propertyType}
							</p>
						</div>
					</div> */}
					<div className="md:p-2 md:w-1/5 w-1/2 p-10 flex md:flex-row flex-col justify-center items-center md:gap-5 gap-5 font-bold">
						<span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
							<LandPlot />
						</span>
						<div className="flex flex-col md:justify-start md:items-start justify-center items-center">
							<p className="md:text-[1.6rem] text-[2rem] text-gray-400">
								property Area
							</p>
							<p className="md:text-[1.6rem] text-[2rem]">
								{property?.propertyArea}
							</p>
						</div>
					</div>
					{/* <div className="md:p-2 md:w-1/5 w-1/2 p-10 flex md:flex-row flex-col justify-center items-center md:gap-5 gap-5 font-bold">
						<span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
							<Calendar />
						</span>
						<div className="flex flex-col md:justify-start md:items-start justify-center items-center">
							<p className="md:text-[1.6rem] text-[2rem] text-gray-400">
								Commencement date
							</p>
							<p className="md:text-[1.6rem] text-[2rem]">
								{property?.startDate}
							</p>
						</div>
					</div> */}
					<div className="md:p-2 md:w-1/5 w-1/2 p-10 flex md:flex-row flex-col justify-center items-center md:gap-5 gap-5 font-bold">
						<span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
							<DollarSign />
						</span>
						<div className="flex flex-col md:justify-start md:items-start justify-center items-center">
							<p className="md:text-[1.6rem] text-[2rem] text-gray-400">
								Price Range
							</p>
							<p className="md:text-[1.6rem] text-[2rem]">{property?.price}</p>
						</div>
					</div>
				</div>

				<div className="w-full md:h-[60rem] h-[50rem] md:my-16 ">
					<div className="w-full h-full flex justify-center items-center rounded-[3rem] overflow-hidden">
						<img
							src={property?.cardImage}
							alt={property?.alt}
							className="rounded-[3rem] object-cover"
						/>
					</div>
				</div>

				<div className="w-full flex flex-col md:flex-row justify-between items-start gap-28">
					<div className="md:w-[60%] w-full">
						<p className="md:text-[5rem] text-[3.5rem] font-bold mb-5">
							Property Description
						</p>
						<p className="md:text-[1.8rem] text-[2rem] font-bold text-black md:py-8">
							{property?.propertyName} in {property?.location}
						</p>
						<p className="md:text-[1.5rem] text-[2rem] font-medium text-gray-500">
							{property?.propertyDescription}
						</p>
					</div>

					<div className="md:w-[40%] w-full pb-20">
						<p className="md:text-[2.5rem] text-[2.5rem] font-bold mb-5">
							Features
						</p>

						<ul className="grid md:grid-cols-3 grid-cols-2 md:gap-y-10 gap-y-8 justify-start items-start gap-5">
							{property?.Amenities.map((amenity) => (
								<li className="md:text-[1.5rem] text-[2rem] font-medium gap-5 flex justify-start items-center">
									<Check color="red" />
									{amenity}
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="w-full flex flex-col justify-center items-center">
					<div className="w-full flex justify-between items-center">
						<p className="md:text-[5rem] text-[3.5rem] font-bold mb-5">Media</p>

						{/* <div className="flex md:gap-5 gap-6">
							<button className="flex justify-center items-center bg-[#ffffff] md:text-xl text-3xl rounded-full text-black font-bold px-8 pl-8 py-4 gap-4 border-[1px] border-black  hover:bg-[#2A286B] hover:border-[#2A286B] hover:text-[#fff] transition-all ease-in-out duration-300">
								<Image /> Photos
							</button>

							<button className="flex justify-center items-center bg-[#ffffff] md:text-xl text-3xl rounded-full text-black font-bold px-8 pl-8 py-4 gap-4 border-[1px] border-black  hover:bg-[#2A286B] hover:border-[#2A286B] hover:text-[#fff] transition-all ease-in-out duration-300">
								Plans
							</button>
						</div> */}
					</div>

					<div className="w-full flex flex-col justify-start  items-start my-10">
						<p className="flex justify-center items-center bg-[#ffffff] md:text-xl text-3xl text-black font-bold px-8 pl-8 py-4 gap-4 border-[1px] border-black rounded-full">
							<Expand /> Plan
						</p>
						<div className="w-full flex justify-center items-center">
							<img src={plan} alt="" />
						</div>
					</div>

					{property?.video && (
						<div className="w-full flex flex-col justify-start  items-start my-10">
							<p className="flex justify-center items-center bg-[#ffffff] md:text-xl text-3xl text-black font-bold px-8 pl-8 py-4 gap-4 border-[1px] border-black rounded-full">
								<Video /> Video
							</p>
							<div className="aspect-video w-full mx-auto rounded-[3rem]  my-10">
								<iframe
									width="100%"
									height="100%"
									src="https://www.youtube-nocookie.com/embed/25IqJxAY32g?si=JRgZ9oedkbXU7Mvz"
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								></iframe>

								{/* <video
									controls
									poster={property?.cardImage}
									className="w-full rounded-3xl"
								>
									<source src={property?.video} type="video/mp4" />
									Your browser does not support the video tag.
								</video> */}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default PropertyDetail;
