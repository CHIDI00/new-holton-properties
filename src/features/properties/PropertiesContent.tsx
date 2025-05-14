import React from "react";
import PropertyHeader from "./PropertyHeader";
import SearchForm from "./SearchForm";

const PropertiesContent: React.FC = () => {
	return (
		<div>
			<PropertyHeader />
			<SearchForm />
		</div>
	);
};

export default PropertiesContent;
