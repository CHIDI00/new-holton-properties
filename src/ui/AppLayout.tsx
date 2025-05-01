import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const AppLayout: React.FC = () => {
	return (
		<div className="w-full flex flex-col">
			<main className="w-full h-full flex flex-col">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default AppLayout;
