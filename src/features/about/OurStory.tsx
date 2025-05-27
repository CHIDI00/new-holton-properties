import React, { useEffect, useRef } from "react";
import ScrollVelocity from "../../ui/ScrollVelocity";
import journey83 from "../../assets/journey_83.webp";
import journey05 from "../../assets/journey_05.webp";
import journey13 from "../../assets/journey_13.webp";
import journey96 from "../../assets/journey_96.webp";
import journey24 from "../../assets/journey_24.webp";
import backg from "../../assets/bg-holton.webp";

import image3 from "../../assets/whatweoffer/service-3.webp";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Get the DOM element and assert it's not null

const OurStory: React.FC = () => {
	const racesWrapperRef = useRef<HTMLDivElement | null>(null);
	const racesRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const races = racesRef.current;
		const racesWrapper = racesWrapperRef.current;

		if (!races || !racesWrapper) return;

		const getScrollAmount = () => {
			const wrapperWidth = window.innerWidth;
			const racesElement = racesRef.current;
			if (!racesElement) return 0;

			const totalOffset = 15 * 2 * 16;
			return -(racesElement.scrollWidth + totalOffset - wrapperWidth);
		};

		const tween = gsap.to(races, {
			x: getScrollAmount,
			ease: "none",
			duration: 3,
		});

		ScrollTrigger.create({
			trigger: racesWrapper,
			start: "top 20%",
			end: () => `+=${races.scrollWidth - window.innerWidth}`,
			pin: true,
			scrub: 1,
			animation: tween,
			invalidateOnRefresh: true,
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);
	return (
		<div className="w-full">
			<div
				// ref={racesWrapperRef}
				className=" md:w-[75%] w-full m-auto md:px-0 px-[2rem] md:py-48 py-28 flex flex-col md:flex-row justify-between items-start gap-10"
			>
				<div className=" w-full flex flex-col md:justify-start md:items-start md:gap-5 gap-2">
					<div
						className="md:max-w-[120px] max-w-[130px] md:py-1 md:px-5 py-4 px-7 border-[1.4px] border-[#2A286B] rounded-full text-black"
						// data-aos="flip-left"
					>
						<ScrollVelocity
							texts={["ABOUT US •"]}
							velocity={12}
							className="custom-scroll-text"
						/>
					</div>

					<h1 className="text-[3rem] text-left leading-tight md:text-[6rem] font-extrabold mt-5">
						40+ years of a <br />
						remarkable journey
					</h1>
				</div>
			</div>

			<div ref={racesWrapperRef} className="racesWrapper w-full h-auto">
				<div
					ref={racesRef}
					className="races relative w-fit h-[50rem] flex flex-nowrap justify-start items-start gap-[7rem] scroll-smooth md:mx-[15rem]"
				>
					<div className="absolute h-1 w-[100%] md:top-[56.5%] top-[62%] bg-gray-200"></div>
					{/* cards */}
					<div className="w-[300px] z-[4] ml-[5rem] shrink-0 flex flex-col justify-start items-center ">
						<div className="w-full flex flex-col justify-center items-center">
							<h4 className="md:text-[7rem] text-[5.5rem] text-[#2A286B] font-extrabold -mb-[3.9rem]">
								1983
							</h4>
							<img src={journey83} alt="" />
						</div>

						<div className="md:w-20 md:h-20 w-28 h-28 bg-[#2A286B] rounded-full mt-10 mb-20"></div>

						<div className="w-full">
							<p className="text-[1.8rem] text-[#2A286B] font-medium leading-snug text-center">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusm doloremque laudtium, totam rem aperiam, eaque ipsa.
							</p>
						</div>
					</div>
					<div className="w-[300px] z-[4] ml-[5rem] shrink-0 flex flex-col justify-start items-center ">
						<div className="w-full flex flex-col justify-center items-center">
							<h4 className="md:text-[7rem] text-[5.5rem] text-[#2A286B] font-extrabold -mb-[3.9rem]">
								1996
							</h4>
							<img src={journey96} alt="" />
						</div>

						<div className="md:w-20 md:h-20 w-28 h-28 bg-[#2A286B] rounded-full mt-10 mb-20"></div>

						<div className="w-full">
							<p className="text-[1.8rem] text-[#2A286B] font-medium leading-snug text-center">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusm doloremque laudtium, totam rem aperiam, eaque ipsa.
							</p>
						</div>
					</div>
					<div className="w-[300px] z-[4] ml-[5rem] shrink-0 flex flex-col justify-start items-center ">
						<div className="w-full flex flex-col justify-center items-center">
							<h4 className="md:text-[7rem] text-[5.5rem] text-[#2A286B] font-extrabold -mb-[3.9rem]">
								2005
							</h4>
							<img src={journey05} alt="" />
						</div>

						<div className="md:w-20 md:h-20 w-28 h-28 bg-[#2A286B] rounded-full mt-10 mb-20"></div>

						<div className="w-full">
							<p className="text-[1.8rem] text-[#2A286B] font-medium leading-snug text-center">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusm doloremque laudtium, totam rem aperiam, eaque ipsa.
							</p>
						</div>
					</div>
					<div className="w-[300px] z-[4] ml-[5rem] shrink-0 flex flex-col justify-start items-center ">
						<div className="w-full flex flex-col justify-center items-center">
							<h4 className="md:text-[7rem] text-[5.5rem] text-[#2A286B] font-extrabold -mb-[3.9rem]">
								2013
							</h4>
							<img src={journey13} alt="" />
						</div>

						<div className="md:w-20 md:h-20 w-28 h-28 bg-[#2A286B] rounded-full mt-10 mb-20"></div>

						<div className="w-full">
							<p className="text-[1.8rem] text-[#2A286B] font-medium leading-snug text-center">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusm doloremque laudtium, totam rem aperiam, eaque ipsa.
							</p>
						</div>
					</div>
					<div className="w-[300px] z-[4] ml-[5rem] shrink-0 flex flex-col justify-start items-center ">
						<div className="w-full flex flex-col justify-center items-center">
							<h4 className="md:text-[7rem] text-[5.5rem] text-[#2A286B] font-extrabold -mb-[3.9rem]">
								2024
							</h4>
							<img src={journey24} alt="" />
						</div>

						<div className="md:w-20 md:h-20 w-28 h-28 bg-[#2A286B] rounded-full mt-10 mb-20"></div>

						<div className="w-full">
							<p className="text-[1.8rem] text-[#2A286B] font-medium leading-snug text-center">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusm doloremque laudtium, totam rem aperiam, eaque ipsa.
							</p>
						</div>
					</div>
					<div className="z-[4] w-[200px] h-full flex flex-col justify-end items-start">
						<button className="w-[16rem] h-[16rem] rounded-full md:mb-[14.5rem] mb-[11.5rem] mx-auto bg-blue-900 text-white text-[2rem] font-bold p-6">
							Get Your Free quote
						</button>
					</div>
				</div>
			</div>

			<div className="z-[4] container flex flex-col justify-center items-center md:px-[11rem] px-[1rem]">
				<div className=" w-full flex flex-col md:justify-start md:items-start md:gap-5 gap-2">
					<div
						className="md:max-w-[120px] max-w-[130px] md:py-1 md:px-5 py-4 px-7 border-[1.4px] border-[#2A286B] rounded-full text-black"
						data-aos="flip-left"
					>
						<ScrollVelocity
							texts={["OUR STORY •"]}
							velocity={12}
							className="custom-scroll-text"
						/>
					</div>

					<h1 className="text-[3rem] text-left leading-tight md:text-[6rem] font-extrabold mt-5">
						Learn more <br />
						about us
					</h1>

					<div className="w-full flex md:flex-row  flex-col justify-between items-start gap-10 mt-10">
						<div
							className="group relative md:w-1/3 w-full md:h-[45rem] h-[60rem] bg-[#141333] flex flex-col justify-between items-start rounded-[3rem]   bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500 ease-in-out md:py-5 py-10 px-16 pb-20"
							data-aos="fade-right"
						>
							{/* <div className="absolute md:w-24 md:h-24 w-28 h-28 right-0 bottom-0 rounded-tl-[3rem] bg-[#fbfbfb] ">
								<span className="absolute z-50 bottom-2 right-2 p-4 bg-blue-600 rounded-full group-hover:bg-black transition-all duration-300 ease-linear group-hover:text-white">
									<ArrowUpRight />
								</span>
								<div
									className="absolute z-40 w-[30px] h-[30px] top-[-29px] -right-1 rotate-360 bg-[#ce2929]"
									style={{
										clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
									}}
								></div>
								<div
									className="absolute z-40 w-[30px] h-[30px] bottom-[-1px] -left-12 rotate-200 bg-[#2dff31]"
									style={{
										clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
									}}
								></div>
							</div> */}

							<div className="w-full py-5 border-b-[2px] border-[#f6f6f6] ">
								<p className="md:text-[1.3rem] text-[2rem] text-[#3262ff] font-extrabold">
									01.
								</p>
							</div>

							<div className="w-full flex flex-col justify-start items-start gap-5 mt-10 text-[#fff]">
								<h3 className="md:text-[3.5rem] text-[4rem] md:font-bold font-extrabold">
									What we do
								</h3>
								<p className="md:text-[1.7rem] text-[2rem] font-medium text-gray-200">
									We maintain this by ensuring transparency and professional
									conduct in every aspect.
								</p>
								<p className="text-[1.7rem] border-b-[2px] border-[#f6f6f6] font-medium my-5">
									Our Solution
								</p>
							</div>
						</div>

						<div
							className="group relative md:w-1/3 w-full md:h-[45rem] h-[60rem] bg-[#000] flex flex-col justify-start items-start rounded-[3rem]   bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500 ease-in-out md:py-5 py-10 px-16 pb-20 overflow-hidden"
							data-aos="fade-right"
						>
							{/* <div className="absolute md:w-24 md:h-24 w-28 h-28 right-0 bottom-0 rounded-tl-[3rem] bg-[#fbfbfb] ">
								<span className="absolute z-50 bottom-2 right-2 p-4 bg-blue-600 rounded-full group-hover:bg-black transition-all duration-300 ease-linear group-hover:text-white">
									<ArrowUpRight />
								</span>
								<div
									className="absolute z-40 w-[30px] h-[30px] top-[-29px] -right-1 rotate-360 bg-[#ce2929]"
									style={{
										clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
									}}
								></div>
								<div
									className="absolute z-40 w-[30px] h-[30px] bottom-[-1px] -left-12 rotate-200 bg-[#2dff31]"
									style={{
										clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
									}}
								></div>
							</div> */}

							<div className="w-full py-5 border-b-[2px] border-[#f6f6f6] ">
								<p className="md:text-[1.3rem] text-[2rem] text-[#3262ff] font-extrabold">
									02.
								</p>
							</div>

							<div className="w-full flex flex-col justify-start items-start gap-5 mt-10 text-[#fff]">
								<h3 className="md:text-[3rem] text-[4rem] md:font-bold font-extrabold">
									What we do
								</h3>
								<p className="md:text-[1.4rem] text-[2rem] font-medium text-gray-200">
									We maintain this by ensuring transparency and professional
									conduct in every aspect.
								</p>
								<p className="text-[1.4rem] border-b-[2px] border-[#f6f6f6] font-medium md:my-2 my-5">
									Our Solution
								</p>
							</div>

							<div
								className="absolute inset-0 bg-no-repeat bg-left-bottom scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
								style={{
									backgroundImage: `url(${image3})`,
									backgroundSize: "auto",
									backgroundPosition: "-40px calc(100% + 30px)",
									zIndex: 0,
								}}
							></div>
						</div>

						<div
							className="group relative md:w-1/3 w-full md:h-[45rem] h-[60rem] bg-[#000] flex flex-col justify-between items-start rounded-[3rem]   bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500 ease-in-out md:py-5 py-10 px-16 pb-20"
							// data-aos="fade-right"
							style={{
								backgroundImage: `url(${backg})`,
								backgroundSize: "cover",
							}}
						>
							<div className="absolute inset-0 bg-black bg-opacity-60 rounded-[3rem]"></div>

							<div className="z-[4] flex flex-col justify-between items-start w-full h-full">
								<div className="w-full py-5 border-b-[2px] border-[#f6f6f6] ">
									<p className="md:text-[1.3rem] text-[2rem] text-[#3262ff] font-extrabold">
										03.
									</p>
								</div>

								<div className="w-full flex flex-col justify-start items-start gap-5 mt-10 text-[#fff]">
									<h3 className="md:text-[3.5rem] text-[4rem] md:font-bold font-extrabold">
										What we do
									</h3>
									<p className="md:text-[1.7rem] text-[2rem] font-medium text-gray-200">
										We maintain this by ensuring transparency and professional
										conduct in every aspect.
									</p>
									<p className="text-[1.7rem] border-b-[2px] border-[#f6f6f6] font-medium my-5">
										Our Solution
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurStory;
