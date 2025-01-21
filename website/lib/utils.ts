export const isKeyframes = (code: string | string[]): code is string[] =>
	Array.isArray(code);

export const isNpm = (code: string): boolean => code.startsWith('npm');

export const cx = (...classes: (string | undefined)[]): string =>
	classes.filter(Boolean).join(' ');

export const memoize = <T extends (...args: any[]) => any>(fn: T) => {
	const cache = new Map<string, ReturnType<T>>();

	return (...args: Parameters<T>) => {
		const key = JSON.stringify(args);

		if (cache.has(key)) {
			return cache.get(key);
		}

		const result = fn(...args);
		cache.set(key, result);

		return result;
	};
};

export const generateCnPositionForButton = (buttonVariant: string): string => {
	switch (buttonVariant) {
		case 'back':
			return 'relative top-0 left-0';
		case 'keyframes':
			return 'absolute top-3 right-14';
		case 'code':
			return 'absolute top-3 right-3';
		case 'code-view':
			return 'absolute top-3 right-3';
		case 'npm':
			return 'relative top-1 -right-2';
		default:
			return '';
	}
};
