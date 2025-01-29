import cliLoaders from "./cli-loaders";

type CustomLoaderProps = {
  speed: number;
  keyframes: string[];
};

const hasValidConfig = (speed: number, keyframes: string[]) => {
  // Check if the speed is valid
  if (speed <= 0) {
    console.error(
      `Speed must be a positive number. Please check the speed and try again.`,
    );
    return false;
    // Check if the keyframes are valid
  } else if (keyframes.length < 2) {
    console.error(
      `Keyframes must be two or greater. Please check the keyframes and try again.`,
    );
    return false;
    // Check if the keyframes are an array
  } if (!Array.isArray(keyframes)) {
    console.error(
      `Keyframes must be an array. Please check the keyframes and try again.`,
    );
    return false;
  }
  return true;
};

const renderLoader = (speed: number, keyframes: string[]) => {
  // Start at the first keyframe
  let index = 0;

  // Render the loader
  return setInterval(() => {
    // Print the keyframe to the console
    process.stdout.write(`\r${keyframes[index]}`);
    // Increment the index
    index = (index + 1) % keyframes.length;
    // Set the speed
  }, speed);
};

/**
 * Initialize any custom loader or pre-defined loader
 * @param loader - The loader object. Default is 'dots_1'
 * @param speed - The loader speed. Default is 80
 * @param keyframes - The loader keyframes. Default is ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
 * @returns The loader object
 * @see {@link https://cliloaders.com} for keyframes and customizations
 */

const initCliLoader = (loader: CustomLoaderProps | string, speed?: number, keyframes?: string[]) => {
  // Define the default loader
  const defaultLoader = cliLoaders['dots_1'];
  // Define the chosen loader
  const chosenLoader = cliLoaders[loader as keyof typeof cliLoaders];

  // Define the loader, speed, and keyframes variables
  let cliLoaderSpeed: number = speed ?? defaultLoader.speed;
  let cliLoaderKeyframes: string[] = keyframes ?? defaultLoader.keyframes;

  // Check if the loader exists
  if (!loader) {
    console.error(
      `Loader '${loader}' wasn't found. Please check the name and try again.`,
    );
    return;
    // Check if the loader is an object or string
  } else if (typeof loader === 'object' || typeof loader === 'string') {
    // Check if the loader is an object
    if (typeof loader === 'object') {
      // Assign the speed and keyframes
      cliLoaderSpeed = speed ?? loader.speed;
      cliLoaderKeyframes = keyframes ?? loader.keyframes;

      // Check speed and keyframe validity
      if (hasValidConfig(cliLoaderSpeed, cliLoaderKeyframes)) {
        // Render the loader
        return renderLoader(cliLoaderSpeed, cliLoaderKeyframes);
      }

      // Check if the loader is a string
    } else if (typeof loader === 'string') {
      // Check if the chosen loader exists
      if (chosenLoader) {
        // Assign the speed and keyframes
        cliLoaderSpeed = speed ?? chosenLoader.speed;
        cliLoaderKeyframes = keyframes ?? chosenLoader.keyframes;

        // Check speed and keyframe validity
        if (hasValidConfig(cliLoaderSpeed, cliLoaderKeyframes)) {
          // Render the loader
          return renderLoader(cliLoaderSpeed, cliLoaderKeyframes);
        }

      } else {
        // Log an error if the loader does not exist
        console.error(
          `'${loader}' is not a valid loader. Please check the loader name and try again.`,
        );
        return;
      }
    }
  } else {
    // Log an error if the loader is not an object or string
    console.error(
      `Loader must be an object or string, received ${typeof loader}. Please check the loader and try again.`,
    );
    return;
  }
};

export default initCliLoader;


