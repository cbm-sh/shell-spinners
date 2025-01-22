import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: [
			'eslint',
			'prettier',
			'postcss',
			'sharp',
			'typescript',
			'@vercel/analytics',
			'@vercel/speed-insights',
			'framer-motion',
			'lodash-es',
			'next',
			'react',
			'react-dom',
			'react-icons',
			'react-share',
			'sonner'
		],
		serverSourceMaps: false,
		webpackBuildWorker: true,
		webpackMemoryOptimizations: true,
	},
	productionBrowserSourceMaps: false,
	reactStrictMode: true,
	webpack: (
		config,
		{ dev }
	) => {
		if (config.cache && !dev) {
			config.cache = Object.freeze({
				type: 'memory',
			})
		}
		// console.log('config', config)
		// console.log('buildId', buildId)
		// console.log('dev', dev)
		// console.log('isServer', isServer)
		// console.log('defaultLoaders', defaultLoaders)
		// console.log('nextRuntime', nextRuntime)
		// console.log('webpack', webpack)

		return config
	},
};

export default withBundleAnalyzer(nextConfig);
