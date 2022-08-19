/** @type {import('tailwindcss').Config} */
module.exports = {
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
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				iraniCard: {
					primary: "#2860e6",
					"primary-focus": "#1c49bc",
					"primary-content": "#fff",

					secondary: "#1c49bc",
					accent: "#3b66ff",

					neutral: "#0a0b01",
					"neutral-focus": "#000",
					"neutral-content": "#fff",

					"base-100": "#FFF",
					"base-content": "#000",

					info: "#2860e6",
					"info-content": "#fff",

					success: "#1ae68c",
					"success-content": "#fff",

					warning: "#ffd461",
					"success-content": "#fff",

					error: "#ef3b5e",
					"error-content": "#fff",

					"--rounded-btn": "0.125rem",
				},
			},
		],
	},
};
