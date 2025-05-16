import React from "react";
import Navbar from "../../ui/Navbar";
import bg_image from "../../assets/project_12.jpg";
import { NavLink, useParams } from "react-router-dom";
import { ChartArea, MapPin } from "lucide-react";
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

				<div className="w-full flex flex-wrap justify-between items-center">
					<div className="">
						<span>
							<ChartArea />
						</span>
						<div className="">
							<p>Status</p>
							<p>{project?.status}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetail;
