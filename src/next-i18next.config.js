// import type { UserConfig } from "next-i18next";
const path = require("path");

const i18nConfig = {
	i18n: {
		defaultLocale: "fa",
		locales: ["fa"],
	},
	localePath: path.resolve("./locales"),
	fallbackLng: "fa",
	interpolation: {
		prefix: "{",
		suffix: "}",
	},
	localeStructure: "{lng}/{ns}",
	// debug: process.env.NODE_ENV === "development",
	reloadOnPrerender: process.env.NODE_ENV === "development",
};

module.exports = i18nConfig;
