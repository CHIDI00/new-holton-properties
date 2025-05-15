import React from "react";
import image from "../../assets/project_1.jpg";
import { MapPin } from "lucide-react";

const ProjectGrid: React.FC = () => {
	return (
		<div className="w-full py-12">
			<div className="container md:px-[11rem] px-[2rem] mx-auto grid md:grid-cols-3 grid-cols-1 gap-14">
				<div className="group relative w-full md:h-[50rem] h-[50rem] bg-red-200 rounded-[3rem] overflow-hidden">
					<div
						className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-[3rem] group-hover:scale-105 transition-transform duration-500 ease-in-out"
						style={{ backgroundImage: `url(${image})` }}
					></div>
					<div className="absolute flex flex-col justify-between items-center z-[4] bg-gradient-to-b from-[#00000000] to-[#000000d2] w-full h-full md:p-12 md:px-16 p-16">
						<div className="w-full flex justify-start items-start">
							<span className="bg-[#2A286B] rounded-full md:text-[1.2rem] text-2xl text-white md:px-5 md:py-2 px-7 py-4 font-bold uppercase">
								Completed
							</span>
						</div>

						<div className="w-full">
							<p className="md:text-[1.4rem] text-[1.7rem] font-bold text-white flex items-center gap-4 pb-8 border-b-2 border-gray-400">
								<span className="text-blue-900">
									<MapPin />
								</span>
								Lekki, Phase 2
							</p>
							<h1 className="md:text-7xl text-7xl text-white pt-6 font-bold">
								Apartment building
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectGrid;
