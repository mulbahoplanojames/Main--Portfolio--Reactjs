/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				1: "#0a2640",
				2: "#243073",
			},

			width: {
				heroContent1: "500px",
				heroContent2: "330px",
			},
		},
	},
	plugins: [],
};
