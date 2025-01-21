// Check if the code is an array of keyframes
export const isKeyframes = (code: string | string[]): code is string[] => Array.isArray(code);

// Check if the code is an npm command
export const isNpm = (code: string): boolean => code.startsWith('npm');

export const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

// Memoize a function to cache its results
export const memoize = <T extends (...args: any[]) => any>(fn: T) => {
	const cache = new Map<string, ReturnType<T>>();

	return (...args: Parameters<T>) => {
		const key = JSON.stringify(args);

		if (cache.has(key)) {
			console.log(`Cache hit for key: ${key}`);
			return cache.get(key);
		}

		console.log(`Cache miss for key: ${key}`);
		const result = fn(...args);
		cache.set(key, result);

		return result;
	};
};

// Define class variant styles for buttons
export const cvStyles = {
	AnimatedButton: 'inline-flex cursor-pointer items-center justify-center p-2 overflow-hidden text-neutral-50 transition duration-300 ease-in-out border border-neutral-800 group',
	BackButton: 'relative top-0 left-0',
	CopyKeyframesButton: 'absolute top-3 right-14',
	CopyCodeButton: 'absolute top-3 right-3',
	CopyNpmButton: 'relative top-1 -right-2',
	CodeViewButton: 'absolute top-3 right-3',
};