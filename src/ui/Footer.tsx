import React from "react";
import project4 from "../assets/project_4.jpg";
import Magnet from "./Magnet";

const Footer: React.FC = () => {
	return (
		<div
			className="relative w-full py-[10rem] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
			style={{ backgroundImage: `url(${project4})` }}
		>
			<div className="absolute inset-0 bg-black bg-opacity-60"></div>
			<div className="absolute w-full h-20 bg-white rounded-b-[5rem] z-10 top-0"></div>

			<div className="flex flex-col justify-center items-center">
				<h1 className="text-[6.5rem] font-bold text-white text-center leading-none z-10 mb-5">
					Your dream <br /> home awaits
				</h1>
				<p className="text-[1.7rem] text-center text-white font-semibold leading-tight z-10 mb-10">
					Whether you’re exploring our homes or envisioning something <br />{" "}
					custom, we’re here to bring your dream to life.
				</p>

				<Magnet padding={50} disabled={false} magnetStrength={5}>
					<div className="w-[150px] h-[150px] flex justify-center items-center bg-[#48484851] border-[1px] border-gray-600 backdrop-blur-xl rounded-full text-white p-6">
						<p className="text-[2rem] text-center font-semibold leading-tight">
							Get your <br /> free <br /> Quote
						</p>
					</div>
				</Magnet>
			</div>
		</div>
	);
};

export default Footer;
