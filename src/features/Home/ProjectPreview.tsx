import React, { useRef } from "react";
import image9 from "../../assets/project_9.webp";
import image7 from "../../assets/project_7.webp";
import image3 from "../../assets/project_3.webp";
import image5 from "../../assets/project_5.webp";
import ScrollVelocity from "../../ui/ScrollVelocity";
import { MapPin } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectPreview: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const lastCard = document.querySelector<HTMLElement>(".last_card");
		const pinnedSections = gsap.utils.toArray<HTMLElement>(".pinned");

		pinnedSections.forEach((section, index, sections) => {
			const section2 = document.querySelector<HTMLElement>(".section");

			const nextSection = sections[index + 1] || lastCard;
			const endPoint = `top+=${nextSection.offsetTop - section.offsetTop} top`;

			gsap.to(section, {
				scrollTrigger: {
					trigger: section,
					start: "top top",
					endTrigger: lastCard,
					end: "top top",
					scrub: 1,
					pin: true,
					pinSpacing: false,
				},
			});

			gsap.fromTo(
				section2,
				{ scale: 1 },
				{
					scale: 0.5,
					ease: "none",
					scrollTrigger: {
						trigger: section,
						start: "top top",
						end: endPoint,
						scrub: 1,
					},
				}
			);
		});
	});

	return (
		<div
			ref={containerRef}
			className="w-full bg-black flex flex-col justify-center items-center"
		>
			<div className="w-full bg-black md:hidden flex flex-col justify-center items-center gap-10 p-10 pt-16">
				<div
					className="md:max-w-[120px] max-w-[130px] md:py-1 md:px-5 py-4 px-7 border-[1.4px] border-[#2A286B] rounded-full text-white"
					data-aos="flip-left"
				>
					<ScrollVelocity
						texts={["WHAT WE OFFER •"]}
						velocity={12}
						className="custom-scroll-text"
					/>
				</div>

				<h1 className="text-white md:text-[7rem] text-center text-[4rem] leading-none">
					Innovative designs, lasting impressions
				</h1>
			</div>

			{/* card 1 */}
			<section className="section pinned  w-full md:h-[80rem] h-[75rem] bg-black flex justify-between items-center">
				{/* ...existing layout unchanged... */}
				<div className="w-[50%] h-full md:py-28 py-24 md:px-44 px-10 flex flex-col md:justify-between justify-end items-start md:items-center ">
					<div className="w-full md:flex hidden flex-col justify-start items-start gap-20">
						<div
							className="md:max-w-[120px] max-w-[130px] md:py-1 md:px-5 py-4 px-7 border-[1.4px] border-[#2A286B] rounded-full text-white"
							data-aos="flip-left"
						>
							<ScrollVelocity
								texts={["WHAT WE OFFER •"]}
								velocity={12}
								className="custom-scroll-text"
							/>
						</div>
						<h1 className="text-white md:text-[7rem] text-[4rem] leading-none">
							Innovative designs, lasting impressions
						</h1>
					</div>
					{/* <section className="absolute top-[40%] left-1/2 section pinned h-4"></section> */}
					<div className="w-full flex md:flex-row flex-col md:items-center md:justify-center justify-start items-start md:gap-20 gap-5 md:py-0 pb-16 ">
						<h1 className="relative md:text-[8rem] text-[7rem] text-left font-extrabold text-black opacity-10">
							<span
								className="absolute inset-0 text-transparent -z-10"
								style={{ WebkitTextStroke: "5px white" }}
							>
								01
							</span>
							01
						</h1>
						<div className="w-full">
							<p className="md:text-[1.4rem] text-[1.7rem] font-bold text-white flex items-center gap-4 pb-8 border-b-2 border-gray-400">
								<span className="text-blue-900">
									<MapPin />
								</span>
								Lekki, Phase 2
							</p>
							<h1 className="md:text-[3rem] text-[2.5rem] text-white pt-6 font-semibold">
								Apartment building
							</h1>
						</div>
					</div>
				</div>
				<div className="w-[50%] h-full">
					<img
						src={image9}
						alt=""
						draggable="false"
						className="img w-full h-full object-cover"
					/>
				</div>
			</section>

			{/* card 2 */}
			<section className="section pinned w-full md:h-[80rem] h-[75rem] bg-black flex justify-between items-center">
				{/* ...same content as original... */}
				<div className="w-[50%] h-full md:py-52 py-24 md:px-44 px-10 flex flex-col md:justify-between justify-end items-start md:items-center ">
					<div className="w-full md:h-full flex md:flex-row flex-col md:items-end md:justify-end justify-start items-start md:gap-20 gap-5 md:py-0 pb-16 ">
						<h1 className="relative md:text-[8rem] text-[7rem] text-left font-extrabold text-black opacity-10">
							<span
								className="absolute inset-0 text-transparent -z-10"
								style={{ WebkitTextStroke: "5px white" }}
							>
								02
							</span>
							02
						</h1>
						<div className="w-full">
							<p className="md:text-[1.4rem] text-[1.7rem] font-bold text-white flex items-center gap-4 pb-8 border-b-2 border-gray-400">
								<span className="text-blue-900">
									<MapPin />
								</span>
								Chevron
							</p>
							<h1 className="md:text-[3rem] text-[2.5rem] text-white pt-6 font-semibold">
								Apartment building
							</h1>
						</div>
					</div>
				</div>
				<div className="w-[50%] h-full">
					<img
						src={image7}
						alt=""
						draggable="false"
						className="img w-full h-full object-cover"
					/>
				</div>
			</section>

			{/* card 3 */}
			<section className="section pinned w-full md:h-[80rem] h-[75rem] bg-black flex justify-between items-center">
				{/* ...same layout structure... */}
				<div className="w-[50%] h-full md:py-52 py-24 md:px-44 px-10 flex flex-col md:justify-between justify-end items-start md:items-center ">
					<div className="w-full md:h-full flex md:flex-row flex-col md:items-end md:justify-end justify-start items-start md:gap-20 gap-5 md:py-0 pb-16 ">
						<h1 className="relative md:text-[8rem] text-[7rem] text-left font-extrabold text-black opacity-10">
							<span
								className="absolute inset-0 text-transparent -z-10"
								style={{ WebkitTextStroke: "5px white" }}
							>
								03
							</span>
							03
						</h1>
						<div className="w-full">
							<p className="md:text-[1.4rem] text-[1.7rem] font-bold text-white flex items-center gap-4 pb-8 border-b-2 border-gray-400">
								<span className="text-blue-900">
									<MapPin />
								</span>
								Chevron
							</p>
							<h1 className="md:text-[3rem] text-[2.5rem] text-white pt-6 font-semibold">
								Apartment building
							</h1>
						</div>
					</div>
				</div>
				<div className="w-[50%] h-full">
					<img
						src={image3}
						alt=""
						draggable="false"
						className="img w-full h-full object-cover"
					/>
				</div>
			</section>

			{/* card 4 (last) */}
			<section className="section last_card w-full md:h-[80rem] z-50 h-[75rem] bg-black flex justify-between items-center">
				{/* ...original content unchanged... */}
				<div className="w-[50%] h-full md:py-52 py-24 md:px-44 px-10 flex flex-col md:justify-between justify-end items-start md:items-center ">
					<div className="w-full md:h-full flex md:flex-row flex-col md:items-end md:justify-end justify-start items-start md:gap-20 gap-5 md:py-0 pb-16 ">
						<h1 className="relative md:text-[8rem] text-[7rem] text-left font-extrabold text-black opacity-10">
							<span
								className="absolute inset-0 text-transparent -z-10"
								style={{ WebkitTextStroke: "5px white" }}
							>
								04
							</span>
							04
						</h1>
						<div className="w-full">
							<p className="md:text-[1.4rem] text-[1.7rem] font-bold text-white flex items-center gap-4 pb-8 border-b-2 border-gray-400">
								<span className="text-blue-900">
									<MapPin />
								</span>
								Chevron
							</p>
							<h1 className="md:text-[3rem] text-[2.5rem] text-white pt-6 font-semibold">
								Apartment building
							</h1>
						</div>
					</div>
				</div>
				<div className="w-[50%] h-full">
					<img
						src={image5}
						alt=""
						draggable="false"
						className="img w-full h-full object-cover"
					/>
				</div>
			</section>
		</div>
	);
};

export default ProjectPreview;
