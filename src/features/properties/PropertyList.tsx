import React from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/helper";

interface Property {
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

interface PropertyListProps {
  limit: number;
  currentPage: number;
  propertyData: Property[];
}

const PropertyList: React.FC<PropertyListProps> = ({
  limit,
  currentPage,
  propertyData,
}) => {
  const navigate = useNavigate();

  // interface Slugify {
  // 	(text: string): string;
  // }

  // const slugify: Slugify = (text: string): string =>
  // 	text
  // 		.toLowerCase()
  // 		.replace(/ /g, "-")
  // 		.replace(/[^\w-]+/g, "");

  // Calculate the correct slice of shortlets based on pagination
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const displayData = limit
    ? propertyData.slice(startIndex, endIndex)
    : propertyData;

  return (
    <div className="w-full py-12">
      <div className="container lg:px-[11rem] px-[2rem] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14">
        {displayData?.map((property) => (
          <div
            className="group relative w-full md:h-[50rem] h-[50rem] bg-red-200 rounded-[3rem] overflow-hidden cursor-pointer"
            data-aos="fade-up"
            onClick={() => navigate(`/property_grid/detail/${property.slug}`)}
          >
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-[3rem] group-hover:scale-105 transition-transform duration-500 ease-in-out"
              style={{
                backgroundImage: `url(https://holtonrealty.com/admin/public${property.image_paths[0]})`,
              }}
            ></div>
            <div className="absolute flex flex-col justify-between items-center z-[4] bg-gradient-to-b from-[#00000000] md:to-[#000000d2] to-[#000000e8] w-full h-full md:p-12 md:px-16 p-16">
              <div className="w-full flex justify-start items-start">
                <span className="bg-blue-700 rounded-full md:text-[1.2rem] text-2xl text-white md:px-5 md:py-2 px-7 py-4 font-bold uppercase">
                  For Sale
                </span>
              </div>

              <div className="w-full">
                <div className="w-full flex justify-between items-center border-b-2 border-gray-400 pb-8">
                  <p className="md:text-[1.4rem] text-[2rem] font-bold text-white flex items-center gap-4  ">
                    <span className="text-blue-700">
                      <MapPin />
                    </span>
                    {property.location}
                  </p>
                  <p className="md:text-[1.4rem] text-[2rem] font-bold text-white">
                    {formatCurrency(property.price)}
                  </p>
                </div>
                <h1 className="md:text-3xl text-4xl text-white pt-6 font-bold">
                  {property.name}
                </h1>
                <div className="w-full flex justify-start items-start gap-10">
                  <p className="text-white md:text-[1.4rem] text-[1.8rem] pt-6 font-bold">
                    Bedroom {property.bedrooms}
                  </p>
                  <p className="text-white md:text-[1.4rem] text-[1.8rem] pt-6 font-bold">
                    Bathroom {property.bathrooms}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
