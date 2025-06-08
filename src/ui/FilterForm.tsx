import React, { useState, useEffect } from "react";

// Define the interface for filter options (consistent across components)
interface FilterOptions {
  location: string;
  type: string; // This will be 'propertyType' or 'shortletType'
  priceRange: string;
}

// Define props for FilterForm
interface FilterFormProps {
  onSearch: (filters: FilterOptions) => void; // Callback to pass filter state to parent
  currentFilters: FilterOptions; // To set initial values or show current filters
  typeOptions: { value: string; label: string }[];
  locationOptions: { value: string; label: string }[];
  priceRangeOptions: { value: string; label: string }[];
}

const FilterForm: React.FC<FilterFormProps> = ({
  onSearch,
  currentFilters,
  typeOptions,
  locationOptions,
  priceRangeOptions,
}) => {
  // Internal state for the form inputs
  const [selectedType, setSelectedType] = useState(currentFilters.type || "");
  const [selectedLocation, setSelectedLocation] = useState(currentFilters.location || "");
  const [selectedPriceRange, setSelectedPriceRange] = useState(currentFilters.priceRange || "");

  // Update internal state if currentFilters from parent change (e.g., reset filters)
  useEffect(() => {
    setSelectedType(currentFilters.type || "");
    setSelectedLocation(currentFilters.location || "");
    setSelectedPriceRange(currentFilters.priceRange || "");
  }, [currentFilters]);


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission
    onSearch({
      type: selectedType,
      location: selectedLocation,
      priceRange: selectedPriceRange,
    });
  };

  return (
    <div className="container mx-auto md:px-[11rem] px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full grid md:grid-cols-4 grid-cols-2 justify-center items-center md:my-10 gap-10"
      >
        <div className="relative w-full ">
          <select
            title="Select Type"
            name="type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="md:w-full w-full py-7 pl-8 appearance-none rounded-full bg-gray-100 text-3xl font-medium pr-10"
          >
            <option value="">Type</option>
            {typeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
            <svg
              className="fill-current h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="relative w-full ">
          <select
            title="Select location"
            name="location"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="md:w-full w-full py-7 px-8 appearance-none bg-gray-100 rounded-full text-3xl font-medium"
          >
            <option value="">Location</option>
            {locationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
            <svg
              className="fill-current h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="relative w-full ">
          <select
            title="Select price range"
            name="priceRange"
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
            className="md:w-full w-full py-7 px-8 appearance-none bg-gray-100 rounded-full text-3xl font-medium"
          >
            <option value="">Price Range</option>
            {priceRangeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
            <svg
              className="fill-current h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <button
          type="submit"
          className="md:w-full w-full bg-[#2A286B] text-3xl rounded-full text-white font-semibold py-7 px-8 hover:bg-[#534fc9] transition-all ease-in-out duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default FilterForm;