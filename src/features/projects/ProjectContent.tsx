import React, { useState, useEffect } from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectSearch from "./ProjectSearch";
import ProjectGrid from "./ProjectGrid";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
	lat_long: string;
	name: string;
	slug: string;
	plan: string;
	area: string;
	features: string[];
	video_url?: string;
}

const ProjectContent: React.FC = () => {
	// State for API data
	const [projectData, setProjectData] = useState<ApiProjects[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Pagination state
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(9);

	useEffect(() => {
		const fetchShortletData = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					"https://holtonrealty.com/admin/api/projects",
					{
						method: "GET",
						headers: {
							Accept: "application/json",
						},
					}
				);
				console.log(response);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				setProjectData(data[0]);
				setError(null);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : "Failed to fetch shortlet data"
				);
				console.error("Error fetching shortlet data:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchShortletData();
	}, []);

	// Calculate total pages
	const totalPages = Math.ceil(projectData.length / itemsPerPage);

	// Pagination functions
	function goToNextPage() {
		setCurrentPage((page) => Math.min(page + 1, totalPages));
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	function goToPreviousPage() {
		setCurrentPage((page) => Math.max(page - 1, 1));
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	interface GoToPageFunction {
		(pageNumber: number): void;
	}

	const goToPage: GoToPageFunction = function (pageNumber: number): void {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	// Loading state
	if (loading) {
		return (
			<div>
				<ProjectHeader />
				<ProjectSearch />
				<div className="container mx-auto md:px-[11rem] px-[2rem] flex justify-center items-center py-20">
					<div className="text-2xl font-bold text-gray-600">
						Loading shortlets...
					</div>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div>
				<ProjectHeader />
				<ProjectSearch />
				<div className="container mx-auto md:px-[11rem] px-[2rem] flex justify-center items-center py-20">
					<div className="text-2xl font-bold text-red-600">Error: {error}</div>
				</div>
			</div>
		);
	}

	return (
		<div>
			<ProjectHeader />
			<ProjectSearch />
			<ProjectGrid limit={itemsPerPage} currentPage={currentPage} />

			{/* Pagination Controls */}
			<div className=" container mx-auto md:px-[11rem] flex justify-start items-center mt-8 mb-16 gap-5 text-[2rem] font-bold px-[2rem]">
				{currentPage !== 1 && (
					<button
						title="Previous"
						type="button"
						className={`flex items-center justify-center w-10 h-10 rounded-md ${
							currentPage === 1
								? " text-gray-500 cursor-not-allowed"
								: "text-black"
						}`}
						onClick={goToPreviousPage}
						disabled={currentPage === 1}
					>
						<ChevronLeft />
					</button>
				)}

				{/* Page Numbers */}
				{[...Array(totalPages)].map((_, index) => {
					const pageNumber = index + 1;
					// Show limited page numbers with ellipsis for better UX
					if (
						pageNumber === 1 ||
						pageNumber === totalPages ||
						(pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
					) {
						return (
							<button
								type="button"
								key={pageNumber}
								className={`w-20 h-20 p-8 flex justify-center items-center rounded-full ${
									currentPage === pageNumber
										? "bg-blue-800 text-white"
										: " hover:bg-gray-100"
								}`}
								onClick={() => goToPage(pageNumber)}
							>
								{pageNumber}
							</button>
						);
					} else if (
						(pageNumber === currentPage - 2 && currentPage > 3) ||
						(pageNumber === currentPage + 2 && currentPage < totalPages - 2)
					) {
						return (
							<span key={pageNumber} className="px-1">
								...
							</span>
						);
					}
					return null;
				})}

				<button
					type="button"
					title="Next"
					className={`flex items-center justify-center w-10 h-10 rounded-md ${
						currentPage === totalPages
							? " text-gray-500 cursor-not-allowed"
							: " text-black "
					}`}
					onClick={goToNextPage}
					disabled={currentPage === totalPages}
				>
					<ChevronRight />
				</button>
			</div>
		</div>
	);
};

export default ProjectContent;
