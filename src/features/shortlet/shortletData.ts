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

interface Shortlet {
	id: number;
	status: string;
	description: string;
	shortletType: string;
	numOfBedroom: number;
	numOfBathroom: number;
	cardImage: string;
	price: string;
	alt: string;
	images: string[];
	location: string;
	shortletName: string;
	shortletDescription: string;
	Amenities: string[];
	videoUrl?: string;
}

export const shortletData: Shortlet[] = [
	{
		id: 1,
		status: "Available",
		description:
			"A modern apartment building with state-of-the-art amenities and stunning views.",
		shortletType: "Apartment Building",
		numOfBedroom: 4,
		numOfBathroom: 3,
		price: "$900k - $1,2M",
		cardImage: image1,
		videoUrl: "25IqJxAY32g",
		alt: "Apartment Building",
		images: [image1, image2, image3, image4],
		location: "New York, NY",
		shortletName: "Greenview Apartments",
		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		shortletDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 2,
		status: "Taken",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		shortletType: "Office Space",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "$900k - $1,2M",
		cardImage: image2,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		shortletName: "Mixed-Use Development",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		shortletDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 3,
		status: "Available",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		shortletType: "Office Space",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "$900k - $1,2M",
		cardImage: image3,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		shortletName: "Premier Office Tower",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		shortletDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 4,
		status: "Available",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		shortletType: "Office Space",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "$900k - $1,2M",
		cardImage: image4,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		shortletName: "Urban Heights Residence",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		shortletDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 5,
		status: "Available",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		shortletType: "Office Space",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "$900k - $1,2M",
		cardImage: image5,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		shortletName: "Apartment Building",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		shortletDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 6,
		status: "Available",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		shortletType: "Office Space",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "$900k - $1,2M",
		cardImage: image6,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		shortletName: "Commercial & Residential Building",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		shortletDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 7,
		status: "Available",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		shortletType: "Office Space",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "$900k - $1,2M",
		cardImage: image7,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		shortletName: "Residential Complex",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		shortletDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 8,
		status: "Taken",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		shortletType: "Office Space",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "$900k - $1,2M",
		cardImage: image8,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		shortletName: "Eden Estate",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		shortletDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 9,
		status: "Available",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		shortletType: "Office Space",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "$900k - $1,2M",
		cardImage: image9,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		shortletName: "Office Building",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		shortletDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 10,
		status: "Available",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		shortletType: "Office Space",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "$900k - $1,2M",
		cardImage: image10,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		shortletName: "Vista at Councill Square",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		shortletDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 11,
		status: "Taken",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		shortletType: "Office Space",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "$900k - $1,2M",
		cardImage: image11,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		shortletName: "Residential Building",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		shortletDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 12,
		status: "Available",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		shortletType: "Office Space",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "$900k - $1,2M",
		cardImage: image12,

		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		shortletName: "Luxury Apartment",

		Amenities: ["Gym", "pool", "parking", "24/7 security"],
		shortletDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
	{
		id: 13,
		status: "Available",
		description:
			"A contemporary office space designed for collaboration and innovation.",
		shortletType: "Office Space",
		numOfBedroom: 4,
		numOfBathroom: 3,

		price: "$900k - $1,2M",
		cardImage: image13,
		videoUrl: "25IqJxAY32g",
		alt: "Office Space",
		images: [image1, image2, image3, image4],
		location: "San Francisco, CA",
		shortletName: "Mixed-Use Development",

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
		shortletDescription:
			"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium, totam rem aperiam. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur quae ab illoentore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloreue laudantium",
	},
];
