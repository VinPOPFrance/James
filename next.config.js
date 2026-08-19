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
	async redirects() {
		return [
			{
				source: "/pelvic-engine-reset",
				destination: "/lower-back-pain-reset",
				permanent: true,
			},
			{
				source: "/nl/pelvic-engine-reset",
				destination: "/nl/lower-back-pain-reset",
				permanent: true,
			},
		];
	},
};
