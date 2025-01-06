import { allLoaders } from "./all-loaders";
import { Loader } from "./types";

/**
 * Initialize a loader by name or id.
 * @param {string} name - ***Required*** - The name or id of the loader to initialize.
 * @param {number} speed - ***Optional*** - The loader speed, default is 80.
 * @returns {void}
 */

const initloader = (name: string | number, speed?: number) => {
  const loader = allLoaders.find(
    (obj) => obj.name === name || obj.id === name,
  );

  if (!loader) {
    console.error(
      "loader not found. Please check the name or id and try again.",
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

export { initloader, allLoaders, type Loader };
