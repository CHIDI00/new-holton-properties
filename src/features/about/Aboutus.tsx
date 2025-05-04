import React from "react";
import ScrollVelocity from "../../ui/ScrollVelocity";
import about1 from "../../assets/about_1.jpg";
import { ArrowUpRight } from "lucide-react";

const Aboutus: React.FC = () => {
	return (
		<div className="w-full border-2 border-green-500">
			<div className="md:w-[75%] w-full mx-auto md:px-0 px-[2rem]   ">
				<div className="w-full flex flex-col justify-start items-start">
					<div className="w-full flex justify-between items-center md:gap-10 gap-10 md:flex-row flex-col md:py-[4rem] py-[4rem]">
						<div className="w-full md:w-[40%] flex flex-col md:justify-start md:items-start justify-center items-center md:gap-5 gap-2">
							<div
								className="md:max-w-[120px] max-w-[130px] md:py-1 md:px-5 py-4 px-7 border-[1.4px] border-[#2A286B] rounded-full text-black"
								// data-aos="flip-left"
							>
								<ScrollVelocity
									texts={["ABOUT US •"]}
									velocity={12}
									className="custom-scroll-text"
								/>
							</div>

							<h1 className="text-[3rem] text-center md:text-left leading-tight md:text-[5.5rem] font-extrabold mt-5">
								Shaping the world of things to come
							</h1>
						</div>
						<div className="w-full md:w-[50%] flex flex-col justify-start items-start md:gap-5 gap-2">
							<h4 className="text-[2rem] leading-tight md:text-[2rem] font-extrabold mb-2">
								We’d love to share more with you, please complete this form and
								our dedicated team will get back to you shortly.
							</h4>
							<p className="text-[2rem] leading-normal md:text-[1.8rem] text-gray-500 font-normal mt-5">
								In markets from renewable energy, sports and entertainment, to
								data centers and healthcare, we work to ensure the built
								environment leaves a lasting positive impact. Together, we
								strive to make your project better than you imagined possible.
							</p>

							<button className="flex justify-center items-center bg-[#ffffff] md:text-xl text-2xl rounded-full text-black font-bold px-5 pr-2 pl-8 py-2 mt-10 md:mt-0 hover:bg-[#000000] hover:text-[#fff] transition-all ease-in-out duration-300 border-[1px] border-gray-200">
								Meet The Team{" "}
								<span className="ml-4 p-4 bg-[#2A286B] text-white rounded-full">
									<ArrowUpRight />
								</span>
							</button>
						</div>
					</div>
				</div>

				<div
					className="relative w-full md:h-[60rem] h-[50rem] bg-white rounded-[2rem] bg-cover flex md:justify-end md:items-end justify-start items-center"
					style={{ backgroundImage: `url(${about1})` }}
					// data-aos="fade-right"
				>
					<div className="absolute top-0 left-0 h-24 w-[22rem] bg-inherite">
						<div className="w-full h-full rounded-ee-[2rem]  bg-white border-none"></div>
						<div
							className="absolute w-[30px] h-[30px] bottom-[-30px] left-0 rotate-90 bg-white"
							style={{
								clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
							}}
						></div>
						<div
							className="absolute w-[30px] h-[30px] right-[-30px] top-0 rotate-90 bg-white"
							style={{
								clipPath: "path('M0 0 Q0,30 30,30 L 0 30 Z')",
							}}
						></div>
					</div>

					<div className="w-full md:w-[50%] md:h-[80%] border-2 border-red-500 grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-5 justify-center items-center p-3">
						<div className="border-2 border-green-500 w-full h-full rounded-[2rem] bg-gray-100"></div>
						<div className="border-2 border-yellow-500 w-full h-full rounded-[2rem] bg-gray-100 p-5 flex flex-col justify-between items-center">
							<div className="w-full flex justify-end items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									viewBox="0 0 36 36"
									fill="none"
								>
									<g clip-path="url(#clip0_46_77)">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M10.4173 0.359934C9.26243 0.013452 8.1001 0.878262 8.1001 2.08401V35.9744H14.4001V29.6744C14.4001 28.6803 15.206 27.8744 16.2001 27.8744H19.8001C20.7942 27.8744 21.6001 28.6803 21.6001 29.6744V35.9744H27.9001V6.94401C27.9001 6.14911 27.3786 5.44834 26.6172 5.21993L10.4173 0.359934ZM14.4001 10.7744C13.903 10.7744 13.5001 11.1773 13.5001 11.6744V13.4744C13.5001 13.9714 13.903 14.3744 14.4001 14.3744H16.2001C16.6971 14.3744 17.1001 13.9714 17.1001 13.4744V11.6744C17.1001 11.1773 16.6971 10.7744 16.2001 10.7744H14.4001ZM13.5001 17.0744C13.5001 16.5774 13.903 16.1744 14.4001 16.1744H16.2001C16.6971 16.1744 17.1001 16.5774 17.1001 17.0744V18.8744C17.1001 19.3714 16.6971 19.7744 16.2001 19.7744H14.4001C13.903 19.7744 13.5001 19.3714 13.5001 18.8744V17.0744ZM14.4001 21.5744C13.903 21.5744 13.5001 21.9774 13.5001 22.4744V24.2744C13.5001 24.7714 13.903 25.1744 14.4001 25.1744H16.2001C16.6971 25.1744 17.1001 24.7714 17.1001 24.2744V22.4744C17.1001 21.9774 16.6971 21.5744 16.2001 21.5744H14.4001ZM18.9001 11.6744C18.9001 11.1773 19.3031 10.7744 19.8001 10.7744H21.6001C22.0971 10.7744 22.5001 11.1773 22.5001 11.6744V13.4744C22.5001 13.9714 22.0971 14.3744 21.6001 14.3744H19.8001C19.3031 14.3744 18.9001 13.9714 18.9001 13.4744V11.6744ZM19.8001 16.1744C19.3031 16.1744 18.9001 16.5774 18.9001 17.0744V18.8744C18.9001 19.3714 19.3031 19.7744 19.8001 19.7744H21.6001C22.0971 19.7744 22.5001 19.3714 22.5001 18.8744V17.0744C22.5001 16.5774 22.0971 16.1744 21.6001 16.1744H19.8001ZM18.9001 22.4744C18.9001 21.9774 19.3031 21.5744 19.8001 21.5744H21.6001C22.0971 21.5744 22.5001 21.9774 22.5001 22.4744V24.2744C22.5001 24.7714 22.0971 25.1744 21.6001 25.1744H19.8001C19.3031 25.1744 18.9001 24.7714 18.9001 24.2744V22.4744Z"
											fill="black"
										></path>
										<path
											opacity="0.2"
											d="M6.3 35.9744V5.37439H3.6C2.6059 5.37439 1.8 6.18029 1.8 7.17439V34.1744H0.9C0.402948 34.1744 0 34.5774 0 35.0744C0 35.5714 0.402948 35.9744 0.9 35.9744H6.3Z"
											fill="black"
										></path>
										<path
											opacity="0.2"
											d="M35.1002 35.9744H29.7002V12.1807L33.2932 14.2338C33.8541 14.5544 34.2002 15.1507 34.2002 15.7968V34.1744H35.1002C35.5972 34.1744 36.0002 34.5774 36.0002 35.0744C36.0002 35.5714 35.5972 35.9744 35.1002 35.9744Z"
											fill="black"
										></path>
										<path
											d="M19.8002 35.9743V29.6743H16.2002V35.9743H19.8002Z"
											fill="black"
										></path>
									</g>
									<defs>
										<clipPath id="clip0_46_77">
											<rect width="36" height="36" fill="white"></rect>
										</clipPath>
									</defs>
								</svg>
							</div>
							<div className="w-full">
								<h3>45</h3>
								<p>Countries</p>
							</div>
						</div>
						<div className="border-2 border-blue-500 w-full h-full rounded-[2rem] bg-gray-100 p-5 flex flex-col justify-between items-center">
							<div className="w-full flex justify-end items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									viewBox="0 0 36 36"
									fill="none"
								>
									<g clip-path="url(#clip0_46_77)">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M10.4173 0.359934C9.26243 0.013452 8.1001 0.878262 8.1001 2.08401V35.9744H14.4001V29.6744C14.4001 28.6803 15.206 27.8744 16.2001 27.8744H19.8001C20.7942 27.8744 21.6001 28.6803 21.6001 29.6744V35.9744H27.9001V6.94401C27.9001 6.14911 27.3786 5.44834 26.6172 5.21993L10.4173 0.359934ZM14.4001 10.7744C13.903 10.7744 13.5001 11.1773 13.5001 11.6744V13.4744C13.5001 13.9714 13.903 14.3744 14.4001 14.3744H16.2001C16.6971 14.3744 17.1001 13.9714 17.1001 13.4744V11.6744C17.1001 11.1773 16.6971 10.7744 16.2001 10.7744H14.4001ZM13.5001 17.0744C13.5001 16.5774 13.903 16.1744 14.4001 16.1744H16.2001C16.6971 16.1744 17.1001 16.5774 17.1001 17.0744V18.8744C17.1001 19.3714 16.6971 19.7744 16.2001 19.7744H14.4001C13.903 19.7744 13.5001 19.3714 13.5001 18.8744V17.0744ZM14.4001 21.5744C13.903 21.5744 13.5001 21.9774 13.5001 22.4744V24.2744C13.5001 24.7714 13.903 25.1744 14.4001 25.1744H16.2001C16.6971 25.1744 17.1001 24.7714 17.1001 24.2744V22.4744C17.1001 21.9774 16.6971 21.5744 16.2001 21.5744H14.4001ZM18.9001 11.6744C18.9001 11.1773 19.3031 10.7744 19.8001 10.7744H21.6001C22.0971 10.7744 22.5001 11.1773 22.5001 11.6744V13.4744C22.5001 13.9714 22.0971 14.3744 21.6001 14.3744H19.8001C19.3031 14.3744 18.9001 13.9714 18.9001 13.4744V11.6744ZM19.8001 16.1744C19.3031 16.1744 18.9001 16.5774 18.9001 17.0744V18.8744C18.9001 19.3714 19.3031 19.7744 19.8001 19.7744H21.6001C22.0971 19.7744 22.5001 19.3714 22.5001 18.8744V17.0744C22.5001 16.5774 22.0971 16.1744 21.6001 16.1744H19.8001ZM18.9001 22.4744C18.9001 21.9774 19.3031 21.5744 19.8001 21.5744H21.6001C22.0971 21.5744 22.5001 21.9774 22.5001 22.4744V24.2744C22.5001 24.7714 22.0971 25.1744 21.6001 25.1744H19.8001C19.3031 25.1744 18.9001 24.7714 18.9001 24.2744V22.4744Z"
											fill="black"
										></path>
										<path
											opacity="0.2"
											d="M6.3 35.9744V5.37439H3.6C2.6059 5.37439 1.8 6.18029 1.8 7.17439V34.1744H0.9C0.402948 34.1744 0 34.5774 0 35.0744C0 35.5714 0.402948 35.9744 0.9 35.9744H6.3Z"
											fill="black"
										></path>
										<path
											opacity="0.2"
											d="M35.1002 35.9744H29.7002V12.1807L33.2932 14.2338C33.8541 14.5544 34.2002 15.1507 34.2002 15.7968V34.1744H35.1002C35.5972 34.1744 36.0002 34.5774 36.0002 35.0744C36.0002 35.5714 35.5972 35.9744 35.1002 35.9744Z"
											fill="black"
										></path>
										<path
											d="M19.8002 35.9743V29.6743H16.2002V35.9743H19.8002Z"
											fill="black"
										></path>
									</g>
									<defs>
										<clipPath id="clip0_46_77">
											<rect width="36" height="36" fill="white"></rect>
										</clipPath>
									</defs>
								</svg>
							</div>
							<div className="w-full">
								<h3>45</h3>
								<p>Countries</p>
							</div>
						</div>
						<div className="border-2 border-red-200 w-full h-full rounded-[2rem] bg-gray-100 p-5 flex flex-col justify-between items-center">
							<div className="w-full flex justify-end items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									viewBox="0 0 36 36"
									fill="none"
								>
									<g clip-path="url(#clip0_46_77)">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M10.4173 0.359934C9.26243 0.013452 8.1001 0.878262 8.1001 2.08401V35.9744H14.4001V29.6744C14.4001 28.6803 15.206 27.8744 16.2001 27.8744H19.8001C20.7942 27.8744 21.6001 28.6803 21.6001 29.6744V35.9744H27.9001V6.94401C27.9001 6.14911 27.3786 5.44834 26.6172 5.21993L10.4173 0.359934ZM14.4001 10.7744C13.903 10.7744 13.5001 11.1773 13.5001 11.6744V13.4744C13.5001 13.9714 13.903 14.3744 14.4001 14.3744H16.2001C16.6971 14.3744 17.1001 13.9714 17.1001 13.4744V11.6744C17.1001 11.1773 16.6971 10.7744 16.2001 10.7744H14.4001ZM13.5001 17.0744C13.5001 16.5774 13.903 16.1744 14.4001 16.1744H16.2001C16.6971 16.1744 17.1001 16.5774 17.1001 17.0744V18.8744C17.1001 19.3714 16.6971 19.7744 16.2001 19.7744H14.4001C13.903 19.7744 13.5001 19.3714 13.5001 18.8744V17.0744ZM14.4001 21.5744C13.903 21.5744 13.5001 21.9774 13.5001 22.4744V24.2744C13.5001 24.7714 13.903 25.1744 14.4001 25.1744H16.2001C16.6971 25.1744 17.1001 24.7714 17.1001 24.2744V22.4744C17.1001 21.9774 16.6971 21.5744 16.2001 21.5744H14.4001ZM18.9001 11.6744C18.9001 11.1773 19.3031 10.7744 19.8001 10.7744H21.6001C22.0971 10.7744 22.5001 11.1773 22.5001 11.6744V13.4744C22.5001 13.9714 22.0971 14.3744 21.6001 14.3744H19.8001C19.3031 14.3744 18.9001 13.9714 18.9001 13.4744V11.6744ZM19.8001 16.1744C19.3031 16.1744 18.9001 16.5774 18.9001 17.0744V18.8744C18.9001 19.3714 19.3031 19.7744 19.8001 19.7744H21.6001C22.0971 19.7744 22.5001 19.3714 22.5001 18.8744V17.0744C22.5001 16.5774 22.0971 16.1744 21.6001 16.1744H19.8001ZM18.9001 22.4744C18.9001 21.9774 19.3031 21.5744 19.8001 21.5744H21.6001C22.0971 21.5744 22.5001 21.9774 22.5001 22.4744V24.2744C22.5001 24.7714 22.0971 25.1744 21.6001 25.1744H19.8001C19.3031 25.1744 18.9001 24.7714 18.9001 24.2744V22.4744Z"
											fill="black"
										></path>
										<path
											opacity="0.2"
											d="M6.3 35.9744V5.37439H3.6C2.6059 5.37439 1.8 6.18029 1.8 7.17439V34.1744H0.9C0.402948 34.1744 0 34.5774 0 35.0744C0 35.5714 0.402948 35.9744 0.9 35.9744H6.3Z"
											fill="black"
										></path>
										<path
											opacity="0.2"
											d="M35.1002 35.9744H29.7002V12.1807L33.2932 14.2338C33.8541 14.5544 34.2002 15.1507 34.2002 15.7968V34.1744H35.1002C35.5972 34.1744 36.0002 34.5774 36.0002 35.0744C36.0002 35.5714 35.5972 35.9744 35.1002 35.9744Z"
											fill="black"
										></path>
										<path
											d="M19.8002 35.9743V29.6743H16.2002V35.9743H19.8002Z"
											fill="black"
										></path>
									</g>
									<defs>
										<clipPath id="clip0_46_77">
											<rect width="36" height="36" fill="white"></rect>
										</clipPath>
									</defs>
								</svg>
							</div>
							<div className="w-full">
								<h3>45</h3>
								<p>Countries</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Aboutus;
