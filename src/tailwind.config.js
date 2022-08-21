/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
	important: true,
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			scale: {
				80: "0.80",
			},
			colors: {
				muted: "#858f9c",
				"signUp-bg": "#f7f9ff",
				"4zp": "#f97316",
			},
			fontSize: {
				xss: "0.375rem",
				ss: "0.563rem",
			},
			keyframes: {
				alert: {
					"0%": { transform: "translateX(0.0px)" },
					"20%": { transform: "translateX(-1.5px)" },
					"40%": { transform: "translateX(+1.5px)" },
					"80%": { transform: "translateX(-1.5px)" },
					"100%": { transform: "translateX(0.0px)" },
				},
			},
			animation: {
				alert: "alert 0.5s linear ",
			},
		},
		fontFamily: {
			Estedad: ["Estedad"],
		},
	},
});
