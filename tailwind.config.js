/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				1: "#0a2640",
				2: "#243073",
				3: "#f9dc5c",
				4: "#1783a7",
			},

			width: {
				heroContent1: "500px",
				heroContent2_lg: "330px",
				heroContent2_Sm: "300px",
				card_lg: "80%",
				card_sm: "320px",
			},
		},
	},
	plugins: [],
};
