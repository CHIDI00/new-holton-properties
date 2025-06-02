import React, { useState, useEffect } from "react";
import SHortletHeader from "./SHortletHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ShortletCard from "./ShortletCard";
import SearchForm from "./SearchForm";

// Define the interface for API response
interface ApiShortlet {
	id: number;
	name: string;
	slug: string;
	location: string;
	price: string;
	status: string;
	type: string;
	bedrooms: number;
	bathrooms: number;
	description: string;
	features: string[];
	image_paths: string[];
	videoUrl?: string;
}

const ShortletContent: React.FC = () => {
	// State for API data
	const [shortletData, setShortletData] = useState<ApiShortlet[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Pagination state
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(9);

	// Fetch data from API
	useEffect(() => {
		const fetchShortletData = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					"https://holtonrealty.com/admin/api/shortlets",
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
				setShortletData(data[0]);
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
	const totalPages = Math.ceil(shortletData.length / itemsPerPage);

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
				<SHortletHeader />
				<SearchForm />
				<div className="container mx-auto md:px-[11rem] px-[2rem] flex justify-center items-center py-20">
					<div className="text-2xl font-bold text-gray-600">
						Loading shortlets...
					</div>
				</div>
			</div>
		);
	}

	// Error state
	if (error) {
		return (
			<div>
				<SHortletHeader />
				<SearchForm />
				<div className="container mx-auto md:px-[11rem] px-[2rem] flex justify-center items-center py-20">
					<div className="text-2xl font-bold text-red-600">Error: {error}</div>
				</div>
			</div>
		);
	}

	return (
		<div>
			<SHortletHeader />
			<SearchForm />
			<ShortletCard
				limit={itemsPerPage}
				currentPage={currentPage}
				shortletData={shortletData}
			/>

			{/* Pagination Controls */}
			<div className=" container mx-auto md:px-[11rem] flex justify-start items-center mt-8 mb-16 gap-5 text-[2rem] font-bold px-[2rem]">
				{currentPage !== 1 && (
					<button
						type="button"
						title="Previous"
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
					type="button"
					title="Next"
					className={`flex items-center justify-center w-10 h-10 rounded-md ${
						currentPage === totalPages
							? " text-gray-500 cursor-not-allowed"
							: "text-black"
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

export default ShortletContent;
