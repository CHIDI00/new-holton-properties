import React from "react";
import image from "../../assets/project_1.jpg";

const ProjectGrid: React.FC = () => {
	return (
		<div className="w-full py-12">
			<div className="container md:px-[11rem] px-[2rem] mx-auto grid md:grid-cols-3 grid-cols-1 gap-14">
				<div className="relative w-full md:h-[47rem] h-[50rem] bg-red-200 rounded-[3rem] group-hover:scale-105 transition-transform duration-500 ease-in-out">
					<div
						className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-[3rem] group-hover:scale-105 transition-transform duration-500 ease-in-out"
						style={{ backgroundImage: `url(${image})` }}
					></div>
				</div>
				<div className="w-full md:h-[47rem] h-[50rem] bg-red-200 rounded-[3rem]"></div>
				<div className="w-full md:h-[47rem] h-[50rem] bg-red-200 rounded-[3rem]"></div>
				<div className="w-full md:h-[47rem] h-[50rem] bg-red-200 rounded-[3rem]"></div>
				<div className="w-full md:h-[47rem] h-[50rem] bg-red-200 rounded-[3rem]"></div>
				<div className="w-full md:h-[47rem] h-[50rem] bg-red-200 rounded-[3rem]"></div>
				<div className="w-full md:h-[47rem] h-[50rem] bg-red-200 rounded-[3rem]"></div>
				<div className="w-full md:h-[47rem] h-[50rem] bg-red-200 rounded-[3rem]"></div>
				<div className="w-full md:h-[47rem] h-[50rem] bg-red-200 rounded-[3rem]"></div>
				<div className="w-full md:h-[47rem] h-[50rem] bg-red-200 rounded-[3rem]"></div>
				<div className="w-full md:h-[47rem] h-[50rem] bg-red-200 rounded-[3rem]"></div>
				<div className="w-full md:h-[47rem] h-[50rem] bg-red-200 rounded-[3rem]"></div>
				<div className="w-full md:h-[47rem] h-[50rem] bg-red-200 rounded-[3rem]"></div>
				<div className="w-full md:h-[47rem] h-[50rem] bg-red-200 rounded-[3rem]"></div>
			</div>
		</div>
	);
};

export default ProjectGrid;
