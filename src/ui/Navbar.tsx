import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/HOLTONicon-dark.png";
import { AlignCenter } from "lucide-react";

const Navbar: React.FC = () => {
	return (
		<div className="w-full relative z-10 ">
			<nav className="flex justify-between items-center bg-white py-5 px-7 w-[95%] mx-auto my-10 rounded-3xl md:rounded-full">
				<div className=" hidden lg:flex justify-start items-center ">
					<div className="text-black text-lg font-bold border-r-[.8px] border-gray-200 pr-4 mr-16">
						<img src={logo} alt="Holton Logo" />
					</div>
					<ul className="flex space-x-10 ">
						<li>
							<NavLink
								to="/"
								className="text-2xl font-semibold text-black hover:text-gray-400"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="#about"
								className="text-2xl font-semibold text-black hover:text-gray-400"
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="#services"
								className="text-2xl font-semibold text-black hover:text-gray-400"
							>
								Services
							</NavLink>
						</li>
						<li>
							<NavLink
								to="#contact"
								className="text-2xl font-semibold text-black hover:text-gray-400"
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>

				<div className="h-full hidden lg:flex justify-between items-center">
					<p className="text-2xl">
						<span>Call us:</span> +(234) 90 7223 8263
					</p>
					<button className="h-full bg-[#2A286B] text-2xl rounded-full text-white font-semibold px-10 py-5 ml-6  hover:bg-[#534fc9] transition-all ease-in-out duration-300">
						Get In Touch
					</button>
				</div>

				{/* Mobile Nav */}
				<div className="lg:hidden w-full flex justify-between items-center">
					<div className="text-black text-lg font-bold pr-4 mr-16">
						<img src={logo} alt="Holton Logo" />
					</div>

					<button
						type="button"
						title="Menu"
						className="p-5 bg-[#2A286B] rounded-3xl text-white cursor-pointer"
					>
						<AlignCenter />
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
