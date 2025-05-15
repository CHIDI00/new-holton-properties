import React from "react";

const ProjectSearch: React.FC = () => {
	return (
		<div className="container mx-auto md:px-[11rem] px-6">
			<form
				action="submit"
				className="w-full grid md:grid-cols-4 grid-cols-2 justify-center items-center md:my-10 gap-10"
			>
				<select
					name=""
					id=""
					className="md:w-full w-full py-7 px-8 bg-gray-100 rounded-full text-3xl font-medium"
				>
					<option selected>Property Type</option>
					<option value="building">Building</option>
					<option value="villa">Villa</option>
					<option value="office">Office</option>
					<option value="apartment">Apartment</option>
				</select>

				<select
					name=""
					id=""
					className="md:w-full w-full py-7 px-8 bg-gray-100 rounded-full text-3xl font-medium"
				>
					<option selected>Location</option>
					<option value="chevron">Chevron</option>
					<option value="aja">Aja</option>
					<option value="lekki">Lekki</option>
					<option value="island">Island</option>
				</select>

				<select
					name=""
					id=""
					className="md:w-full w-full py-7 px-8 bg-gray-100 rounded-full text-3xl font-medium"
				>
					<option selected>Price Range</option>
					<option value="N100M - N300.4M">N100M - N300.4M</option>
					<option value="N400.5M - N700.7M">N400.5M - N700.7M</option>
					<option value="N800M - N1.7B">N800M - N1.7B</option>
					<option value="N3B - N5.4B">N3B - N5.4B</option>
					<option value="N10B - N15.5B">N10B - N15.5B</option>
				</select>

				<button className="md:w-full w-full bg-[#2A286B] text-3xl rounded-full text-white font-semibold py-7 px-8  hover:bg-[#534fc9] transition-all ease-in-out duration-300">
					Search
				</button>
			</form>
		</div>
	);
};

export default ProjectSearch;
