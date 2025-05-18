/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit",
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./features/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		// screens: {
		// 	// xs: "480px",
		// 	xs: "640px",
		// 	sm: "885px",
		// 	md: "1024px",
		// 	lg: "1280px",
		// 	xl: "1536px",
		// },

		screens: {
			xs: "480px",
			sm: "640px",
			md: "885px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			inset: { 13: "26px" },
			animation: {
				"fade-in-up": "fadeInUp 0.5s ease-out forwards",
				scroll:
					"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			},
			keyframes: {
				fadeInUp: {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
			},
		},
	},
	plugins: [],
};
