/**
 * Initialize a custom loader or use a pre-defined loader
 * @param loader - ***Optional*** - The loader object
 * @param speed - ***Optional*** - The loader speed
 * @param keyframes - ***Optional*** - The loader keyframes
 * @returns The loader object
 * @see {@link https://cliloaders.com} for keyframes and customizations
 */

import cliLoaders from "./cli-loaders";

type LoaderProps = {
  speed: number;
  keyframes: string[];
};

const initCliLoader = (loader: LoaderProps, speed?: number, keyframes?: string[]) => {
  let s: number;
  let k: string[];
  let i = 0;
  let l: LoaderProps;

  if (loader && speed || keyframes) {
    if (speed && speed > 0) {
      s = speed;
      loader.speed = s;
    } else if (speed && !keyframes) {
      s = speed;
      k = loader.keyframes;
    } else if (speed && speed <= 0) {
      console.error('Speed must be a positive number. Please check the speed and try again.');
      return;
    } else {
      console.error('Please check the speed and try again.');
      return;
    }

    if (keyframes && Array.isArray(keyframes) && keyframes.length >= 2) {
      k = keyframes;
      loader.keyframes = k;
    } else if (Array.isArray(keyframes) && keyframes.length <= 1) {
      console.error('Keyframes must be two or greater. Please check the keyframes and try again.');
      return;
    } else {
      k = loader.keyframes;
    }
  } else if (loader && !speed && !keyframes) {
    const loader = Object.keys(cliLoaders).find((key) => key);
    const chosenLoader = cliLoaders[loader as keyof typeof cliLoaders];
    if (chosenLoader) {
      l = chosenLoader;
      s = l.speed;
      k = l.keyframes;
    } else {
      console.error(`Loader '${loader}' not found in cliLoaders. Please check the loader name and try again.`);
      return;
    }
  } else {
    console.warn('No loader was found. Using the default loader.');
    const loader = Object.keys(cliLoaders).find((key) => key);
    const chosenLoader = cliLoaders[loader as keyof typeof cliLoaders];
    if (chosenLoader) {
      l = chosenLoader;
    } else {
      console.error('Default loader not found in cliLoaders. Please check the loader configuration.');
      return;
    }
    s = l.speed;
    k = l.keyframes;
  }

  setInterval(() => {
    process.stdout.write(`\r${k[i]}`);
    i = (i + 1) % k.length;
  }, s);

};

export default initCliLoader;