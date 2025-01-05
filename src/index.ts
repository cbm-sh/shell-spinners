import spinners from "./spinners";

/**
 * Initialize a spinner with the specified name.
 * @param {string} name - ***Required*** - The name of the spinner to initialize.
 * @param {number} speed - ***Optional*** - The spinner speed (default 80).
 * @param {number} id - ***Optional*** - The id of the spinner to initialize.
 * @returns {void}
 */

export const initSpinner = (name?: string, id?: number, speed?: number) => {
  if (!name && !id) {
    console.error("A name or id argument is required.");
    return;
  }

  const spinner = spinners.find(
    (spinner) => spinner.name === name || spinner.id === id,
  );

  if (!spinner) {
    console.error(
      "Spinner not found. Please check the name or id and try again.",
    );
    return;
  }

  const { keyframes } = spinner;

  let index = 0;

  setInterval(() => {
    process.stdout.write(`\r${keyframes[index]}`);
    index = (index + 1) % keyframes.length;
  }, speed || 80);
};
