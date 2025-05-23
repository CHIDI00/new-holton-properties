import React, { useState } from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectSearch from "./ProjectSearch";
import ProjectGrid from "./ProjectGrid";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectData } from "./projectData";

const ProjectContent: React.FC = () => {
	// Pagination state
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(9);

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

	return (
		<div>
			<ProjectHeader />
			<ProjectSearch />
			<ProjectGrid limit={itemsPerPage} currentPage={currentPage} />

			{/* Pagination Controls */}
			<div className=" container mx-auto md:px-[11rem] flex justify-start items-center mt-8 mb-16 gap-5 text-[2rem] font-bold px-[2rem]">
				{currentPage !== 1 && (
					<button
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
