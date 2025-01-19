/**
 * Initialize a custom loader
 * @param speed - ***Required*** - The loader speed
 * @param keyframes - ***Required*** - The keyframes for your loader
 * @returns The loader object
 * @see {@link https://cliloaders.com} for keyframes and customizations
 */

const initCustomLoader = (speed: number, keyframes: string[]) => {
  if (speed && speed < 0) {
    console.error(
      `Speed must be a positive number. Please check the speed and try again.`,
    );
    return;
  }

  let index = 0;

  setInterval(() => {
    process.stdout.write(`\r${keyframes[index]}`);
    index = (index + 1) % keyframes.length;
  }, speed);
};

export default initCustomLoader;
