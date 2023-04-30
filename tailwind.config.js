/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				ice: "#f2f2f2",
				darkIce: "#E4E6EB",
				darkBlack: "#18191A",
				darkGray: "#242526",
				bgColor: "#111827",
				darkBlue: "#1E293B",
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				noto: ["Noto Serif Tamil", "serif"],
			},
		},
	},
	plugins: [],
};
