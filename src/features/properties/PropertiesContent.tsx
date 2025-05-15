import React from "react";
import PropertyHeader from "./PropertyHeader";
import SearchForm from "./SearchForm";
import PropertyList from "./PropertyList";

const PropertiesContent: React.FC = () => {
	return (
		<div>
			<PropertyHeader />
			<SearchForm />
			<PropertyList />
		</div>
	);
};

export default PropertiesContent;
