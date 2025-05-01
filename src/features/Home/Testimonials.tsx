import React from "react";
import CircularText from "../../ui/CircularText";
import project13 from "../../assets/project_13.jpg";
import quote from "../../assets/quotesvg.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials: React.FC = () => {
	return (
		<div className="relative w-full bg-gradient-to-b from-[#f5f5f5] to-[#f7f6f6] flex justify-start items-center md:mt-72 mt-44">
			<div className="absolute md:-top-[22%] -top-[15.2rem] left-[50%] transform -translate-x-1/2 p-5 bg-white rounded-full">
				<div
					className="absolute w-[30px] h-[30px] md:bottom-[4.55rem] md:-right-[22px] right-[-16px] bottom-[2.6rem] rotate-90 bg-[#fff]"
					style={{
						clipPath: "path('M0 0 Q0,30 20,30 L 0 30 Z')",
					}}
				></div>
				<div
					className="absolute w-[30px] h-[30px] md:left-[-22px] md:bottom-[5.5rem] left-[-15.5px] bottom-[3.732rem] rotate-180 bg-[#fff]"
					style={{
						clipPath: "path('M0 0 Q0,20 30,20 L0 20 Z')",
					}}
				></div>
				<div className="flex justify-center items-center text-black ">
					<CircularText
						text={[
							" WHAT PEOPLE SAY *",
							"WHAT PEOPLE SAY *",
							"WHAT PEOPLE SAY *",
							"WHAT PEOPLE SAY *",
						]}
						onHover="speedUp"
						spinDuration={20}
						className="custom-class"
					>
						<div
							className="w-[75%] h-[75%] bg-red-500 rounded-full bg-cover bg-no-repeat bg-center flex justify-center items-center "
							style={{ backgroundImage: `url('${project13}')` }}
						>
							<h1 className="">
								<img src={quote} draggable="false" alt="" className="" />
							</h1>
						</div>
					</CircularText>
				</div>
			</div>

			<div className="container md:px-[6.5rem] flex flex-col md:flex-row justify-between items-center mx-7 my-[15rem] md:gap-52 gap-20 md:mx-auto">
				<div className="hidden md:flex">
					<button
						type="button"
						title="Previous"
						className="w-[60px] h-[60px] bg-white rounded-full text-center flex justify-center items-center cursor-pointer"
					>
						<ChevronLeft />
					</button>
				</div>
				<div className="w-full flex flex-col justify-start items-start  md:gap-10 ">
					<h1 className="text-center text-[2.5rem] md:text-[3.7rem] font-extrabold leading-tight text-black mb-10">
						"A wonderfull experience, they knew what they were doing and were
						incredibly knowledgable throughout the process"
					</h1>

					<div className="w-full flex flex-col justify-center items-center">
						<p className="text-[2rem] font-bold border-b-2 border-blue-900 mb-3">
							John McConnor
						</p>
						<p className="text-[1.5rem] text-gray-500 font-medium">
							Senior Marketer Manager
						</p>
					</div>
				</div>
				<div className="md:hidden flex justify-center items-center gap-14">
					<button
						type="button"
						title="Previous"
						className="w-[60px] h-[60px] bg-white rounded-full text-center flex justify-center items-center cursor-pointer"
					>
						<ChevronLeft />
					</button>
					<button
						type="button"
						title="Next"
						className="w-[60px] h-[60px] bg-white rounded-full text-center flex justify-center items-center cursor-pointer"
					>
						<ChevronRight />
					</button>
				</div>
				<div className="hidden md:flex">
					<button
						type="button"
						title="Next"
						className="w-[60px] h-[60px] bg-white rounded-full text-center flex justify-center items-center cursor-pointer"
					>
						<ChevronRight />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
