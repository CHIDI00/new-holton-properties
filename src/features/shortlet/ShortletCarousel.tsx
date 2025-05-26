// import { useEffect } from 'react';
// import { Carousel } from 'flowbite';
// import type { CarouselOptions, CarouselItem, CarouselInterface } from 'flowbite';
// import type { InstanceOptions } from 'flowbite';
// import { useNavigate } from 'react-router-dom';
// import slugify from 'slugify';

// interface Props {
// 	displayData: {
// 		id: number;
// 		shortletName: string;
// 		location: string;
// 		price: string;
// 		status: string;
// 		numOfBedroom: number;
// 		numOfBathroom: number;
// 		images: string[];
// 	}[];
// }

// const ShortletCarousel: React.FC<Props> = ({ displayData }) => {
// 	const navigate = useNavigate();

// 	useEffect(() => {
// 		const carouselElement = document.getElementById('carousel-shortlet');

// 		if (!carouselElement) return;

// 		const items: CarouselItem[] = displayData.map((_, index) => ({
// 			position: index,
// 			el: document.getElementById(`carousel-card-${index}`)!,
// 		}));

// 		const options: CarouselOptions = {
// 			defaultPosition: 0,
// 			interval: 4000,
// 		};

// 		const instanceOptions: InstanceOptions = {
// 			id: 'carousel-shortlet',
// 			override: true,
// 		};

// 		const carousel: CarouselInterface = new Carousel(
// 			carouselElement,
// 			items,
// 			options,
// 			instanceOptions
// 		);

// 		carousel.cycle();
// 	}, [displayData]);

// 	return (
// 		<div id="carousel-shortlet" className="relative w-full">
// 			<div className="relative h-[50rem] overflow-hidden rounded-lg">
// 				{displayData.map((shortlet, index) => (
// 					<div
// 						key={shortlet.id}
// 						id={`carousel-card-${index}`}
// 						className="hidden duration-700 ease-in-out"
// 						data-carousel-item
// 					>
// 						<div
// 							className="group w-full h-full bg-gray-100 border border-gray-300 rounded-[3rem] overflow-hidden cursor-pointer p-4"
// 							onClick={() =>
// 								navigate(
// 									`/shortlet_grid/detail/${shortlet.id}-${slugify(shortlet.shortletName)}`
// 								)
// 							}
// 						>
// 							<div className="w-full relative h-[60%] rounded-[2.5rem] overflow-hidden">
// 								<div className="w-full h-full bg-cover bg-center rounded-[2.5rem] overflow-hidden group-hover:scale-105 transition-transform duration-500 ease-in-out">
// 									{shortlet.images.map((img: string) => <img
// 										src={img}
// 										alt={shortlet.shortletName}
// 										className="object-cover w-full h-full"
// 									/>)}
// 								</div>
// 								<div className="absolute top-4 left-4 w-full flex justify-start items-start">
// 									<span
// 										className={`rounded-full md:text-[1.2rem] text-[1.3rem] text-white md:px-5 md:py-2 px-7 py-4 font-bold uppercase ${
// 											shortlet.status.toLowerCase() === 'available'
// 												? 'bg-[#2b6b28]'
// 												: 'bg-[#2A286B]'
// 										}`}
// 									>
// 										{shortlet.status}
// 									</span>
// 								</div>
// 							</div>
// 							<div className="w-full h-[40%] flex flex-col justify-between items-center z-[4] md:p-12 md:px-16 py-16 px-4">
// 								<div className="w-full">
// 									<div className="w-full flex justify-between items-center border-b-2 border-gray-400 pb-8">
// 										<p className="md:text-[1.4rem] text-[2rem] font-bold text-black flex items-center gap-4">
// 											{shortlet.location}
// 										</p>
// 										<p className="md:text-[1.4rem] text-[2rem] font-bold text-black">
// 											{shortlet.price}
// 										</p>
// 									</div>
// 									<h1 className="md:text-3xl text-4xl text-black pt-6 font-bold">
// 										{shortlet.shortletName}
// 									</h1>
// 									<div className="w-full flex justify-start gap-10">
// 										<p className="text-black md:text-[1.4rem] text-[1.8rem] pt-6 font-bold">
// 											Bedroom {shortlet.numOfBedroom}
// 										</p>
// 										<p className="text-black md:text-[1.4rem] text-[1.8rem] pt-6 font-bold">
// 											Bathroom {shortlet.numOfBathroom}
// 										</p>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default ShortletCarousel;
