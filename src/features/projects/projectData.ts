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
import { JSX } from "react";

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
	projectDescription: string;
	numberOfFloor: string;
	specialFeatures: string;
	Amenities: string;
	features?: [
		{
			id: number;
			title: string;
			icon: JSX.Element;
			desscription: string;
		}
	];
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
		numberOfFloor: "20, including two underground levels for parking.",
		specialFeatures: "Eco-friendly design, rooftop garden",
		Amenities: "Gym, pool, parking, 24/7 security",
		projectDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
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
		numberOfFloor: "20, including two underground levels for parking.",
		specialFeatures: "Eco-friendly design, rooftop garden",
		Amenities: "Gym, pool, parking, 24/7 security",
		projectDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
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
		numberOfFloor: "20, including two underground levels for parking.",
		specialFeatures: "Eco-friendly design, rooftop garden",
		Amenities: "Gym, pool, parking, 24/7 security",
		projectDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
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
		numberOfFloor: "20, including two underground levels for parking.",
		specialFeatures: "Eco-friendly design, rooftop garden",
		Amenities: "Gym, pool, parking, 24/7 security",
		projectDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
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
		numberOfFloor: "20, including two underground levels for parking.",
		specialFeatures: "Eco-friendly design, rooftop garden",
		Amenities: "Gym, pool, parking, 24/7 security",
		projectDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
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
		numberOfFloor: "20, including two underground levels for parking.",
		specialFeatures: "Eco-friendly design, rooftop garden",
		Amenities: "Gym, pool, parking, 24/7 security",
		projectDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
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
		numberOfFloor: "20, including two underground levels for parking.",
		specialFeatures: "Eco-friendly design, rooftop garden",
		Amenities: "Gym, pool, parking, 24/7 security",
		projectDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
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
		numberOfFloor: "20, including two underground levels for parking.",
		specialFeatures: "Eco-friendly design, rooftop garden",
		Amenities: "Gym, pool, parking, 24/7 security",
		projectDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
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
		numberOfFloor: "20, including two underground levels for parking.",
		specialFeatures: "Eco-friendly design, rooftop garden",
		Amenities: "Gym, pool, parking, 24/7 security",
		projectDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
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
		numberOfFloor: "20, including two underground levels for parking.",
		specialFeatures: "Eco-friendly design, rooftop garden",
		Amenities: "Gym, pool, parking, 24/7 security",
		projectDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
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
		numberOfFloor: "20, including two underground levels for parking.",
		specialFeatures: "Eco-friendly design, rooftop garden",
		Amenities: "Gym, pool, parking, 24/7 security",
		projectDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
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
		numberOfFloor: "20, including two underground levels for parking.",
		specialFeatures: "Eco-friendly design, rooftop garden",
		Amenities: "Gym, pool, parking, 24/7 security",
		projectDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
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
		numberOfFloor: "20, including two underground levels for parking.",
		specialFeatures: "Eco-friendly design, rooftop garden",
		Amenities: "Gym, pool, parking, 24/7 security",
		projectDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
];
