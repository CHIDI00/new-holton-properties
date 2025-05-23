import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/HOLTONicon-dark.webp";
import { AlignCenter, X } from "lucide-react";

const Navbar: React.FC = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

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
								className="text-2xl font-bold text-black hover:text-gray-400"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about_us"
								className="text-2xl font-bold text-black hover:text-gray-400"
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/shortlet_grid"
								className="text-2xl font-bold text-black hover:text-gray-400"
							>
								Shortlet
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/property_grid"
								className="text-2xl font-bold text-black hover:text-gray-400"
							>
								Properties
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/project_grid"
								className="text-2xl font-bold text-black hover:text-gray-400"
							>
								Projects
							</NavLink>
						</li>
						<li>
							<NavLink
								to="#services"
								className="text-2xl font-bold text-black hover:text-gray-400"
							>
								Services
							</NavLink>
						</li>
						<li>
							<NavLink
								to="contact_us"
								className="text-2xl font-bold text-black hover:text-gray-400"
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>

				<div className="h-full hidden lg:flex justify-between items-center">
					<p className="text-2xl text-black">
						Call us:{" "}
						<span className="text-gray-400 border-b-[1px] border-[#2A286B]">
							+(234) 90 7223 8263
						</span>
					</p>
					<button className="h-full bg-[#2A286B] text-2xl rounded-full text-white font-semibold px-10 py-5 ml-6  hover:bg-[#534fc9] transition-all ease-in-out duration-300">
						Get In Touch
					</button>
				</div>

				{/* Mobile Nav button */}
				<div className="lg:hidden w-full flex justify-between items-center">
					<div className="text-black text-lg font-bold pr-4 mr-16">
						<img src={logo} alt="Holton Logo" />
					</div>

					<button
						type="button"
						title="Menu"
						onClick={toggleMobileMenu}
						className="p-5 bg-blue-800 rounded-3xl text-white cursor-pointer"
					>
						<AlignCenter />
					</button>
				</div>

				{/* Mobile Menu */}
				<div
					className={`lg:hidden h-full bg-white fixed overflow-y-auto shadow-lg transition-all duration-300 transform  ${
						mobileMenuOpen ? "translate-x-0" : "translate-x-[-100%]"
					} ${"top-0 left-0 h-full w-full z-[100]"}`}
				>
					<nav className="container   mx-auto px-4 py-4">
						<div className="w-full flex justify-end items-center mb-10">
							<button
								type="button"
								title="Close Menu"
								onClick={() => setMobileMenuOpen(false)}
								className="p-5 bg-blue-800 rounded-3xl text-white cursor-pointer"
							>
								<X />
							</button>
						</div>
						<ul className="md:grid md:grid-cols-2 space-y-4 text-gray-700">
							<li>
								<NavLink
									to="/"
									className="block hover:text-[#0B0B1F] font-bold py-5 pb-7 text-5xl mb-9 border-b-2 border-gray-200 text-left mx-6"
									onClick={() => setMobileMenuOpen(false)}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/property_grid"
									className="block hover:text-[#0B0B1F] font-bold py-5 pb-7 text-5xl mb-9 border-b-2 border-gray-200 text-left mx-6"
									onClick={() => setMobileMenuOpen(false)}
								>
									Properties
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/shortlet_grid"
									className="block hover:text-[#0B0B1F] font-bold py-5 pb-7 text-5xl mb-9 border-b-2 border-gray-200 text-left mx-6"
									onClick={() => setMobileMenuOpen(false)}
								>
									Shortlets
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/project_grid"
									className="block hover:text-[#0B0B1F] font-bold py-5 pb-7 text-5xl mb-9 border-b-2 border-gray-200 text-left mx-6"
									onClick={() => setMobileMenuOpen(false)}
								>
									Projects
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/about_us"
									className="block hover:text-[#0B0B1F] font-bold py-5 pb-7 text-5xl mb-9 border-b-2 border-gray-200 text-left mx-6"
									onClick={() => setMobileMenuOpen(false)}
								>
									About us
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/contact_us"
									className="block hover:text-[#0B0B1F] font-bold py-5 pb-7 text-5xl mb-9 text-left mx-6"
									onClick={() => setMobileMenuOpen(false)}
								>
									Contact Us
								</NavLink>
							</li>
						</ul>
						<div className="h-full flex justify-between items-center px-7">
							<p className="text-4xl text-black">
								Call us:{" "}
								<span className="text-gray-200 border-b-2 border-[#2A286B]">
									+(234) 90 7223 8263
								</span>
							</p>
							<button className="h-full bg-[#2A286B] text-3xl rounded-full text-white font-semibold px-10 py-5 ml-6  hover:bg-[#534fc9] transition-all ease-in-out duration-300">
								Get In Touch
							</button>
						</div>
					</nav>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
