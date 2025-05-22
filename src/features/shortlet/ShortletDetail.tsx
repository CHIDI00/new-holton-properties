import React from "react";
import Navbar from "../../ui/Navbar";
import bg_image from "../../assets/project_11.webp";
import plan from "../../assets/plan/project_plan_1.webp";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
	ArrowUpRight,
	ChartArea,
	Check,
	DollarSign,
	Expand,
	MapPin,
	Video,
} from "lucide-react";
import GoogleMapEmbed from "../../ui/GoogleMap";
import { shortletData } from "./shortletData";

const ShortletDetail: React.FC = () => {
	// Get the propertyId from the URL Parameters
	const { shortletIdSlug } = useParams();

	// Split the ID from the slug
	const shortletId = shortletIdSlug ? shortletIdSlug.split("-")[0] : "";

	const shortlet = shortletData.find((p) => p.id.toString() === shortletId);

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
							to="/shortlet_grid"
							className="hover:text-blue-400 transition-all ease-in duration-300"
						>
							Properties
						</NavLink>{" "}
						• {shortlet?.shortletName}
					</p>
				</div>
			</div>

			<div className="container mx-auto md:px-[11rem] md:py-16 px-[2rem]">
				<div className="w-full border-b-[1px] border-gray-400 pb-12">
					<p className="md:text-[1.7rem] text-[2rem] text-gray-800 font-bold leading-tight flex items-center mb-7 gap-4">
						<span className="text-blue-700">
							<MapPin />
						</span>{" "}
						{shortlet?.location}
					</p>

					<h1 className="md:text-[7rem] text-[5rem] leading-none font-bold">
						{shortlet?.shortletName}
					</h1>
				</div>

				<div className="container mx-auto md:px-0 flex md:flex-nowrap flex-wrap shrink-0  justify-start items-center md:gap-2 md:py-5">
					<div className="md:p-2 md:w-1/5 w-1/2 p-10 flex md:flex-row flex-col justify-center items-center md:gap-5 gap-5 font-bold">
						<span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
							<ChartArea />
						</span>
						<div className="flex flex-col md:justify-start md:items-start justify-center items-center">
							<p className="md:text-[1.6rem] text-[2rem] text-gray-400">
								Status
							</p>
							<p className="md:text-[1.6rem] text-[2rem]">{shortlet?.status}</p>
						</div>
					</div>

					<div className="md:p-2 md:w-1/5 w-1/2 p-10 flex md:flex-row flex-col justify-center items-center md:gap-5 gap-5 font-bold">
						<span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
							<DollarSign />
						</span>
						<div className="flex flex-col md:justify-start md:items-start justify-center items-center">
							<p className="md:text-[1.6rem] text-[2rem] text-gray-400">
								Price Range
							</p>
							<p className="md:text-[1.6rem] text-[2rem]">{shortlet?.price}</p>
						</div>
					</div>
				</div>

				<div className="w-full md:h-[60rem] h-[50rem] md:my-16 ">
					<div className="w-full h-full flex justify-center items-center rounded-[3rem] overflow-hidden">
						<img
							src={shortlet?.cardImage}
							alt={shortlet?.alt}
							className="rounded-[3rem] object-cover"
						/>
					</div>
				</div>

				<div className="w-full flex flex-col md:flex-row justify-between items-start gap-28">
					<div className="md:w-[60%] w-full">
						<p className="md:text-[5rem] text-[3.5rem] font-bold mb-5">
							Shortlet Description
						</p>
						<p className="md:text-[1.8rem] text-[2rem] font-bold text-black md:py-8">
							{shortlet?.shortletName} in {shortlet?.location}
						</p>
						<p className="md:text-[1.5rem] text-[2rem] font-medium text-gray-500">
							{shortlet?.shortletDescription}
						</p>
					</div>

					<div className="md:w-[40%] w-full pb-20">
						<p className="md:text-[2.5rem] text-[2.5rem] font-bold mb-5">
							Features
						</p>

						<ul className="grid md:grid-cols-3 grid-cols-2 md:gap-y-10 gap-y-8 justify-start items-start gap-5">
							{shortlet?.Amenities.map((amenity) => (
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
					</div>

					<div className="w-full flex flex-col justify-start  items-start my-10">
						<p className="flex justify-center items-center bg-[#ffffff] md:text-xl text-3xl text-black font-bold px-8 pl-8 py-4 gap-4 border-[1px] border-black rounded-full">
							<Expand /> Plan
						</p>
						<div className="w-full flex justify-center items-center">
							<img src={plan} alt="" />
						</div>
					</div>

					{/* {shortlet?.video && ( */}
					<div className="w-full flex flex-col justify-start  items-start my-10">
						<p className="flex justify-center items-center bg-[#ffffff] md:text-xl text-3xl text-black font-bold px-8 pl-8 py-4 gap-4 border-[1px] border-black rounded-full">
							<Video /> Video
						</p>
						<div className="aspect-video w-full mx-auto rounded-[1rem] overflow-hidden my-10">
							<iframe
								width="100%"
								height="100%"
								src={`https://www.youtube.com/embed/${shortlet?.videoUrl}`}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							></iframe>
						</div>
					</div>
					{/* // )} */}
				</div>

				{/* Map */}
				<div className="w-full flex md:flex-row flex-col-reverse justify-start items-start my-10 gap-16">
					<div className="md:w-[50%] w-full md:h-[700px] h-full rounded-[3rem] border-[1px] border-gray-300 my-10 md:p-24 p-7 py-10">
						<p className="md:text-6xl text-5xl md:text-left text-center font-bold leading-tight ">
							Request more <br /> information
						</p>
						<form action="submit" className="w-full z-10 py-7">
							<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 ">
								<input
									type="text"
									placeholder="Your Name *"
									className="w-full md:px-8 md:py-7 md:text-2xl px-9 py-6 text-4xl border-none bg-gray-100 rounded-full font-medium mb-5 mr-8"
								/>

								<input
									type="text"
									placeholder="Phone number *"
									className="w-full md:px-8 md:py-7 md:text-2xl px-9 py-6 text-4xl border-none bg-gray-100 rounded-full font-medium mb-5 mr-8"
								/>
							</div>
							<input
								type="email"
								placeholder="Email *"
								className="w-full md:px-8 md:py-7 md:text-2xl px-9 py-6 text-4xl border-none bg-gray-100 rounded-full font-medium mb-5 mr-8"
							/>
							<textarea
								placeholder="Message *"
								className="w-full h-[25rem] md:px-8 md:py-7 md:text-2xl text-gray-500 px-9 py-6 text-4xl border-none bg-gray-100 rounded-[2rem] font-medium mb-5 mr-8"
							></textarea>
							<div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 px-10 py-5 mx-auto">
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
					<div className="md:w-[50%] w-full rounded-[3rem]">
						<GoogleMapEmbed location={shortlet?.location ?? ""} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShortletDetail;
