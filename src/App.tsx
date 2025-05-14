import { useEffect } from "react";
// import { initSmoothScroll } from "./scroll/scroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home_page from "./pages/Home_page";
import About_page from "./pages/About_page";

import AOS from "aos";
import "aos/dist/aos.css";
import Property_page from "./pages/Property_page";

function App() {
	// useEffect(() => {
	// 	initSmoothScroll();
	// }, []);

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<Home_page />} />
					<Route path="about_us" element={<About_page />} />
					<Route path="property_grid" element={<Property_page />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
