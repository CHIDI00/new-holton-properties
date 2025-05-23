import React from "react";
import ContactHeader from "./ContactHeader";
import { ArrowUpRight, Mail, MapPin, PhoneCall } from "lucide-react";

const ContactContent: React.FC = () => {
	return (
		<div>
			<ContactHeader />

			<div className="container mx-auto flex flex-col justify-center items-center bg-white py-[5rem] md:px-[11rem] px-[2rem]">
				<div className="grid grid-cols-1 md:grid-cols-3 w-full gap-16 justify-center items-center">
					<div className="w-full p-16 flex flex-col justify-between items-start rounded-[3rem] border-[1px] border-gray-200 gap-12 ">
						<span>
							<Mail />
						</span>

						<div className="mt-7">
							<p className="text-5xl mb-4 font-bold">Support email</p>
							<p className="text-3xl font-medium">holtonrealty@gmail.com</p>
						</div>

						<button className="w-full h-full bg-blue-800 md:text-2xl text-3xl rounded-full text-white font-semibold px-10 md:py-5 py-7   hover:bg-[#534fc9] transition-all ease-in-out duration-300">
							Email Us
						</button>
					</div>
					<div className="w-full p-16 flex flex-col justify-between items-start rounded-[3rem] border-[1px] border-gray-200 gap-12 ">
						<span>
							<PhoneCall />
						</span>

						<div className="mt-7">
							<p className="text-5xl mb-4 font-bold">Phone number</p>
							<p className="text-3xl font-medium">(090) 782-388-24</p>
						</div>

						<button className="w-full h-full bg-blue-800 md:text-2xl text-3xl rounded-full text-white font-semibold px-10 md:py-5 py-7   hover:bg-[#534fc9] transition-all ease-in-out duration-300">
							Call Us
						</button>
					</div>
					<div className="w-full p-16 flex flex-col justify-between items-start rounded-[3rem] border-[1px] border-gray-200 gap-12 ">
						<span>
							<MapPin />
						</span>

						<div className="mt-7">
							<p className="text-5xl mb-4 font-bold">Location</p>
							<p className="text-3xl font-medium">
								401 Broadway, 24th Floor, Orchard View, London
							</p>
						</div>

						<button className="w-full h-full bg-blue-800 md:text-2xl text-3xl rounded-full text-white font-semibold px-10 md:py-5 py-7   hover:bg-[#534fc9] transition-all ease-in-out duration-300">
							Visit Us
						</button>
					</div>
				</div>

				<div className="w-full flex md:flex-row flex-col-reverse justify-center items-start my-10 mt-32 gap-16">
					<div className="md:w-[50%] w-full md:h-[700px] h-full rounded-[3rem] border-[1px] border-gray-300 my-10 md:p-24 p-7 py-10">
						<p className="md:text-6xl text-5xl md:text-left text-center font-bold leading-tight ">
							Leave a message
						</p>
						<form action="submit" className="w-full z-10 py-7">
							<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 ">
								<input
									type="text"
									placeholder="Your Name *"
									className="w-full md:px-8 md:py-7 md:text-2xl px-9 py-6 text-4xl border-none bg-gray-100 rounded-full font-medium mb-5 mr-8"
								/>

								<input
									type="text"
									placeholder="Phone number *"
									className="w-full md:px-8 md:py-7 md:text-2xl px-9 py-6 text-4xl border-none bg-gray-100 rounded-full font-medium mb-5 mr-8"
								/>
							</div>
							<input
								type="email"
								placeholder="Email *"
								className="w-full md:px-8 md:py-7 md:text-2xl px-9 py-6 text-4xl border-none bg-gray-100 rounded-full font-medium mb-5 mr-8"
							/>
							<textarea
								placeholder="Message *"
								className="w-full h-[25rem] md:px-8 md:py-7 md:text-2xl text-gray-500 px-9 py-6 text-4xl border-none bg-gray-100 rounded-[2rem] font-medium mb-5 mr-8"
							></textarea>
							<div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 py-5 mx-auto">
								<button className="flex justify-center items-center bg-white border-[1px] border-gray-200 md:text-xl text-4xl rounded-full text-black font-bold px-5 pr-2 pl-8 py-2 mt-10 md:mt-0 hover:bg-[#000] hover:text-[#fff] transition-all ease-in-out duration-300">
									Submit{" "}
									<span className="ml-4 p-4 bg-blue-800 text-white rounded-full">
										<ArrowUpRight />
									</span>
								</button>
							</div>
						</form>
					</div>
					<div className="md:w-[50%] w-full rounded-[3rem]">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.49557793352!2d3.4503737710910456!3d6.450240779097897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf452da3bd44b%3A0x47331fb41adc9d28!2sLekki%20Phase%201%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1747989531547!5m2!1sen!2sng"
							width="100%"
							className="aspect-video w-full md:h-[700px] h-[500px] mx-auto overflow-hidden my-10"
							style={{ border: 0, borderRadius: "3rem" }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactContent;
