import image1 from "../../assets/project_1.jpg";
import image2 from "../../assets/project_2.jpg";
import image3 from "../../assets/project_3.jpg";
import image4 from "../../assets/project_4.jpg";
import image5 from "../../assets/project_5.jpg";
import image6 from "../../assets/project_6.jpg";
import image7 from "../../assets/project_7.jpg";
import image8 from "../../assets/project_8.jpg";
import image9 from "../../assets/project_9.jpg";
import image10 from "../../assets/project_10.jpg";
import image11 from "../../assets/project_11.jpg";
import image12 from "../../assets/project_12.jpg";
import image13 from "../../assets/project_13.jpg";

interface Project {
	id: number;
	status: string;
	description: string;
	projectType: string;
	projectArea: string;
	startDate: string;
	cardImage: string;
	price: string;
	alt: string;
	images: string[];
	location: string;
	propertyName: string;
}

export const projectData: Project[] = [
	{
		id: 1,
		status: "Completed",
		description:
			"A modern apartment building with state-of-the-art amenities and stunning views.",
		projectType: "Apartment Building",
		projectArea: "26,346.74 Sq. Ft.",
		startDate: "May 21, 2021",
		price: "$900k - $1,2M",
		cardImage: image1,
		alt: "Apartment Building",
		images: [image1, image2, image3, image4],
		location: "New York, NY",
		propertyName: "Greenview Apartments",
	},
	{
		id: 2,
		status: "Under construction",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		projectType: "Office Space",
		projectArea: "26,346.74 Sq. Ft.",
		startDate: "May 21, 2021",
		price: "$900k - $1,2M",
		cardImage: image2,
		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Mixed-Use Development",
	},
	{
		id: 2,
		status: "Completed",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		projectType: "Office Space",
		projectArea: "26,346.74 Sq. Ft.",
		startDate: "May 21, 2021",
		price: "$900k - $1,2M",
		cardImage: image3,
		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Premier Office Tower",
	},
	{
		id: 2,
		status: "Completed",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		projectType: "Office Space",
		projectArea: "26,346.74 Sq. Ft.",
		startDate: "May 21, 2021",
		price: "$900k - $1,2M",
		cardImage: image4,
		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Urban Heights Residence",
	},
	{
		id: 2,
		status: "Completed",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		projectType: "Office Space",
		projectArea: "26,346.74 Sq. Ft.",
		startDate: "May 21, 2021",
		price: "$900k - $1,2M",
		cardImage: image5,
		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Apartment Building",
	},
	{
		id: 2,
		status: "Completed",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		projectType: "Office Space",
		projectArea: "26,346.74 Sq. Ft.",
		startDate: "May 21, 2021",
		price: "$900k - $1,2M",
		cardImage: image6,
		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Commercial & Residential Building",
	},
	{
		id: 2,
		status: "Completed",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		projectType: "Office Space",
		projectArea: "26,346.74 Sq. Ft.",
		startDate: "May 21, 2021",
		price: "$900k - $1,2M",
		cardImage: image7,
		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Residential Complex",
	},
	{
		id: 2,
		status: "Under construction",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		projectType: "Office Space",
		projectArea: "26,346.74 Sq. Ft.",
		startDate: "May 21, 2021",
		price: "$900k - $1,2M",
		cardImage: image8,
		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Eden Estate",
	},
	{
		id: 2,
		status: "Completed",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		projectType: "Office Space",
		projectArea: "26,346.74 Sq. Ft.",
		startDate: "May 21, 2021",
		price: "$900k - $1,2M",
		cardImage: image9,
		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Office Building",
	},
	{
		id: 2,
		status: "Under construction",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		projectType: "Office Space",
		projectArea: "26,346.74 Sq. Ft.",
		startDate: "May 21, 2021",
		price: "$900k - $1,2M",
		cardImage: image10,
		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Vista at Councill Square",
	},
	{
		id: 2,
		status: "Completed",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		projectType: "Office Space",
		projectArea: "26,346.74 Sq. Ft.",
		startDate: "May 21, 2021",
		price: "$900k - $1,2M",
		cardImage: image11,
		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Residential Building",
	},
	{
		id: 2,
		status: "Completed",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		projectType: "Office Space",
		projectArea: "26,346.74 Sq. Ft.",
		startDate: "May 21, 2021",
		price: "$900k - $1,2M",
		cardImage: image12,
		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Luxury Apartment",
	},
	{
		id: 2,
		status: "Under construction",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		projectType: "Office Space",
		projectArea: "26,346.74 Sq. Ft.",
		startDate: "May 21, 2021",
		price: "$900k - $1,2M",
		cardImage: image13,
		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Mixed-Use Development",
	},
];
