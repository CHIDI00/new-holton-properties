import image1 from "../../assets/project_1.webp";
import image2 from "../../assets/project_2.webp";
import image3 from "../../assets/project_3.webp";
import image4 from "../../assets/project_4.webp";
import image5 from "../../assets/project_5.webp";
import image6 from "../../assets/project_6.webp";
import image7 from "../../assets/project_7.webp";
import image8 from "../../assets/project_8.webp";
import image9 from "../../assets/project_9.webp";
import image10 from "../../assets/project_10.webp";
import image11 from "../../assets/project_11.webp";
import image12 from "../../assets/project_12.webp";
import image13 from "../../assets/project_13.webp";

interface Property {
	id: number;
	status: string;
	description: string;
	propertyType: string;
	numOfBedroom: number;
	numOfBathroom: number;
	propertyArea: string;
	cardImage: string;
	price: string;
	alt: string;
	images: string[];
	location: string;
	propertyName: string;
	propertyDescription: string;
	Amenities: string[];
	videoUrl?: string;
}

export const propertyData: Property[] = [
	{
		id: 1,
		status: "For sale",
		description:
			"A modern apartment building with state-of-the-art amenities and stunning views.",
		propertyType: "Apartment Building",
		propertyArea: "26,346.74 Sq. Ft.",
		numOfBedroom: 4,
		numOfBathroom: 3,
		price: "₦200,000,000",
		cardImage: image1,
		videoUrl: "25IqJxAY32g",
		alt: "Apartment Building",
		images: [image1, image2, image3, image4],
		location: "New York, NY",
		propertyName: "Greenview Apartments",
		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		propertyDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 2,
		status: "For sale",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		propertyType: "Office Space",
		propertyArea: "26,346.74 Sq. Ft.",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "₦200,000,000",
		cardImage: image2,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Mixed-Use Development",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		propertyDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 3,
		status: "For sale",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		propertyType: "Office Space",
		propertyArea: "26,346.74 Sq. Ft.",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "₦200,000,000",
		cardImage: image3,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Premier Office Tower",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		propertyDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 4,
		status: "For sale",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		propertyType: "Office Space",
		propertyArea: "26,346.74 Sq. Ft.",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "₦200,000,000",
		cardImage: image4,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Urban Heights Residence",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		propertyDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 5,
		status: "For sale",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		propertyType: "Office Space",
		propertyArea: "26,346.74 Sq. Ft.",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "₦200,000,000",
		cardImage: image5,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Apartment Building",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		propertyDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 6,
		status: "For sale",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		propertyType: "Office Space",
		propertyArea: "26,346.74 Sq. Ft.",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "₦200,000,000",
		cardImage: image6,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Commercial & Residential Building",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		propertyDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 7,
		status: "For sale",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		propertyType: "Office Space",
		propertyArea: "26,346.74 Sq. Ft.",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "₦200,000,000",
		cardImage: image7,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Residential Complex",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		propertyDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 8,
		status: "For sale",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		propertyType: "Office Space",
		propertyArea: "26,346.74 Sq. Ft.",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "₦200,000,000",
		cardImage: image8,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Eden Estate",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		propertyDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 9,
		status: "For sale",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		propertyType: "Office Space",
		propertyArea: "26,346.74 Sq. Ft.",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "₦200,000,000",
		cardImage: image9,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Office Building",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		propertyDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 10,
		status: "For sale",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		propertyType: "Office Space",
		propertyArea: "26,346.74 Sq. Ft.",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "₦200,000,000",
		cardImage: image10,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Vista at Councill Square",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		propertyDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 11,
		status: "For sale",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		propertyType: "Office Space",
		propertyArea: "26,346.74 Sq. Ft.",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "₦200,000,000",
		cardImage: image11,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Residential Building",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		propertyDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 12,
		status: "For sale",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		propertyType: "Office Space",
		propertyArea: "26,346.74 Sq. Ft.",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "₦200,000,000",
		cardImage: image12,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Luxury Apartment",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		propertyDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 13,
		status: "For sale",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		propertyType: "Office Space",
		propertyArea: "26,346.74 Sq. Ft.",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "₦200,000,000",
		cardImage: image13,
		videoUrl: "25IqJxAY32g",
		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		propertyName: "Mixed-Use Development",

		Amenities: [
			"Gym",
			"pool",
			"Car park",
			"24/7 security",
			"Balcony",
			"Children Playground",
			"Jacuzi",
			"Study",
			"Wifi",
			"Roof top",
			"CCTV",
			"BQ",
		],
		propertyDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
];
