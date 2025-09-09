import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/HOLTONicon-dark.webp";
import { AlignCenter, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="relative z-10 w-full ">
      <nav className="flex justify-between items-center bg-white py-5 px-7 w-[95%] mx-auto my-10 rounded-3xl md:rounded-full">
        <div className="items-center justify-start hidden lg:flex">
          <div className="text-black text-lg font-bold border-r-[.8px] border-gray-200 pr-4 mr-16">
            <HashLink to="/home">
              <img src={logo} alt="Holton Logo" className="h-20 w-54" />
            </HashLink>
          </div>
          <ul className="flex space-x-10">
            {[
              { to: "/home", label: "Home" },
              { to: "/about_us", label: "About" },
              { to: "/shortlet_grid", label: "Shortlet" },
              { to: "/property_grid", label: "Properties" },
              { to: "/project_grid", label: "Projects" },
              { to: "/contact_us", label: "Contact" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `relative text-2xl font-bold text-black hover:text-gray-400 pb-1 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:transition-colors after:duration-300 after:rounded-full ${
                      isActive
                        ? "after:bg-blue-800 after:scale-x-100"
                        : "after:bg-transparent after:scale-x-0 hover:after:scale-x-100 after:origin-left"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="items-center justify-between hidden h-full lg:flex">
          <p className="text-2xl text-black">
            Call us:{" "}
            <span className="text-gray-400 border-b-[1px] border-[#2A286B]">
              +(234) 90 7223 8263
            </span>
          </p>
          <a
            href="https://wa.me/2349078238824?text=Hello%2C%20I%27m%20interested%20in%20your%20real%20estate%20listings.%20Can%20you%20share%20more%20details%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="h-full bg-[#2A286B] text-2xl rounded-full text-white font-semibold px-10 py-5 ml-6  hover:bg-[#534fc9] transition-all ease-in-out duration-300">
              Get In Touch
            </button>
          </a>
        </div>

        {/* Mobile Nav button */}
        <div className="flex items-center justify-between w-full lg:hidden">
          <div className="pr-4 mr-16 text-lg font-bold text-black">
            <img src={logo} alt="Holton Logo" className="h-20 w-54" />
          </div>

          <button
            type="button"
            title="Menu"
            onClick={toggleMobileMenu}
            className="p-5 text-white bg-blue-800 cursor-pointer rounded-3xl"
          >
            <AlignCenter />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden h-full bg-white fixed overflow-y-auto shadow-lg transition-all duration-300 transform  ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-[-100%]"
          } ${"top-0 left-0 h-full w-full z-[100]"}`}
        >
          <nav className="container px-4 py-4 mx-auto">
            <div className="flex items-center justify-end w-full mb-10">
              <button
                type="button"
                title="Close Menu"
                onClick={() => setMobileMenuOpen(false)}
                className="p-5 text-white bg-blue-800 cursor-pointer rounded-3xl"
              >
                <X />
              </button>
            </div>
            <ul className="space-y-4 text-gray-700 md:grid md:grid-cols-2">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `block hover:text-[#0B0B1F] font-bold py-5 pb-7 text-5xl mb-9 border-b-2 border-gray-200 text-left mx-6 ${
                      isActive ? "border-b-2 border-blue-800" : ""
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/property_grid"
                  className={({ isActive }) =>
                    `block hover:text-[#0B0B1F] font-bold py-5 pb-7 text-5xl mb-9 border-b-2 border-gray-200 text-left mx-6 ${
                      isActive ? "border-b-2 border-blue-800" : ""
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Properties
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shortlet_grid"
                  className={({ isActive }) =>
                    `block hover:text-[#0B0B1F] font-bold py-5 pb-7 text-5xl mb-9 border-b-2 border-gray-200 text-left mx-6 ${
                      isActive ? "border-b-2 border-blue-800" : ""
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shortlets
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project_grid"
                  className={({ isActive }) =>
                    `block hover:text-[#0B0B1F] font-bold py-5 pb-7 text-5xl mb-9 border-b-2 border-gray-200 text-left mx-6 ${
                      isActive ? "border-b-2 border-blue-800" : ""
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about_us"
                  className={({ isActive }) =>
                    `block hover:text-[#0B0B1F] font-bold py-5 pb-7 text-5xl mb-9 border-b-2 border-gray-200 text-left mx-6 ${
                      isActive ? "border-b-2 border-blue-800" : ""
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact_us"
                  className="block hover:text-[#0B0B1F] font-bold py-5 pb-7 text-5xl mb-9 text-left mx-6"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="flex items-center justify-between h-full px-7">
              <p className="text-4xl text-black">
                Call us:{" "}
                <span className="text-gray-200 border-b-2 border-[#2A286B]">
                  +(234) 90 7223 8263
                </span>
              </p>
              <button className="h-full bg-[#2A286B] text-3xl rounded-full text-white font-semibold px-10 py-5 ml-6  hover:bg-[#534fc9] transition-all ease-in-out duration-300">
                Get In Touch
              </button>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
