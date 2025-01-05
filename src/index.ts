import spinners from "./spinners";

/**
 * Initialize a spinner by name or id.
 * @param {string} name - ***Required*** - The name or id of the spinner to initialize.
 * @param {number} speed - ***Optional*** - The spinner speed, default is 80.
 * @returns {void}
 */

export const initSpinner = (name: string | number, speed?: number) => {
  const spinner = spinners.find(
    (spinner) => spinner.name === name || spinner.id === name,
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

initSpinner(15, 70);
