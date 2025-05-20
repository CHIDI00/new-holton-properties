import React from "react";
import ScrollVelocity from "../../ui/ScrollVelocity";
import team1 from "../../assets/teams/team-1.webp";
import team2 from "../../assets/teams/team-2.webp";
import team3 from "../../assets/teams/team-3.webp";
import team4 from "../../assets/teams/team-4.webp";
import team5 from "../../assets/teams/team-5.webp";
import team6 from "../../assets/teams/team-6.webp";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";

// type TeamType = {
// 	id: number;
// 	name: string;
// 	position: string;
// 	image: string;
// 	alt: string;
// };

const teamData = [
	{
		id: 1,
		name: "Dennis Daniel",
		position: "Founder & CEO",
		image: team1,
		alt: "team-1",
	},
	{
		id: 2,
		name: "John Doe",
		position: "Co-Founder",
		image: team2,
		alt: "team-2",
	},
	{
		id: 3,
		name: "Jane Smith",
		position: "CTO",
		image: team3,
		alt: "team-3",
	},
	{
		id: 4,
		name: "Emily Johnson",
		position: "CFO",
		image: team4,
		alt: "team-4",
	},
	{
		id: 5,
		name: "Michael Brown",
		position: "COO",
		image: team5,
		alt: "team-5",
	},
	{
		id: 6,
		name: "Sarah Davis",
		position: "CMO",
		image: team6,
		alt: "team-6",
	},
];

const TheTeam: React.FC = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center md:pb-48 pb-28 bg-[#fbfbfb]">
			<div className="container mx-auto">
				<div className="w-full flex justify-center items-center">
					<div
						className="md:max-w-[120px] max-w-[130px] md:py-1 md:px-5 py-4 px-7 border-[1.4px] border-[#2A286B] rounded-full"
						data-aos="flip-left"
					>
						<ScrollVelocity
							texts={[`MEET THE TEAM •`]}
							velocity={12}
							className="custom-scroll-text"
						/>
					</div>
				</div>

				<div className="py-16 mx-auto" data-aos="fade-up">
					<h1 className="md:text-[7rem] text-[4rem] text-center leading-none">
						Global executive <br /> leadership
					</h1>
				</div>

				<div className="mx-auto md:w-[80%] w-full flex justify-center items-center">
					<InfiniteMovingCards
						items={teamData}
						direction="right"
						speed="slow"
					/>
				</div>
			</div>
		</div>
	);
};

export default TheTeam;
