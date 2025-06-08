import React, { useState, useEffect } from "react";
import Navbar from "../../ui/Navbar";
import bg_image from "../../assets/project_12.webp";
import { NavLink, useParams } from "react-router-dom";
import {
	ArrowUpRight,
	Building,
	Calendar,
	ChartArea,
	DollarSign,
	Expand,
	Image,
	LandPlot,
	MapPin,
} from "lucide-react";
import { formatCurrency } from "../../utils/helper";
import Loader from "../../ui/Loader";
import GoogleMapEmbed from "../../ui/GoogleMap";

// Define the interface for API response
interface ApiProjects {
	id: number;
	status: string;
	description: string;
	type: string;
	bedrooms: number;
	bathrooms: number;
	price: string;
	image_paths: string[];
	location: string;
	lat: number;
	lng: number;
	name: string;
	slug: string;
	plan: string;
	area: string;
	start_date: string;
	number_of_floors: string;
	special_features: string;
	amenities: {
		icon: string;
		title: string;
		description: string;
	}[];
	features: string;
	video_url?: string;
}

const ProjectDetail: React.FC = () => {
	// Get the projectId from the URL Parameters
	const { projectSlug } = useParams<{ projectSlug: string }>();
	const [project, setProject] = useState<ApiProjects | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!projectSlug) {
			setError("No project ID provided");
			setLoading(false);
			return;
		}

		const slug = projectSlug;
		if (!slug) {
			setError("Invalid project ID format");
			setLoading(false);
			return;
		}

		const fetchProjectDetail = async () => {
			try {
				console.log("Fetching data for project SLUG:", slug);

				const response = await fetch(
					`https://holtonrealty.com/admin/api/project/${projectSlug}`,
					{
						method: "GET",
						headers: {
							Accept: "application/json",
						},
					}
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const text = await response.text();
				const data = JSON.parse(text);

				console.log("Full API Response:", data);

				const foundProject = data.find((item: { slug: string }) => {
					if (!item || !item.slug) return false;
					return String(item.slug) === slug;
				});

				if (!foundProject) {
					throw new Error(`project with ID ${slug} not found`);
				}

				setProject(foundProject);
				setError(null);
			} catch (err) {
				console.error("Error fetching project:", err);
				setError(
					err instanceof Error ? err.message : "Failed to fetch project data"
				);
				setProject(null);
			} finally {
				setLoading(false);
			}
		};

		fetchProjectDetail();
	}, [projectSlug]);

	// Loading state
	if (loading) {
		return (
			<>
				<div
					className={`relative w-full flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat`}
					style={{ backgroundImage: `url(${bg_image})` }}
				>
					<div className="absolute inset-0 bg-black bg-opacity-40"></div>
					<div className="absolute w-full h-20 bg-white rounded-t-[5rem] z-[4] -bottom-1"></div>
					<Navbar />

					<div className="w-full flex flex-col md:flex-row justify-between md:items-end gap-5 items-start md:px-[4rem] md:pt-[10rem] pt-16 px-[1rem] md:py-[10rem] py-[8rem] z-[4]">
						<p className="md:text-[1.4rem] text-[2rem] text-gray-300 font-bold leading-tight">
							<NavLink
								to="/"
								className="hover:text-blue-400 transition-all ease-in duration-300"
							>
								Home
							</NavLink>{" "}
							•{" "}
							<NavLink
								to="/project_grid"
								className="hover:text-blue-400 transition-all ease-in duration-300"
							>
								project
							</NavLink>{" "}
							• {project?.name}
						</p>
					</div>
				</div>
				<div className="container h-[40rem] mx-auto md:px-[11rem] px-[2rem] flex justify-center items-center py-20">
					<div className="text-2xl font-bold text-gray-600">
						<Loader />
					</div>
				</div>
			</>
		);
	}

	// Error state
	if (error) {
		return (
			<div className="container h-[40rem] mx-auto md:px-[11rem] px-[2rem] flex justify-center items-center py-20">
				<div className="text-2xl font-bold text-red-600 flex flex-col justify-center items-center">
					<p className="text-5xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="70"
							height="70"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1"
							stroke-linecap="round"
							stroke-linejoin="round"
							className="lucide lucide-unplug-icon lucide-unplug"
						>
							<path d="m19 5 3-3" />
							<path d="m2 22 3-3" />
							<path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
							<path d="M7.5 13.5 10 11" />
							<path d="M10.5 16.5 13 14" />
							<path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" />
						</svg>
					</p>
					<p>Connection failed </p>
				</div>
			</div>
		);
	}

	// If shortlet not found
	if (!project) {
		return (
			<div className="container mx-auto md:px-[11rem] px-[2rem] flex justify-center items-center py-20">
				<div className="text-2xl font-bold text-gray-600">
					project not found
				</div>
			</div>
		);
	}

	return (
		<div>
			<div
				className={`relative w-full flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat`}
				style={{ backgroundImage: `url(${bg_image})` }}
			>
				<div className="absolute inset-0 bg-black bg-opacity-40"></div>
				<div className="absolute w-full h-20 bg-white rounded-t-[5rem] z-[4] -bottom-1"></div>
				<Navbar />

				<div className="w-full flex flex-col md:flex-row justify-between md:items-end gap-5 items-start md:px-[4rem] md:pt-[10rem] pt-16 px-[1rem] md:py-[10rem] py-[8rem] z-[4]">
					<p className="md:text-[1.4rem] text-[2rem] text-gray-300 font-bold leading-tight">
						<NavLink
							to="/"
							className="hover:text-blue-400 transition-all ease-in duration-300"
						>
							Home
						</NavLink>{" "}
						•{" "}
						<NavLink
							to="/project_grid"
							className="hover:text-blue-400 transition-all ease-in duration-300"
						>
							Projects
						</NavLink>{" "}
						• {project?.name}
					</p>
				</div>
			</div>

			<div className="container mx-auto md:px-[11rem] md:py-16 px-[2rem]">
				<div className="w-full border-b-[1px] border-gray-400 pb-12">
					<p className="md:text-[1.7rem] text-[2rem] text-gray-800 font-bold leading-tight flex items-center mb-7 gap-4">
						<span className="text-blue-700">
							<MapPin />
						</span>{" "}
						{project?.location}
					</p>

					<h1 className="md:text-[7rem] text-[5rem] leading-none font-bold">
						{project?.name}
					</h1>
				</div>

				<div className="container mx-auto md:px-0 flex md:flex-nowrap flex-wrap shrink-0 md:justify-between justify-start items-center md:gap-2 md:py-5">
					<div className="md:p-2 md:w-1/5 w-1/2 p-10 flex md:flex-row flex-col justify-center items-center md:gap-5 gap-5 font-bold">
						<span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
							<ChartArea />
						</span>
						<div className="flex flex-col md:justify-start md:items-start justify-center items-center">
							<p className="md:text-[1.6rem] text-[2rem] text-gray-400">
								Status
							</p>
							<p className="md:text-[1.6rem] text-[2rem]">{project?.status}</p>
						</div>
					</div>
					<div className="md:p-2 md:w-1/5 w-1/2 p-10 flex md:flex-row flex-col justify-center items-center md:gap-5 gap-5 font-bold">
						<span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
							<Building />
						</span>
						<div className="flex flex-col md:justify-start md:items-start justify-center items-center">
							<p className="md:text-[1.6rem] text-[2rem] text-gray-400">
								Project Type
							</p>
							<p className="md:text-[1.6rem] text-[2rem]">{project?.type}</p>
						</div>
					</div>
					<div className="md:p-2 md:w-1/5 w-1/2 p-10 flex md:flex-row flex-col justify-center items-center md:gap-5 gap-5 font-bold">
						<span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
							<LandPlot />
						</span>
						<div className="flex flex-col md:justify-start md:items-start justify-center items-center">
							<p className="md:text-[1.6rem] text-[2rem] text-gray-400">
								Project Area
							</p>
							<p className="md:text-[1.6rem] text-[2rem]">{project?.area}</p>
						</div>
					</div>
					<div className="md:p-2 md:w-1/5 w-1/2 p-10 flex md:flex-row flex-col justify-center items-center md:gap-5 gap-5 font-bold">
						<span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
							<Calendar />
						</span>
						<div className="flex flex-col md:justify-start md:items-start justify-center items-center">
							<p className="md:text-[1.6rem] text-[2rem] text-gray-400">
								Commencement date
							</p>
							<p className="md:text-[1.6rem] text-[2rem]">
								{project?.start_date}
							</p>
						</div>
					</div>
					<div className="md:p-2 md:w-1/5 w-1/2 p-10 flex md:flex-row flex-col justify-center items-center md:gap-5 gap-5 font-bold">
						<span className="p-5 md:w-24 md:h-24 w-28 h-28 text-[2rem] rounded-full border-[1px] border-gray-400 flex justify-center items-center">
							<DollarSign />
						</span>
						<div className="flex flex-col md:justify-start md:items-start justify-center items-center">
							<p className="md:text-[1.6rem] text-[2rem] text-gray-400">
								Price Range
							</p>
							<p className="md:text-[1.6rem] text-[2rem]">
								{formatCurrency(project?.price)}
							</p>
						</div>
					</div>
				</div>

				<div className="w-full md:h-[60rem] h-[50rem] md:my-16 ">
					<div className="w-full h-full flex justify-center items-center rounded-[3rem] overflow-hidden">
						<img
							src={`https://holtonrealty.com/admin/public${project.image_paths}`}
							alt={project?.name}
							className="rounded-[3rem] object-cover"
						/>
					</div>
				</div>

				<div className="w-full flex flex-col md:flex-row justify-between items-start gap-28">
					<div className="md:w-2/3 w-full">
						<p className="md:text-[5rem] text-[3.5rem] font-bold mb-5">
							Project Description
						</p>
						<p className="md:text-[1.8rem] text-[2rem] font-medium text-gray-500">
							{project?.description}
						</p>
					</div>

					<div className="md:w-1/3 w-full">
						<p className="md:text-[2.5rem] text-[2.5rem] font-bold mb-5">
							Key Details
						</p>

						<ul className="list-disc pl-10 flex flex-col justify-start items-start gap-3">
							<li className="marker:text-blue-800 md:marker:text-4xl marker:text-5xl md:text-[1.8rem] text-[2rem] font-medium text-gray-500 gap-4">
								<span className="text-black font-bold">Location:</span>{" "}
								{project?.location}
							</li>
							<li className="marker:text-blue-800 md:marker:text-4xl marker:text-5xl md:text-[1.8rem] text-[2rem] font-medium text-gray-500 gap-4">
								<span className="text-black font-bold">
									Total Built-Up Area:
								</span>{" "}
								{project?.area}
							</li>
							<li className="marker:text-blue-800 md:marker:text-4xl marker:text-5xl md:text-[1.8rem] text-[2rem] font-medium text-gray-500 gap-4">
								<span className="text-black font-bold">Number of Floors:</span>{" "}
								{project?.number_of_floors}
							</li>
							<li className="marker:text-blue-800 md:marker:text-4xl marker:text-5xl md:text-[1.8rem] text-[2rem] font-medium text-gray-500 gap-4">
								<span className="text-black font-bold">Special Features:</span>{" "}
								{project?.special_features}
							</li>
							<li className="marker:text-blue-800 md:marker:text-4xl marker:text-5xl md:text-[1.8rem] text-[2rem] font-medium text-gray-500 gap-4">
								<span className="text-black font-bold">Amenities:</span>{" "}
								{project?.features}
							</li>
						</ul>
					</div>
				</div>

				{project?.amenities && (
					<div className="w-full flex flex-col justify-center items-center border-t-[1px] border-b-[1px] border-gray-300 py-20 my-20 md:gap-5 gap-2">
						<div className="w-full flex justify-start items-start">
							<p className="md:text-[5rem] text-[3.5rem] font-bold mb-5">
								Features & amenities
							</p>
						</div>

						<div className="w-full grid md:grid-cols-4 grid-cols-1 grid-flow-row md:gap-y-32 py-10 md:gap-9 gap-20 md:mt-16 mt-24">
							{project?.amenities?.map((amenity) => (
								<div
									className="relative w-full h-[25rem] p-16 rounded-[3rem] bg-gradient-to-b from-[#f6f4f4] to-[#ffffff23]"
									// key={amenity.index}
								>
									<div className="absolute md:w-44 md:h-44 w-56 h-56 md:-top-[26%] -top-[9rem] left-[50%] transform -translate-x-1/2 p-5 bg-white rounded-full">
										<div
											className="absolute w-[30px] h-[30px] md:bottom-[1.5rem] md:-right-[25px] right-[-23px] bottom-[1.3rem] rotate-90 bg-[#fff]"
											style={{
												clipPath: "path('M0 0 Q0,30 20,30 L 0 30 Z')",
											}}
										></div>
										<div
											className="absolute w-[30px] h-[30px] md:left-[-24px] md:bottom-[2.5rem] left-[-23px] bottom-[2.5rem] rotate-180 bg-[#fff]"
											style={{
												clipPath: "path('M0 0 Q0,20 30,20 L0 20 Z')",
											}}
										></div>
										<div className="flex justify-center items-center text-white w-full h-full rounded-full bg-blue-900 ">
											<img
												src={`https://holtonrealty.com/admin/public${amenity.icon}`}
												alt={amenity.title}
											/>
										</div>
									</div>
									<div className="w-full h-full flex flex-col justify-center items-center">
										<p className="md:text-[2.2rem] text-[3rem] font-bold mb-7">
											{amenity.title}
										</p>
										<p className="md:text-[1.8rem] text-[2.3rem] text-center font-medium leading-tight text-gray-500">
											{amenity.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				<div className="w-full flex flex-col justify-center items-center">
					<div className="w-full flex justify-between items-center">
						<p className="md:text-[5rem] text-[3.5rem] font-bold mb-5">Media</p>

						<div className="flex md:gap-5 gap-6">
							<button className="flex justify-center items-center bg-[#ffffff] md:text-xl text-3xl rounded-full text-black font-bold px-8 pl-8 py-4 gap-4 border-[1px] border-black  hover:bg-[#2A286B] hover:border-[#2A286B] hover:text-[#fff] transition-all ease-in-out duration-300">
								<Image /> Photos
							</button>

							<button className="flex justify-center items-center bg-[#ffffff] md:text-xl text-3xl rounded-full text-black font-bold px-8 pl-8 py-4 gap-4 border-[1px] border-black  hover:bg-[#2A286B] hover:border-[#2A286B] hover:text-[#fff] transition-all ease-in-out duration-300">
								<Expand /> Plans
							</button>
						</div>

						{/* Map */}
						<div className="w-full flex md:flex-row flex-col-reverse justify-start items-start my-10 gap-16">
							<div className="md:w-[50%] w-full md:h-[700px] h-full rounded-[3rem] border-[1px] border-gray-300 my-10 md:p-24 p-7 py-10">
								<p className="md:text-6xl text-5xl md:text-left text-center font-bold leading-tight ">
									Request more <br /> information
								</p>
								<form action="submit" className="w-full z-10 py-7">
									<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 ">
										<input
											type="text"
											placeholder="Your Name *"
											className="w-full md:px-8 md:py-7 md:text-2xl px-9 py-6 text-4xl border-none bg-gray-100 rounded-full font-medium mb-5 mr-8"
										/>

										<input
											type="text"
											placeholder="Phone number *"
											className="w-full md:px-8 md:py-7 md:text-2xl px-9 py-6 text-4xl border-none bg-gray-100 rounded-full font-medium mb-5 mr-8"
										/>
									</div>
									<input
										type="email"
										placeholder="Email *"
										className="w-full md:px-8 md:py-7 md:text-2xl px-9 py-6 text-4xl border-none bg-gray-100 rounded-full font-medium mb-5 mr-8"
									/>
									<textarea
										placeholder="Message *"
										className="w-full h-[25rem] md:px-8 md:py-7 md:text-2xl text-gray-500 px-9 py-6 text-4xl border-none bg-gray-100 rounded-[2rem] font-medium mb-5 mr-8"
									></textarea>
									<div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 px-10 py-5 mx-auto">
										<div className="">
											<p className="text-[1.7rem] font-medium text-gray-600">
												Required fields are marked *
											</p>
										</div>
										<button className="flex justify-center items-center bg-blue-600 md:text-xl text-4xl rounded-full text-white font-bold px-5 pr-2 pl-8 py-2 mt-10 md:mt-0 hover:bg-[#000] hover:text-[#fff] transition-all ease-in-out duration-300">
											Submit{" "}
											<span className="ml-4 p-4 bg-[#fff] text-black rounded-full">
												<ArrowUpRight />
											</span>
										</button>
									</div>
								</form>
							</div>
							<div className="md:w-[50%] w-full rounded-[3rem]">
								<GoogleMapEmbed
									lat={project?.lat ?? ""}
									lng={project?.lng ?? ""}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetail;
