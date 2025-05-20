import React from "react";
import bg_image from "../../assets/bg-holton2.webp";
import Navbar from "../../ui/Navbar";
import WhoWeAre from "./WhoWeAre";
import WhatWeOffer from "./WhatWeOffer";
import ProjectPreview from "./ProjectPreview";

import { ArrowUpRight } from "lucide-react";
import OurCommitment from "./OurCommitment";
import Testimonials from "./Testimonials";
import TheTeam from "./TheTeam";
import QuickEnquiry from "./QuickEnquiry";

const HeroSection: React.FC = () => {
	return (
		<>
			<div
				className={`relative w-full flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat`}
				style={{ backgroundImage: `url(${bg_image})` }}
			>
				<div className="absolute inset-0 bg-black bg-opacity-40"></div>
				<div className="absolute w-full h-20 bg-white rounded-t-[5rem] z-[4] bottom-0"></div>
				<Navbar />

				<div className="relative z-[4] container flex flex-col justify-center items-center md:px-[11rem] px-[1rem]">
					<div
						className="w-full flex flex-col justify-center items-center md:py-52 py-28 border-b-2 border-gray-400"
						data-aos="fade-up"
					>
						<h1 className="md:text-[8rem] text-[6rem] mb-5 font-extrabold text-center text-white leading-none">
							Transforming dreams <br /> into addresses
						</h1>
						<p className="md:text-3xl text-[2.5rem] text-center text-gray-300 font-bold leading-tight">
							{/* We are a top 25 builder and developer fully invested in our
							customers’ success and improving the communities we serve. */}
							As a leading builder and developer, we invest wholeheartedly in
							our clients’ prosperity and in the growth of the communities we
							serve.
						</p>
					</div>

					<div className="w-full flex md:flex-row flex-col justify-between items-center text-center md:py-10 mt-16 py-16 ">
						<div className=" md:w-[50%] w-full flex flex-col justify-center items-center md:items-start">
							<h1
								className="text-[3.5rem] font-bold text-white md:text-left leading-none"
								data-aos="fade-right"
							>
								We developed landmark real estate projects that deliver lasting
								value to investors and communities.
							</h1>
						</div>
						<button className="flex justify-center items-center bg-[#ffffff] md:text-xl text-2xl rounded-full text-black font-bold px-5 pr-2 pl-8 py-2 mt-10 md:mt-0 hover:bg-[#534fc9] hover:text-[#fff] transition-all ease-in-out duration-300">
							View Services{" "}
							<span className="ml-4 p-4 bg-[#2A286B] text-white rounded-full">
								<ArrowUpRight />
							</span>
						</button>
					</div>

					<div className="w-full flex md:flex-row flex-col justify-between items-center mt-20  gap-10 ">
						<div
							className="w-[95%] md:w-1/3 p-16 sm:p-12 rounded-3xl bg-[#00000070] backdrop-blur-lg  border-[1px] border-gray-700"
							data-aos="fade-right"
						>
							<div className="w-full mb-10">
								<span className="">
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="40"
											height="40"
											viewBox="0 0 32 32"
											fill="#2242c1"
										>
											<path d="M4.265 7.999c0-2.057 1.674-3.734 3.734-3.734s3.734 1.674 3.734 3.734c0 2.057-1.674 3.734-3.734 3.734s-3.734-1.674-3.734-3.734zM0 7.999c0 4.418 3.581 7.999 7.999 7.999s7.999-3.581 7.999-7.999c0-4.418-3.581-7.999-7.999-7.999s-7.999 3.581-7.999 7.999z"></path>
											<path d="M0 24.001c0-4.418 3.581-7.999 7.999-7.999s7.999 3.581 7.999 7.999c0 4.418-3.581 7.999-7.999 7.999s-7.999-3.583-7.999-7.999z"></path>
											<path d="M15.999 7.999c0-4.418 3.583-7.999 8.002-7.999s7.999 3.581 7.999 7.999c0 4.418-3.581 7.999-7.999 7.999s-8.002-3.581-8.002-7.999z"></path>
											<path d="M20.266 24.001c0-2.057 1.674-3.734 3.734-3.734s3.734 1.674 3.734 3.734c0 2.060-1.674 3.734-3.734 3.734s-3.734-1.677-3.734-3.734zM15.999 24.001c0 4.418 3.581 7.999 7.999 7.999s7.999-3.581 7.999-7.999c0-4.418-3.581-7.999-7.999-7.999s-7.999 3.581-7.999 7.999z"></path>
										</svg>
									</span>
								</span>
							</div>

							<div className="w-full h-[.1rem] bg-gray-500 mb-10"></div>

							<div className="w-full flex flex-col justify-center items-start">
								<h1 className="text-white text-[2.5rem] mb-4 font-semibold">
									High quality products
								</h1>
								<p className="md:text-[1.7rem] text-[1.9rem] md:leading-tight font-medium leading-snug text-gray-400">
									The luxurious and exquisite design harmonious with the
									surrounding architecture provide the best living.
								</p>
							</div>
						</div>
						<div
							className="w-[95%] md:w-1/3 p-16 sm:p-12 rounded-3xl bg-[#00000070] backdrop-blur-lg border-[1px] border-gray-700"
							data-aos="fade-up"
						>
							<div className="w-full mb-10">
								<span className="">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="40"
										height="40"
										viewBox="0 0 32 32"
										fill="#2242c1"
									>
										<path d="M24.001 5.333c-1.471 0-2.666 1.195-2.666 2.666s1.195 2.667 2.666 2.667 2.666-1.195 2.666-2.667h5.333c0 4.418-3.581 7.999-7.999 7.999s-7.999-3.581-7.999-7.999c-0.002-4.418 3.581-7.999 7.999-7.999v5.333z"></path>
										<path d="M5.333 7.999c0 1.471 1.195 2.667 2.666 2.667s2.667-1.195 2.667-2.667c0-1.471-1.195-2.666-2.667-2.666v-5.333c4.418 0 7.999 3.581 7.999 7.999s-3.581 7.999-7.999 7.999c-4.418 0-7.999-3.581-7.999-7.999h5.333z"></path>
										<path d="M26.667 24.001c0-1.471-1.195-2.667-2.666-2.667s-2.667 1.195-2.667 2.667c0 1.471 1.195 2.666 2.667 2.666v5.333c-4.418 0-7.999-3.581-7.999-7.999s3.581-7.999 7.999-7.999c4.418 0 7.999 3.581 7.999 7.999h-5.333z"></path>
										<path d="M7.999 26.667c1.471 0 2.667-1.195 2.667-2.666s-1.195-2.667-2.667-2.667c-1.471 0-2.666 1.195-2.666 2.667h-5.333c0-4.418 3.581-7.999 7.999-7.999s7.999 3.581 7.999 7.999c0 4.418-3.581 7.999-7.999 7.999v-5.333z"></path>
									</svg>
								</span>
							</div>

							<div className="w-full h-[.1rem] bg-gray-500 mb-10"></div>

							<div className="w-full flex flex-col justify-center items-start">
								<h1 className="text-white text-[2.5rem] mb-4 font-semibold">
									Professional services
								</h1>
								<p className="md:text-[1.7rem] text-[1.9rem] md:leading-tight font-medium leading-snug text-gray-400">
									The customer service center is ready to serve 24/7, support
									the residents to provide information.
								</p>
							</div>
						</div>

						<div
							className="w-[95%] md:w-1/3 p-16 sm:p-12 rounded-3xl bg-[#00000070] backdrop-blur-lg border-[1px] border-gray-700"
							data-aos="fade-left"
						>
							<div className="w-full mb-10">
								<span className="">
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="40"
											height="40"
											viewBox="0 0 32 32"
											fill="#2242c1"
										>
											<path d="M15.999 24.532c4.117 0 7.466 3.348 7.466 7.466h8.533c0-8.837-7.162-15.999-15.999-15.999s-15.999 7.165-15.999 16.001h8.533c0-4.117 3.348-7.468 7.466-7.468z"></path>
											<path d="M15.999 7.466c-4.117 0-7.466-3.348-7.466-7.466h-8.533c0 8.837 7.162 15.999 15.999 15.999s16.001-7.162 16.001-15.999h-8.533c0 4.117-3.351 7.466-7.468 7.466z"></path>
										</svg>{" "}
									</span>
								</span>
							</div>

							<div className="w-full h-[.1rem] bg-gray-500 mb-10"></div>

							<div className="w-full flex flex-col justify-center items-start">
								<h1 className="text-white text-[2.5rem] mb-4 font-semibold">
									Real partnership
								</h1>
								<p className="md:text-[1.7rem] text-[1.9rem] md:leading-tight font-medium leading-snug text-gray-400">
									We work with both investors and developers to create landmarks
									that make an impact.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<WhoWeAre />
			<WhatWeOffer />
			<ProjectPreview />
			<OurCommitment />
			<Testimonials />
			<TheTeam />
			<QuickEnquiry />
		</>
	);
};

export default HeroSection;
