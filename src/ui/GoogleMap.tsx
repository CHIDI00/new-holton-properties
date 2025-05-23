interface GoogleMapEmbedProps {
	location: string;
}

const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({ location }) => {
	const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
		location
	)}&output=embed`;

	return (
		<iframe
			src={mapUrl}
			width="100%"
			className="aspect-video w-full md:h-[700px] h-[500px] mx-auto overflow-hidden my-10"
			style={{ border: 0, borderRadius: "3rem" }}
			allowFullScreen
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		></iframe>
	);
};
export default GoogleMapEmbed;
