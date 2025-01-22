import { memoize } from 'lodash-es';

// Create a function to check if the code is a keyframes array
export const isKeyframes = (code: string | string[]): code is string[] => Array.isArray(code);

// Create a function to check if the code is an npm command
export const isNpm = (code: string): boolean => code.startsWith('npm');

// Create a function to for checking code snippets
export const isCode = (code: string): boolean => !isNpm(code) && !isKeyframes(code);

// Create a class name from an array of strings
export const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

// Create a Memoize function to cache function results
export const memoizer = <T extends (...args: any[]) => any>(fn: T) => {
	const cache = new Map<string, ReturnType<T>>();

	const resolver = (...args: Parameters<T>) => JSON.stringify(args);

	const memoizerFn = memoize(((...args: Parameters<T>) => {
		const result = fn(...args);
		cache.set(resolver(...args), result);
		return result;
	}) as T, resolver);

	memoizerFn.cache = cache;
	return memoizerFn;
};
