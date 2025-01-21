// Check if the code is an array of keyframes
export const isKeyframes = (code: string | string[]): code is string[] => Array.isArray(code);

// Check if the code is an npm command
export const isNpm = (code: string): boolean => code.startsWith('npm');

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

// Generate a class based on button variant
export const cl = (buttonVariant: string) => {
	const baseClass = 'inline-flex cursor-pointer items-center justify-center p-2 overflow-hidden text-neutral-50 transition duration-300 ease-in-out border border-neutral-800 group';

	switch (buttonVariant) {
		case 'backButton':
			return `relative top-0 left-0 ${baseClass}`;
		case 'copyKeyframesButton':
			return `absolute top-3 right-14 ${baseClass}`;
		case 'copyCodeButton':
			return `absolute top-3 right-3 ${baseClass}`;
		case 'codeViewButton':
			return `absolute top-3 right-3 ${baseClass}`;
		case 'copyNpmButton':
			return `relative top-1 -right-2 ${baseClass}`;
		default:
			return '';
	}

}