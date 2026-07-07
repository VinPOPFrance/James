/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "jamesdaime.com",
			},
			{
				protocol: "https",
				hostname: "www.jamesdaime.com",
			},
		],
	},
};
