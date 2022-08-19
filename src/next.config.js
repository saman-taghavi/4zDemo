/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");
const nextConfig = {
	i18n,
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["www.placecage.com"],
	},
	pageExtensions: ["tsx"],
	output: "standalone",
	env: {
		BASE_URL: process.env.BASE_URL, //read the value from env id empty use default value.
	},
};

module.exports = nextConfig;
