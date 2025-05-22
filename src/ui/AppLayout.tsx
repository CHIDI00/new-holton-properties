import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { ChevronUp } from "lucide-react";

const AppLayout: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Show button when page is scrolled down
	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="w-full flex flex-col">
			<main className="w-full h-full flex flex-col">
				<Outlet />
				<button
					type="button"
					title="Scroll to top"
					aria-label="Scroll to top"
					onClick={scrollToTop}
					className={`fixed z-[15] bottom-6 right-6 p-9 rounded-full shadow-lg bg-blue-900 text-white transition-opacity duration-300 ${
						isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
					}`}
				>
					<ChevronUp size={24} />
				</button>
			</main>
			<Footer />
		</div>
	);
};

export default AppLayout;
