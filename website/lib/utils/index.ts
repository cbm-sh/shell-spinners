import { memoize } from 'lodash-es';

// Function to create a category for the code
export const getCodeCategory = (code: string | string[]): string | string[] => {
	let category: string | string[] = code.toString();

	switch (true) {
		case typeof code === 'string' && code.startsWith('npm'):
			category = 'Npm';
			break;
		case Array.isArray(code):
			category = 'Keyframes';
			break;
		default:
			category = 'Code';
	}
	return category;
};

// Function to create a class name from an array of strings
export const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

// Memoize a function to cache its types with a custom resolver
export const memoizer = <T extends (...args: any[]) => any>(
	fn: T,
	resolver?: (...args: Parameters<T>) => string,
) => {
	const cache = new Map<string, ReturnType<T>>();
	const defaultResolver = (...args: Parameters<T>) => JSON.stringify(args);
	const finalResolver = resolver || defaultResolver;

	const memoizerFn = memoize(
		((...args: Parameters<T>) => {
			const key = finalResolver(...args);
			if (cache.has(key)) {
				return cache.get(key);
			}
			const type = fn(...args);
			cache.set(key, type);
			return type;
		}) as T,
		finalResolver,
	);

	memoizerFn.cache = cache;
	return memoizerFn;
};
