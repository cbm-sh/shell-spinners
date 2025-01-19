import allLoaders from "./all-loaders";

/**
 * Initialize a loader
 * @param name - ***Required*** - The name of the loader to initialize
 * @param speed - ***Optional*** - The loader speed
 * @returns The loader object
 * @see {@link https://cliloaders.com} for different loaders
 */

const initLoader = (name: string, speed?: number) => {
  const loader = allLoaders.find(obj => obj.name === name);

  if (!loader) {
    console.error(
      `Loader '${name}' not found. Please check the name and try again.`,
    );
    return;
  }

  const { keyframes } = loader;

  if (speed && speed < 0) {
    console.error(
      `Speed must be a positive number. Please check the speed and try again.`,
    );
    return;
  }

  if (!keyframes) {
    console.error(
      `Keyframes not found for loader '${name}'. Please check the keyframes and try again.`,
    );
    return;
  }

  let index = 0;

  setInterval(() => {
    process.stdout.write(`\r${keyframes[index]}`);
    index = (index + 1) % keyframes.length;
  }, speed || 80);
};

export default initLoader;


