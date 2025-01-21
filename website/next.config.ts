import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	compiler: {
		removeConsole: { exclude: ["log", "warn"] },
	},
};


export default nextConfig;
