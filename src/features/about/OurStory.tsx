import React, { useEffect, useRef } from "react";
import ScrollVelocity from "../../ui/ScrollVelocity";
import journey83 from "../../assets/journey_83.png";
import journey05 from "../../assets/journey_05.png";
import journey13 from "../../assets/journey_13.png";
import journey96 from "../../assets/journey_96.png";
import journey24 from "../../assets/journey_24.png";

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

			const totalOffset = 15 * 2 * 16; // 15rem left & right margin * 16px (default rem)
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
					className="races relative w-fit h-[50rem] flex flex-nowrap justify-start items-start gap-[7rem] scroll-smooth md:mx-[15rem] mr-0"
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

			<div className="">
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
		</div>
	);
};

export default OurStory;
