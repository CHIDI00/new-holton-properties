"use client";

import React, { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

export const InfiniteMovingCards = ({
	items,
	direction = "right",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		id: number;
		name: string;
		position: string;
		image: string;
		alt: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 max-w-full md:h-[55rem] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_0%,white_100%,transparent)]",
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					"flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4",
					start && "animate-scroll",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{items.map((item) => (
					<li
						className="group relative md:h-[45rem] h-[60rem] bg-[#fbfbfb] block  justify-between items-start rounded-[3rem]  hover:bg-blue-800  bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
						// data-aos="fade-right"
						key={item.id}
					>
						<div className="w-full h-full overflow-hidden rounded-[3rem]">
							<img
								src={item.image}
								alt={item.alt}
								loading="lazy"
								className="w-full h-full object-cover bg-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
							/>
						</div>

						<div className="absolute z-10 -bottom-[9%] left-[50%] transform -translate-x-1/2 p-7 bg-[#0000003b] backdrop-blur-lg w-[80%] flex flex-col justify-center items-center text-center rounded-[2.3rem]">
							<p className="md:text-[1rem] text-[1.5rem] font-medium uppercase text-white mb-2">
								{item.position}
							</p>
							<p className="text-[2.5rem] text-white">{item.name}</p>
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
					</li>
				))}
			</ul>
		</div>
	);
};
