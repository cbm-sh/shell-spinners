import ALL_LOADERS from "./all-loaders";

/**
 * Initialize a loader
 * @param name - ***Required*** - The name of the loader to initialize
 * @param speed - ***Optional*** - The loader speed
 * @returns The loader object
 */

const initLoader = (name: string, speed?: number) => {
  const loader = ALL_LOADERS.find(obj => obj.name === name);

  if (!loader) {
    console.error(
      `Loader '${name}' not found. Please check the name and try again.`,
    );
    return;
  }

  const { keyframes } = loader;

  let index = 0;

  setInterval(() => {
    process.stdout.write(`\r${keyframes[index]}`);
    index = (index + 1) % keyframes.length;
  }, speed || 80);
};

export default initLoader;


