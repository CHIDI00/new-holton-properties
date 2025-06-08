import React, { useState } from "react";

// Define the interface for filter options (must match parent's interface)
interface FilterOptions {
  location: string;
  type: string;
  priceRange: string;
}

// Define props for SearchForm
interface SearchFormProps {
  onSearch: (filters: FilterOptions) => void; // Callback to pass filter state to parent
  currentFilters: FilterOptions; // To initialize form fields with current filter values
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, currentFilters }) => {
  // Internal state for the form inputs, initialized from currentFilters prop
  const [shortletType, setShortletType] = useState(currentFilters.type || "");
  const [location, setLocation] = useState(currentFilters.location || "");
  const [priceRange, setPriceRange] = useState(currentFilters.priceRange || "");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission (page reload)
    // Pass the current state of the form fields up to the parent component
    onSearch({
      type: shortletType,
      location: location,
      priceRange: priceRange,
    });
  };

  return (
    <div className="container mx-auto md:px-[11rem] px-6">
      <form
        onSubmit={handleSubmit} // Attach handleSubmit to the form's onSubmit event
        className="w-full grid md:grid-cols-4 grid-cols-2 justify-center items-center md:my-10 gap-10"
      >
        <div className="relative w-full ">
          <select
            title="Select Shortlet type"
            name="shortletType" // Good practice to add name attribute
            value={shortletType} // Controlled component: value tied to state
            onChange={(e) => setShortletType(e.target.value)} // Update state on change
            className="md:w-full w-full py-7 pl-8 appearance-none rounded-full bg-gray-100 text-3xl font-medium pr-10"
          >
            {/* Value "" for "all" option to easily check if a filter is active */}
            <option value="">Shortlet Type</option>
            <option value="building">Building</option>
            <option value="villa">Villa</option>
            <option value="office">Office</option>
            <option value="apartment">Apartment</option>
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
            name="location" // Good practice to add name attribute
            value={location} // Controlled component: value tied to state
            onChange={(e) => setLocation(e.target.value)} // Update state on change
            className="md:w-full w-full py-7 px-8 appearance-none bg-gray-100 rounded-full text-3xl font-medium"
          >
            {/* Value "" for "all" option */}
            <option value="">Location</option>
            <option value="chevron">Chevron</option>
            <option value="aja">Aja</option>
            <option value="lekki">Lekki</option>
            <option value="island">Island</option>
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
            name="priceRange" // Good practice to add name attribute
            value={priceRange} // Controlled component: value tied to state
            onChange={(e) => setPriceRange(e.target.value)} // Update state on change
            className="md:w-full w-full py-7 px-8 appearance-none bg-gray-100 rounded-full text-3xl font-medium"
          >
            {/* Value "" for "all" option */}
            <option value="">Price Range</option>
            {/* Ensure these values exactly match what parsePriceToNumber expects */}
            <option value="₦5M - ₦50M">₦5M - ₦50M</option>
            <option value="₦60M - ₦100M">₦60M - ₦100M</option>
            <option value="₦110M - ₦200M">₦110M - ₦200M</option>
            <option value="₦300M - ₦700M">₦300M - ₦700M</option>
            <option value="₦1B - ₦5B">₦1B - ₦5B</option>
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
          type="submit" // Important: Change to type="submit" to trigger form onSubmit
          className="md:w-full w-full bg-[#2A286B] text-3xl rounded-full text-white font-semibold py-7 px-8 hover:bg-[#534fc9] transition-all ease-in-out duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;