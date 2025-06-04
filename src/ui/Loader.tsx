import React from "react";

const Loader: React.FC = () => {
	return (
		<div className="">
			<div
				className="w-[100px] h-[40px] bg-loader-dot-gradient bg-repeat-no-repeat bg-[size:30px_30px]   
      animate-l9-animation   
      "
				style={{
					background: `var(--tw-bg-image-1, radial-gradient(farthest-side, transparent calc(95% - 3px), #052376 calc(100% - 3px) 98%, transparent 101%)) no-repeat,
        var(--tw-bg-image-2, radial-gradient(farthest-side, transparent calc(95% - 3px), #052376 calc(100% - 3px) 98%, transparent 101%)) no-repeat,
        var(--tw-bg-image-3, radial-gradient(farthest-side, transparent calc(95% - 3px), #052376 calc(100% - 3px) 98%, transparent 101%)) no-repeat`,
					backgroundSize: "30px 30px",
				}}
			></div>
			{/* LOADING... */}
		</div>
	);
};

export default Loader;
