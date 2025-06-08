import React from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Define the interface for API response
interface Project {
	id: number;
	status: string;
	description: string;
	type: string;
	bedrooms: number;
	bathrooms: number;
	price: string;
	image_paths: string[];
	location: string;
	lat: number;
	lng: number;
	name: string;
	slug: string;
	plan: string;
	area: string;
	start_date: string;
	number_of_floors: string;
	special_features: string;
	amenities: {
		icon: string;
		title: string;
		description: string;
	}[];
	features: string;
	video_url?: string;
}

interface ProjectListProps {
	limit: number;
	currentPage: number;
	projectData: Project[];
}

const ProjectGrid: React.FC<ProjectListProps> = ({
	limit,
	currentPage,
	projectData,
}) => {
	const navigate = useNavigate();

	// Calculate the correct slice of shortlets based on pagination
	const startIndex = (currentPage - 1) * limit;
	const endIndex = startIndex + limit;
	const displayData = limit
		? projectData.slice(startIndex, endIndex)
		: projectData;

	return (
		<div className="w-full py-12">
			<div className="container md:px-[11rem] px-[2rem] mx-auto grid md:grid-cols-3 grid-cols-1 gap-14">
				{displayData.map((project) => (
					<div
						className="group relative w-full md:h-[50rem] h-[50rem] bg-red-200 rounded-[3rem] overflow-hidden"
						key={project.id}
						data-aos="fade-up"
						onClick={() =>
							navigate(`/project_grid/project_detail/${project.name}`)
						}
					>
						<div
							className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-[3rem] group-hover:scale-105 transition-transform duration-500 ease-in-out"
							style={{
								backgroundImage: `url(https://holtonrealty.com/admin/public${project.image_paths[0]})`,
							}}
						></div>
						<div className="absolute flex flex-col justify-between items-center z-[4] bg-gradient-to-b from-[#00000000] md:to-[#000000d2] to-[#000000e8] w-full h-full md:p-12 md:px-16 p-16">
							<div className="w-full flex justify-start items-start">
								<span className="bg-blue-700 rounded-full md:text-[1.2rem] text-2xl text-white md:px-5 md:py-2 px-7 py-4 font-bold uppercase">
									{project.status}
								</span>
							</div>

							<div className="w-full">
								<p className="md:text-[1.4rem] text-[1.7rem] font-bold text-white flex items-center gap-4 pb-8 border-b-2 border-gray-400">
									<span className="text-blue-700">
										<MapPin />
									</span>
									{project.location}
								</p>
								<h1 className="md:text-7xl text-7xl text-white pt-6 font-bold">
									{project.name}
								</h1>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectGrid;
