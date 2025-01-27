// Object to store a buttonVariants for different button types
export const BUTTON_VARIANTS = {
	primary: {
		className: 'relative top-0 left-0',
	},
	secondary: {
		className: 'absolute top-3 right-3',
	},
	tertiary: {
		className: 'relative top-0 right-0',
	},
	quaternary: {
		className: 'absolute top-3 right-14',
	},
	quinary: {
		className: 'relative top-0 right-0',
	},
};

// Object to store a motion variants for toast
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
