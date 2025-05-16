import React from "react";
import Navbar from "../../ui/Navbar";
import bg_image from "../../assets/project_12.jpg";
import { NavLink, useParams } from "react-router-dom";
import { Building, Calendar, ChartArea, LandPlot, MapPin } from "lucide-react";
import { projectData } from "./projectData";

const ProjectDetail: React.FC = () => {
	// Get the projectId from the URL Parameters
	const { projectId } = useParams();

	const project = projectData.find((p) => p.id === parseInt(projectId ?? "0"));

	return (
		<div>
			<div
				className={`relative w-full flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat`}
				style={{ backgroundImage: `url(${bg_image})` }}
			>
				<div className="absolute inset-0 bg-black bg-opacity-40"></div>
				<div className="absolute w-full h-20 bg-white rounded-t-[5rem] z-[4] -bottom-1"></div>
				<Navbar />

				<div className="w-full flex flex-col md:flex-row justify-between md:items-end gap-5 items-start md:px-[4rem] md:pt-[10rem] pt-5 px-[1rem] md:py-[10rem] py-[8rem] z-[4]">
					<p className="md:text-[1.4rem] text-[2rem] text-gray-300 font-bold leading-tight">
						<NavLink
							to="/"
							className="hover:text-blue-400 transition-all ease-in duration-300"
						>
							Home
						</NavLink>{" "}
						• Projects • Detail
					</p>
				</div>
			</div>

			<div className="container mx-auto md:px-[11rem] md:py-16 px-[2rem]">
				<div className="w-full border-b-[1px] border-gray-400 pb-12">
					<p className="md:text-[1.7rem] text-[2rem] text-gray-800 font-bold leading-tight flex items-center mb-7 gap-4">
						<span className="text-blue-700">
							<MapPin />
						</span>{" "}
						{project?.location}
					</p>

					<h1 className="md:text-[7rem] text-[5rem] leading-none font-bold">
						{project?.propertyName}
					</h1>
				</div>

				<div className="container mx-auto md:px-0 flex md:flex-nowrap flex-wrap shrink-0 md:justify-between justify-start items-center md:gap-2 md:py-5">
					<div className="md:p-2 md:w-1/5 w-1/2 p-10 flex md:flex-row flex-col justify-center items-center md:gap-5 gap-5 font-bold">
						<span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
							<ChartArea />
						</span>
						<div className="flex flex-col md:justify-start md:items-start justify-center items-center">
							<p className="md:text-[1.6rem] text-[2rem] text-gray-400">
								Status
							</p>
							<p className="md:text-[1.6rem] text-[2rem]">{project?.status}</p>
						</div>
					</div>
					<div className="md:p-2 md:w-1/5 w-1/2 p-10 flex md:flex-row flex-col justify-center items-center md:gap-5 gap-5 font-bold">
						<span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
							<Building />
						</span>
						<div className="flex flex-col md:justify-start md:items-start justify-center items-center">
							<p className="md:text-[1.6rem] text-[2rem] text-gray-400">
								Project Type
							</p>
							<p className="md:text-[1.6rem] text-[2rem]">
								{project?.projectType}
							</p>
						</div>
					</div>
					<div className="md:p-2 md:w-1/5 w-1/2 p-10 flex md:flex-row flex-col justify-center items-center md:gap-5 gap-5 font-bold">
						<span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
							<LandPlot />
						</span>
						<div className="flex flex-col md:justify-start md:items-start justify-center items-center">
							<p className="md:text-[1.6rem] text-[2rem] text-gray-400">
								Project Area
							</p>
							<p className="md:text-[1.6rem] text-[2rem]">
								{project?.projectArea}
							</p>
						</div>
					</div>
					<div className="md:p-2 md:w-1/5 w-1/2 p-10 flex md:flex-row flex-col justify-center items-center md:gap-5 gap-5 font-bold">
						<span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
							<Calendar />
						</span>
						<div className="flex flex-col md:justify-start md:items-start justify-center items-center">
							<p className="md:text-[1.6rem] text-[2rem] text-gray-400">
								Commencement date
							</p>
							<p className="md:text-[1.6rem] text-[2rem]">
								{project?.startDate}
							</p>
						</div>
					</div>
					<div className="md:p-2 md:w-1/5 w-1/2 p-10 flex md:flex-row flex-col justify-center items-center md:gap-5 gap-5 font-bold">
						<span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
							<ChartArea />
						</span>
						<div className="flex flex-col md:justify-start md:items-start justify-center items-center">
							<p className="md:text-[1.6rem] text-[2rem] text-gray-400">
								Price Range
							</p>
							<p className="md:text-[1.6rem] text-[2rem]">{project?.price}</p>
						</div>
					</div>
				</div>

				<div className="w-full md:h-[60rem] h-[50rem] md:my-16 ">
					<div className="w-full h-full flex justify-center items-center rounded-[3rem] overflow-hidden">
						<img
							src={project?.cardImage}
							alt={project?.alt}
							className="rounded-[3rem] object-cover"
						/>
					</div>
				</div>

				<div className="w-full flex flex-col md:flex-row justify-between items-start gap-28">
					<div className="md:w-2/3 w-full">
						<p className="md:text-[5rem] text-[3.5rem] font-bold mb-5">
							Project Description
						</p>
						<p className="md:text-[1.8rem] text-[2rem] font-medium text-gray-500">
							{project?.projectDescription}
						</p>
					</div>

					<div className="md:w-1/3 w-full">
						<p className="md:text-[2.5rem] text-[2.5rem] font-bold mb-5">
							Key Details
						</p>

						<ul className="list-disc pl-10 flex flex-col justify-start items-start gap-3">
							<li className="marker:text-blue-800 md:marker:text-4xl marker:text-5xl md:text-[1.8rem] text-[2rem] font-medium text-gray-500 gap-4">
								<span className="text-black font-bold">Location:</span>{" "}
								{project?.location}
							</li>
							<li className="marker:text-blue-800 md:marker:text-4xl marker:text-5xl md:text-[1.8rem] text-[2rem] font-medium text-gray-500 gap-4">
								<span className="text-black font-bold">
									Total Built-Up Area:
								</span>{" "}
								{project?.projectArea}
							</li>
							<li className="marker:text-blue-800 md:marker:text-4xl marker:text-5xl md:text-[1.8rem] text-[2rem] font-medium text-gray-500 gap-4">
								<span className="text-black font-bold">Number of Floors:</span>{" "}
								{project?.numberOfFloor}
							</li>
							<li className="marker:text-blue-800 md:marker:text-4xl marker:text-5xl md:text-[1.8rem] text-[2rem] font-medium text-gray-500 gap-4">
								<span className="text-black font-bold">Special Features:</span>{" "}
								{project?.specialFeatures}
							</li>
							<li className="marker:text-blue-800 md:marker:text-4xl marker:text-5xl md:text-[1.8rem] text-[2rem] font-medium text-gray-500 gap-4">
								<span className="text-black font-bold">Amenities:</span>{" "}
								{project?.Amenities}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetail;
