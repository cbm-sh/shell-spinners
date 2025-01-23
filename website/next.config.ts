import type { NextConfig } from "next";
import TerserPlugin from 'terser-webpack-plugin';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const isProduction = process.env.NODE_ENV !== 'development';

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: [
			'bright',
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
		],
		serverSourceMaps: false,
		webpackBuildWorker: true,
		webpackMemoryOptimizations: true,
	},
	poweredByHeader: false,
	productionBrowserSourceMaps: false,
	reactStrictMode: true,
	webpack: (
		config,
		{ dev, isServer },
	) => {
		// Webpack config cache for faster builds in development
		if (config.cache && dev) {
			config.cache = Object.freeze({
				type: 'memory',
			})
		}

		if (config.cache && isProduction) {
			config.cache = {
				type: 'filesystem',
				buildDependencies: {
					config: [__filename],
				},
			};
		}

		if (!isServer) {
			// Disable specific Babel runtime modules on the client-side
			config.resolve.alias['@babel/runtime/regenerator'] = false;
			config.resolve.alias['@babel/runtime/helpers/asyncToGenerator'] = false;
			config.resolve.alias['@babel/runtime/helpers/interopRequireDefault'] = false;
			config.resolve.alias['@babel/runtime/helpers/interopRequireWildcard'] = false;
			config.resolve.alias['@babel/runtime/helpers/interopRequireDefault'] = false;
		}

		if (!isServer) {
			config.optimization.minimizer.push(
				new TerserPlugin({
					terserOptions: {
						compress: {
							drop_console: true, // Remove console statements
							drop_debugger: true, // Remove debugger statements
							ecma: 5, // Specify ECMAScript version
							comparisons: false, // Optimize comparisons
							inline: 2, // Inline functions
							passes: 3, // Number of passes to compress
							reduce_funcs: true, // Optimize function calls
							reduce_vars: true, // Optimize variable usage
							sequences: true, // Optimize sequences
							toplevel: true, // Optimize top-level variables
							unused: true, // Remove unused variables/functions
						},
						mangle: {
							safari10: true, // Workaround for Safari 10/11 bugs
						},
						output: {
							comments: false, // Remove comments
							beautify: false, // Minify output
						},
					},
				})
			);
		}

		return config;
	},
};

export default withBundleAnalyzer(nextConfig);
