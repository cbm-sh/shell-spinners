import type { Config } from "tailwindcss";

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				'12': 'repeat(12, minmax(0, 1fr))',
				'14': 'repeat(14, minmax(0, 1fr))',
				'16': 'repeat(16, minmax(0, 1fr))',
				'18': 'repeat(18, minmax(0, 1fr))',
				'20': 'repeat(20, minmax(0, 1fr))',
			},
			gridTemplateRows: {
				'12': 'repeat(12, minmax(0, 1fr))',
				'14': 'repeat(14, minmax(0, 1fr))',
				'16': 'repeat(16, minmax(0, 1fr))',
				'18': 'repeat(18, minmax(0, 1fr))',
				'20': 'repeat(20, minmax(0, 1fr))',
			},
		},
	},
	plugins: [],
} satisfies Config;
