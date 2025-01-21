import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	compiler: {
		removeConsole: { exclude: ["log", "warn"] },
	},
	experimental: {
		scrollRestoration: true,
		appDocumentPreloading: true,
		allowDevelopmentBuild: true,
		optimizeCss: true,
		optimisticClientCache: true,
		workerThreads: true,
		cpus: 4,
		useEarlyImport: true,
		inlineCss: true,
		imgOptConcurrency: 4,
		imgOptMaxInputPixels: 10000000,
		imgOptSequentialRead: true,
		optimizePackageImports: ["framer-motion", "@vercel/analytics", "react-icons", "react-share", "sonner", "@radix-ui/react-icons", "react", "react-dom"],
		middlewarePrefetch: 'strict',
		cacheLife: { default: { stale: 42000, revalidate: 42000, expire: 42000 } },
		esmExternals: true,
		externalDir: true,
		typedEnv: true,
		preloadEntriesOnStart: true,
		prerenderEarlyExit: true,
		optimizeServerReact: true,
		webpackMemoryOptimizations: true,
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
					{
						key: 'Content-Security-Policy',
						value: `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;`,
					},
				],
			},
		];
	},
};


export default nextConfig;
