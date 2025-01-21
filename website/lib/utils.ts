import { memoize } from 'lodash';

// Check if the code is an array of keyframes
export const isKeyframes = (code: string | string[]): code is string[] => Array.isArray(code);

// Check if the code is an npm command
export const isNpm = (code: string): boolean => code.startsWith('npm');

// Check if the code is a custom code
export const isCode = (code: string): boolean => !isNpm(code) && !isKeyframes(code);

// Create a class name from an array of strings
export const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

// Memoize a function to cache its results
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

// Get the cache from a memoized function
export const getCache = <T extends (...args: any[]) => any>(memoizerFn: T & { cache: Map<string, any> }) => memoizerFn?.cache;
