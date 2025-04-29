import React from "react";
import ScrollVelocity from "../../ui/ScrollVelocity";
import team1 from "../../assets/teams/team-1.jpg";
// import team2 from "../../assets/team2.png";
// import team3 from "../../assets/team3.png";
// import team4 from "../../assets/team4.png";
// import team5 from "../../assets/team5.png";
// import team6 from "../../assets/team6.png";
import { ArrowUpRight } from "lucide-react";

const TheTeam: React.FC = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center md:pb-48 pb-28 bg-[#fbfbfb]">
			<div className="container mx-auto md:px-[6.5rem] px-[2rem]">
				<div className="w-full flex justify-center items-center">
					<div
						className="md:max-w-[120px] max-w-[130px] md:py-1 md:px-5 py-4 px-7 border-[1.4px] border-[#2A286B] rounded-full"
						data-aos="flip-left"
					>
						<ScrollVelocity
							texts={[`MEET THE TEAM •`]}
							velocity={12}
							className="custom-scroll-text"
						/>
					</div>
				</div>

				<div className="py-16 mx-auto" data-aos="fade-up">
					<h1 className="md:text-[7rem] text-[4rem] text-center leading-none">
						Global executive <br /> leadership
					</h1>
				</div>

				<div className="w-full grid md:grid-cols-3 grid-cols-1 gap-12">
					<div
						className="group relative md:h-[45rem] h-[60rem] bg-[#fbfbfb] flex flex-col justify-between items-start rounded-[3rem]  hover:bg-blue-800  bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
						// data-aos="fade-right"
					>
						{/* Scalable background image */}

						<div className="w-full h-full overflow-hidden rounded-[3rem]">
							<img
								src={team1}
								alt=""
								loading="lazy"
								className="w-full h-full object-cover bg-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
							/>
						</div>

						<div className="absolute z-10 -bottom-[9%] left-[50%] transform -translate-x-1/2 p-7 bg-[#00000023] backdrop-blur-md w-[80%] flex flex-col justify-center items-center text-center rounded-[2.3rem]">
							<p className="md:text-[1rem] text-[1.5rem] font-medium uppercase text-white mb-2">
								Founder & Ceo
							</p>
							<p className="text-[2.5rem] text-white">Dennis Daniel</p>
						</div>

						<div className="absolute md:w-24 md:h-24 w-28 h-28 right-0 top-0 rounded-bl-[3rem] bg-[#fbfbfb] ">
							<span className="absolute z-50 top-2 right-2 p-4 bg-blue-600 rounded-full group-hover:bg-black transition-all duration-300 ease-linear group-hover:text-white">
								<ArrowUpRight />
							</span>
							<div
								className="absolute z-40 w-[30px] h-[30px] bottom-[-29px] -right-1 rotate-180 bg-[#fbfbfb]"
								style={{
									clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
								}}
							></div>
							<div
								className="absolute z-40 w-[30px] h-[30px] left-[-29px] top-0 rotate-180 bg-[#fbfbfb]"
								style={{
									clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
								}}
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TheTeam;
