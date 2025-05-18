import React from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectSearch from "./ProjectSearch";
import ProjectGrid from "./ProjectGrid";

const ProjectContent: React.FC = () => {
	return (
		<div>
			<ProjectHeader />
			<ProjectSearch />
			<ProjectGrid />
		</div>
	);
};

export default ProjectContent;
