import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
	return (
		<div className="h-[100vh] w-full flex flex-col">
			<main className="w-full h-full flex flex-col">
				<Outlet />
			</main>
		</div>
	);
};

export default AppLayout;
