import React from "react";
import Navbar from "../../ui/Navbar";
import bg_image from "../../assets/project_9.webp";

import { NavLink } from "react-router-dom";

const ContactHeader: React.FC = () => {
	return (
		<div
			className={`relative w-full flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat`}
			style={{ backgroundImage: `url(${bg_image})` }}
		>
			<div className="absolute inset-0 bg-black bg-opacity-40"></div>
			<div className="absolute w-full h-20 bg-white rounded-t-[5rem] z-[4] -bottom-1"></div>
			<Navbar />

			<div className="z-[4] w-full flex flex-col justify-start items-start md:px-[4rem] px-[1rem] md:py-[3rem] py-[2rem]">
				<h2 className="md:text-[8rem] text-[4rem] text-white font-bold">
					Get in Touch
				</h2>
			</div>

			<div className="w-full flex flex-col md:flex-row justify-between md:items-end gap-5 items-start md:px-[4rem] md:pt-[10rem] pt-5 px-[1rem] py-[10rem] z-[4]">
				<p className="md:text-[1.4rem] text-[2rem] text-gray-300 font-bold leading-tight">
					<NavLink
						to="/"
						className="hover:text-blue-400 transition-all ease-in duration-300"
					>
						Home
					</NavLink>{" "}
					• Conatct Us
				</p>

				<p className="md:w-[25%] text-[2rem] md:text-gray-400 text-gray-100 font-bold leading-snug">
					Our global real estate experts are here to help you in this
					ever-changing market.
				</p>
			</div>
		</div>
	);
};

export default ContactHeader;
