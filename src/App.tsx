import { useEffect } from "react";
// import { initSmoothScroll } from "./scroll/scroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home_page from "./pages/Home_page";
import About_page from "./pages/About_page";
import Property_page from "./pages/Property_page";
import Contact_page from "./pages/Contact_page";
import Projects_page from "./pages/Projects_page";

import ProjectDetail from "./features/projects/ProjectDetail";
import ScrollToTop from "./ui/ScrollToTop";
import Shortlet_page from "./pages/Shortlet_page";
import PropertyDetail from "./features/properties/PropertyDetail";
import ShortletDetail from "./features/shortlet/ShortletDetail";

import AOS from "aos";
import "aos/dist/aos.css";

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
			<ScrollToTop />
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<Home_page />} />
					<Route path="about_us" element={<About_page />} />
					<Route path="property_grid" element={<Property_page />} />
					<Route
						path="property_grid/detail/:propertySlug"
						element={<PropertyDetail />}
					/>
					<Route path="shortlet_grid" element={<Shortlet_page />} />
					<Route
						path="shortlet_grid/detail/:shortletSlug"
						element={<ShortletDetail />}
					/>
					<Route path="project_grid" element={<Projects_page />} />
					<Route
						path="project_grid/project_detail/:projectSlug"
						element={<ProjectDetail />}
					/>
					<Route path="contact_us" element={<Contact_page />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
