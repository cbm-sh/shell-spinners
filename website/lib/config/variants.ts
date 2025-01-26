// Object to store a buttonVariants for different button types
export const buttonVariants = {
	primary: {
		className: 'relative top-0 left-0',
	},
	secondary: {
		className: 'absolute top-3 right-3',
	},
	tertiary: {
		className: 'relative top-0 -right-2',
	},
	quaternary: {
		className: 'absolute top-3 right-14',
	},
	quinary: {
		className: 'relative top-0 right-0',
	},
};

export const SVG_PATH_OPEN = {
	opened: { d: 'M3.06061 2.99999L21.0606 21' },
	moving: { d: 'M0 8.5L24 8.5' },
	closed: { d: 'M0 8.5L24 8.5' },
};

export const SVG_PATH_CLOSE = {
	opened: { d: 'M3.00006 21.0607L21 3.06064' },
	moving: { d: 'M0 14.5L24 14.5' },
	closed: { d: 'M0 14.5L12 14.5' },
};

export const UL_VARIANTS = {
	open: {
		transition: { staggerChildren: 0.005, staggerDirection: 0.005, delayChildren: 0.005 },
	},
	closed: {
		transition: { staggerChildren: 0.005, staggerDirection: 0.005, delayChildren: 0.005 },
	},
};

export const LI_VARIANTS = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			x: { duration: 1, stiffness: 30, type: 'spring', ease: 'easeIn' },
		},
	},
	closed: {
		x: 0,
		opacity: 0,
		transition: {
			x: { duration: 1, stiffness: 30, type: 'spring', ease: 'easeOut' },
		},
	},
};

export const TOAST_VARIANTS = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { duration: 0.5, stiffness: 30, type: 'spring', ease: 'easeIn' },
		},
	},
	closed: {
		y: 20,
		opacity: 0,
		transition: {
			y: { duration: 0.5, stiffness: 30, type: 'spring', ease: 'easeOut' },
		},
	},
};
