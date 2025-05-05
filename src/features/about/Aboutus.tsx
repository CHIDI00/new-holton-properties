import React from "react";
import ScrollVelocity from "../../ui/ScrollVelocity";
import about1 from "../../assets/about_1.jpg";
import { ArrowUpRight } from "lucide-react";
import CountUp from "../../ui/CountUp";

const Aboutus: React.FC = () => {
	return (
		<div className="w-full">
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
					className="relative w-full md:h-[60rem] bg-white rounded-[2rem] bg-cover flex md:justify-end md:items-end justify-start items-center"
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

					<div className="w-full md:w-[50%] md:h-[80%] grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-5 justify-center items-center p-3 mt-[7rem] md:mt-0">
						<div className="w-full h-full rounded-[2rem]"></div>

						<div className="w-full h-full rounded-[2rem] bg-gray-50 p-10 flex flex-col justify-between items-center">
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
								<h3 className="md:text-[7rem] text-[5rem] font-bold flex justify-start items-start leading-none">
									<CountUp
										from={0}
										to={40}
										separator=","
										direction="up"
										duration={1}
										className="count-up-text"
									/>{" "}
									<span className="text-[4rem] text-blue-700 mt-3 font-bold">
										+
									</span>
								</h3>
								<p className="md:text-[1.5rem] text-[2rem] text-gray-500">
									projects in development
								</p>
							</div>
						</div>
						<div className="w-full h-full rounded-[2rem] bg-gray-50 p-10 flex flex-col justify-between items-center">
							<div className="w-full flex justify-end items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									viewBox="0 0 36 36"
									fill="none"
								>
									<g clip-path="url(#clip0_46_113)">
										<path
											opacity="0.2"
											d="M1.6026 6.73457C1.91971 7.98824 2.57017 9.13434 3.4843 10.0484L4.32123 10.8746L10.8859 4.31034L10.049 3.48409C9.1342 2.57003 7.98873 1.91964 6.73499 1.60253L0.438156 0.0106557C0.317921 -0.0195787 0.190656 0.0155776 0.102765 0.102765C0.0155776 0.190656 -0.0195787 0.317921 0.0106557 0.438156L1.6026 6.73457Z"
											fill="black"
										></path>
										<path
											opacity="0.2"
											d="M9.01656 15.5095L15.5807 8.94587L12.3868 5.79236L5.82227 12.3565L9.01656 15.5095Z"
											fill="black"
										></path>
										<path
											opacity="0.2"
											d="M20.4873 27.0529L27.0503 20.4898L30.9843 24.4238L24.4213 30.9868L20.4873 27.0529Z"
											fill="black"
										></path>
										<path
											opacity="0.2"
											d="M32.4826 25.9163L25.918 32.4804L28.0784 34.6409C28.9553 35.517 30.1211 36.0001 31.3608 36.0001C32.6005 36.0001 33.7663 35.517 34.6432 34.6409C36.4525 32.8311 36.4525 29.8864 34.6432 28.0766L32.4826 25.9163Z"
											fill="black"
										></path>
										<path
											d="M16.239 19.3281C16.6509 18.9162 17.3187 18.9162 17.7306 19.3281L21.3636 22.9609L22.9624 21.3622L20.8886 19.2886C20.4767 18.8768 20.4767 18.209 20.8886 17.7971C21.3005 17.3853 21.9684 17.3851 22.3803 17.7971L24.4541 19.8707L26.081 18.2438L22.448 14.6109C22.036 14.1991 22.036 13.5313 22.448 13.1194C22.8599 12.7076 23.5277 12.7074 23.9396 13.1194L27.5726 16.7523L29.1997 15.1254L27.1259 13.0518C26.7139 12.64 26.7139 11.9722 27.1259 11.5603C27.5378 11.1485 28.2056 11.1483 28.6175 11.5603L30.6913 13.6339L32.3182 12.007L28.6852 8.37408C28.2732 7.96226 28.2732 7.29443 28.6852 6.88254C29.0971 6.47065 29.765 6.47065 30.1768 6.88254L33.8098 10.5154L35.3019 9.02109C35.7521 8.57095 35.9999 7.97238 35.9999 7.33577C35.9999 6.69916 35.7519 6.10073 35.3019 5.65052L30.349 0.698133C29.8988 0.247922 29.3003 0 28.6637 0C28.0271 0 27.4285 0.247852 26.9783 0.698063L0.698063 26.9789C0.247922 27.429 0 28.0275 0 28.6641C0 29.3007 0.247922 29.8991 0.698063 30.3493L5.65102 35.3019C6.10116 35.752 6.69966 36 7.33634 36C7.97302 36 8.57152 35.7521 9.02166 35.3019L10.5161 33.8077L8.44235 31.7341C8.03046 31.3223 8.03046 30.6545 8.44235 30.2426C8.85424 29.8308 9.52207 29.8308 9.93396 30.2426L12.0077 32.3162L13.6346 30.6893L10.0016 27.0565C9.58971 26.6447 9.58971 25.9769 10.0016 25.565C10.4135 25.1532 11.0813 25.1532 11.4932 25.565L15.1263 29.1978L16.7533 27.5709L14.6795 25.4973C14.2676 25.0855 14.2676 24.4177 14.6795 24.0057C15.0915 23.5939 15.7593 23.5938 16.1712 24.0057L18.245 26.0793L19.8719 24.4524L16.2389 20.8196C15.827 20.4078 15.827 19.74 16.239 19.3281Z"
											fill="black"
										></path>
									</g>
									<defs>
										<clipPath id="clip0_46_113">
											<rect width="36" height="36" fill="white"></rect>
										</clipPath>
									</defs>
								</svg>
							</div>
							<div className="w-full">
								<h3 className="md:text-[7rem] text-[5rem] font-bold flex justify-start items-start leading-none">
									<CountUp
										from={0}
										to={18}
										separator=","
										direction="up"
										duration={1}
										className="count-up-text"
									/>
									m{" "}
									<span className="text-[4rem] text-blue-700 mt-3 font-bold">
										+
									</span>
								</h3>
								<p className="md:text-[1.5rem] text-[2rem] text-gray-500">
									square feet of property
								</p>
							</div>
						</div>
						<div className="w-full h-full rounded-[2rem] bg-gray-50 p-10 flex flex-col justify-between items-center">
							<div className="w-full flex justify-end items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									viewBox="0 0 36 36"
									fill="none"
								>
									<g clip-path="url(#clip0_46_124)">
										<path
											d="M18.0002 9.20642C13.1514 9.20642 9.20654 13.1512 9.20654 18.0001C9.20654 22.8489 13.1514 26.7937 18.0002 26.7937C22.849 26.7937 26.7938 22.8489 26.7938 18.0001C26.7938 13.1512 22.849 9.20642 18.0002 9.20642ZM16.7601 22.1005L13.36 18.7003L14.8515 17.2088L16.7601 19.1174L21.2321 14.6455L22.7236 16.1371L16.7601 22.1005Z"
											fill="black"
										></path>
										<path
											opacity="0.2"
											d="M36 20.9109V15.0891L32.4044 14.0447C32.0755 12.8476 31.5981 11.6988 30.9795 10.6163L32.7862 7.33043L28.6695 3.21377L25.3837 5.02045C24.3012 4.40191 23.1525 3.92456 21.9552 3.59557L20.9109 0H15.0891L14.0446 3.59557C12.8474 3.92449 11.6987 4.40191 10.6161 5.02045L7.33036 3.21377L3.2137 7.33043L5.02031 10.6163C4.40177 11.6988 3.92435 12.8476 3.59543 14.0447L0 15.0891V20.9109L3.59557 21.9553C3.92449 23.1524 4.40191 24.3012 5.02045 25.3837L3.21384 28.6696L7.3305 32.7862L10.6163 30.9795C11.6988 31.5981 12.8475 32.0754 14.0448 32.4044L15.0891 36H20.9109L21.9554 32.4044C23.1526 32.0755 24.3013 31.5981 25.3839 30.9795L28.6696 32.7862L32.7863 28.6696L30.9797 25.3837C31.5982 24.3012 32.0756 23.1524 32.4046 21.9553L36 20.9109ZM18 28.903C11.9881 28.903 7.09699 24.0119 7.09699 18C7.09699 11.9881 11.9881 7.09699 18 7.09699C24.0119 7.09699 28.903 11.9881 28.903 18C28.903 24.0119 24.0119 28.903 18 28.903Z"
											fill="black"
										></path>
									</g>
									<defs>
										<clipPath id="clip0_46_124">
											<rect width="36" height="36" fill="white"></rect>
										</clipPath>
									</defs>
								</svg>
							</div>
							<div className="w-full">
								<h3 className="md:text-[7rem] text-[5rem] font-bold flex justify-start items-start leading-none">
									<CountUp
										from={0}
										to={2.5}
										separator=","
										direction="up"
										duration={1}
										className="count-up-text"
									/>
									b{" "}
									<span className="text-[4rem] text-blue-700 mt-3 font-bold">
										+
									</span>
								</h3>
								<p className="md:text-[1.5rem] text-[2rem] text-gray-500">
									total projects cost
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Aboutus;
