import React from "react";
import project3 from "../../assets/project_3.jpg";
import ScrollVelocity from "../../ui/ScrollVelocity";

const QuickEnquiry: React.FC = () => {
	return (
		<div className="w-full bg-[#fbfbfb]">
			<div
				className="w-[95%] md:h-[90vh] h-[90vh] flex justify-center items-center mx-auto rounded-[3rem] bg-cover bg-no-repeat"
				style={{ backgroundImage: `url(${project3})` }}
			>
				<div className="flex flex-col justify-center items-center md:w-[75%] w-[95%] md:h-[80%] h-[90%] bg-white rounded-[3rem]">
					<div
						className="md:max-w-[120px] max-w-[130px] md:py-1 md:px-5 py-4 px-7 border-[1.4px] border-[#2A286B] rounded-full text-black"
						// data-aos="flip-left"
					>
						<ScrollVelocity
							texts={["QUICK INQUIRY •"]}
							velocity={12}
							className="custom-scroll-text"
						/>
					</div>
					<form action="submit"></form>
				</div>
			</div>
		</div>
	);
};

export default QuickEnquiry;
