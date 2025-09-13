import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
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
  const [selectedLocation, setSelectedLocation] = useState(
    currentFilters.location || ""
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState(
    currentFilters.priceRange || ""
  );

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
    <div className="container mx-auto lg:px-[11rem] px-6">
      <form
        onSubmit={handleSubmit}
        className="grid items-center justify-center w-full grid-cols-2 gap-10 md:grid-cols-4 md:my-10"
      >
        <Select
          defaultValue="All Types"
          onValueChange={(value) => setSelectedType(value)}
        >
          <SelectTrigger className="text-black bg-gray-100 border-slate-600">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="text-black bg-gray-100 border-slate-700">
            {typeOptions.map((option) => (
              <SelectItem value={option.value}>{option.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          defaultValue="Location"
          onValueChange={(value) => setSelectedLocation(value)}
        >
          <SelectTrigger className="text-black bg-gray-100 border-slate-600">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-gray-100 border-slate-700">
            {locationOptions.map((option) => (
              <SelectItem value={option.value}>{option.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          defaultValue="Select Price Range"
          onValueChange={(value) => setSelectedPriceRange(value)}
        >
          <SelectTrigger className="text-black bg-gray-100 border-slate-600">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-gray-100 border-slate-700">
            {priceRangeOptions.map((option) => (
              <SelectItem value={option.value}>{option.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>

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
