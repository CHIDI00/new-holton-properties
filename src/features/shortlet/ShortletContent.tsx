import React, { useState, useEffect, useCallback } from "react";
import SHortletHeader from "./SHortletHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ShortletCard from "./ShortletCard";
import Loader from "../../ui/Loader"; // Assuming this path is correct
import FilterForm from "../../ui/FilterForm";

// Define the interface for API response
interface ApiShortlet {
	id: number;
	name: string;
	slug: string;
	location: string;
	lat: number;
	lng: number;
	price: string;
	status: string;
	type: string;
	bedrooms: number;
	bathrooms: number;
	description: string;
	features: string[];
	image_paths: string[];
	video_url?: string;
}

// Define the interface for filter options (consistent with FIlterForm)
interface FilterOptions {
	location: string;
	type: string;
	priceRange: string;
}

// --- Helper to parse currency strings for numerical comparison ---
const parsePriceToNumber = (priceString: string): number => {
	if (!priceString) return 0;

	const cleanedPrice = priceString.replace(/[₦$,\s]/g, "");

	if (cleanedPrice.toLowerCase().endsWith("b")) {
		return parseFloat(cleanedPrice) * 1_000_000_000;
	}
	if (cleanedPrice.toLowerCase().endsWith("m")) {
		return parseFloat(cleanedPrice) * 1_000_000;
	}

	const parsed = parseFloat(cleanedPrice);
	return isNaN(parsed) ? 0 : parsed;
};

const ShortletContent: React.FC = () => {
	// State for all fetched API data (unfiltered)
	const [allShortletData, setAllShortletData] = useState<ApiShortlet[]>([]);
	// State for data displayed after applying filters
	const [filteredShortletData, setFilteredShortletData] = useState<
		ApiShortlet[]
	>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Pagination state
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(9);

	// Filter state, **initialized with a default empty object to prevent TypeError**
	const [filters, setFilters] = useState<FilterOptions>({
		location: "",
		type: "",
		priceRange: "",
	});

	// Define options for the FIlterForm dropdowns (pass these to FIlterForm)
	const shortletTypeOptions = [
		{ value: "building", label: "Building" },
		{ value: "villa", label: "Villa" },
		{ value: "office", label: "Office" },
		{ value: "apartment", label: "Apartment" },
	];

	const locationOptions = [
		{ value: "chevron", label: "Chevron" },
		{ value: "aja", label: "Aja" },
		{ value: "lekki", label: "Lekki" },
		{ value: "island", label: "Island" },
	];

	const priceRangeOptions = [
		{ value: "5000000 - 50000000", label: "₦5M - ₦50M" },
		{ value: "60000000 - 100000000", label: "₦60M - ₦100M" },
		{ value: "110000000 - 200000000", label: "₦110M - ₦200M" },
		{ value: "300000000 - 700000000", label: "₦300M - ₦700M" },
		{ value: "1000000000 - 5000000000", label: "₦1B - ₦5B" },
		// Important: The values here must be raw numbers for the parsePriceToNumber function
		// The labels are for display in the dropdown.
	];

	// Fetch data from API (runs only once on component mount)
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

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				// Assuming data is an array where the actual shortlets array is at data[0]
				const shortlets =
					Array.isArray(data) && Array.isArray(data[0]) ? data[0] : data;

				setAllShortletData(shortlets);
				setFilteredShortletData(shortlets); // Initially, filtered data is all data
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
	}, []); // Empty dependency array means this runs only once

	// --- Effect to apply filters whenever filter state or allShortletData changes ---
	useEffect(() => {
		let currentFilteredData = allShortletData;

		// Filter by shortlet type
		if (filters.type) {
			currentFilteredData = currentFilteredData.filter(
				(shortlet) => shortlet.type.toLowerCase() === filters.type.toLowerCase()
			);
		}

		// Filter by location
		if (filters.location) {
			currentFilteredData = currentFilteredData.filter(
				(shortlet) =>
					shortlet.location.toLowerCase() === filters.location.toLowerCase()
			);
		}

		// Filter by price range
		if (filters.priceRange) {
			const [minStr, maxStr] = filters.priceRange.split(" - ");
			let minPrice = 0;
			let maxPrice = Infinity;

			if (minStr) minPrice = parsePriceToNumber(minStr);
			if (maxStr) maxPrice = parsePriceToNumber(maxStr);

			currentFilteredData = currentFilteredData.filter((shortlet) => {
				const shortletActualPrice = parsePriceToNumber(shortlet.price);
				return (
					shortletActualPrice >= minPrice && shortletActualPrice <= maxPrice
				);
			});
		}

		setFilteredShortletData(currentFilteredData);
		setCurrentPage(1); // Reset to first page whenever filters change
	}, [filters, allShortletData]);

	// Calculate total pages based on FILTERED data
	const totalPages = Math.ceil(filteredShortletData.length / itemsPerPage);

	// Pagination functions
	const goToNextPage = useCallback(() => {
		setCurrentPage((page) => Math.min(page + 1, totalPages));
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [totalPages]);

	const goToPreviousPage = useCallback(() => {
		setCurrentPage((page) => Math.max(page - 1, 1));
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	const goToPage = useCallback((pageNumber: number): void => {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	// --- Handler for search form submission ---
	const handleSearch = useCallback((newFilters: FilterOptions) => {
		setFilters(newFilters); // Update the main filter state, which triggers the useEffect
	}, []);

	// Loading state
	if (loading) {
		return (
			<div>
				<SHortletHeader />
				<FilterForm
					onSearch={handleSearch}
					currentFilters={filters}
					typeOptions={shortletTypeOptions}
					locationOptions={locationOptions}
					priceRangeOptions={priceRangeOptions}
				/>
				<div className="container h-[40rem] mx-auto md:px-[11rem] px-[2rem] flex justify-center items-center py-20">
					<Loader />
				</div>
			</div>
		);
	}

	// Error state
	if (error) {
		return (
			<div>
				<SHortletHeader />
				<FilterForm
					onSearch={handleSearch}
					currentFilters={filters}
					typeOptions={shortletTypeOptions}
					locationOptions={locationOptions}
					priceRangeOptions={priceRangeOptions}
				/>
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
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round"
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
						<p>Connection failed: {error}</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div>
			<SHortletHeader />
			<FilterForm
				onSearch={handleSearch}
				currentFilters={filters}
				typeOptions={shortletTypeOptions}
				locationOptions={locationOptions}
				priceRangeOptions={priceRangeOptions}
			/>
			<ShortletCard
				limit={itemsPerPage}
				currentPage={currentPage}
				shortletData={filteredShortletData}
			/>

			{/* Pagination Controls */}
			{filteredShortletData.length > 0 && (
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
			)}
			{filteredShortletData.length === 0 && !loading && !error && (
				<div className="text-center py-20 text-2xl text-gray-500">
					No shortlets found matching your criteria.
				</div>
			)}
		</div>
	);
};

export default ShortletContent;
