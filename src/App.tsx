import { useEffect, Suspense, lazy } from "react"; // <--- Add Suspense and lazy
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // <--- Add HelmetProvider

import AppLayout from "./ui/AppLayout";
import ScrollToTop from "./ui/ScrollToTop";
import logo from "./assets/holtonlogo.png";

import AOS from "aos";
import "aos/dist/aos.css";

// 1. Lazy load your page components
// This ensures the JavaScript for these pages is only loaded when their route is accessed.
const Home_page = lazy(() => import("./pages/Home_page"));
const About_page = lazy(() => import("./pages/About_page"));
const Property_page = lazy(() => import("./pages/Property_page"));
const Contact_page = lazy(() => import("./pages/Contact_page"));
const Projects_page = lazy(() => import("./pages/Projects_page"));
const Shortlet_page = lazy(() => import("./pages/Shortlet_page"));

// Lazy load detail pages as well, they often have a lot of specific logic/data
const ProjectDetail = lazy(() => import("./features/projects/ProjectDetail"));
const PropertyDetail = lazy(
  () => import("./features/properties/PropertyDetail")
);
const ShortletDetail = lazy(() => import("./features/shortlet/ShortletDetail"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <HelmetProvider>
      {" "}
      {/* 2. Wrap your entire application with HelmetProvider */}
      <BrowserRouter>
        <ScrollToTop />
        {/* 3. Wrap your Routes with Suspense */}
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh", // Take full viewport height
                fontSize: "2.5rem", // Larger text
                fontWeight: "bold",
                color: "#2A286B", // Matches your brand color
                background: "#f8f8f8", // A light background
              }}
            >
              <img src={logo} alt="logo" />
              <div className="relative w-[20rem] h-[5px] bg-blue-950 overflow-hidden my-6 rounded-full">
                <div className="absolute top-0 left-0 w-[80px] h-[100%] bg-white animate-animloader rounded-full" />
              </div>
            </div>
          }
        >
          <Routes>
            <Route element={<AppLayout />}>
              {/* 4. Use the lazy-loaded components in your routes */}
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
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
