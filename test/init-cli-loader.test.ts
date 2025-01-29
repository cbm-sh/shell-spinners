

// --Success tests--



// initCliLoader("arrows_1", 1000); // Pass

// initCliLoader(arrows_1, 1000); // Pass

// initCliLoader("arrows_1", 1000, ["⇐", "⇒"]); // Pass

// initCliLoader(arrows_1, 1000, ["⇐", "⇒"]); // Pass

// initCliLoader("emojis_1"); // Pass

// const customArrows = {
//   speed: 1000,
//   keyframes: ["⇐", "⇒"],
// };

// initCliLoader(customArrows, 1000); // Pass

// const speed = 1000;
// const keyframes = ["⇐", "⇒"];

// initCliLoader("arrows_1", speed, keyframes); // Pass

// const customArrows = {
//   speed: 1000,
//   keyframes: ["⇐", "⇒"],
// };

// initCliLoader(customArrows); // Pass

// --Fail tests--

// initCliLoader("arrows_1", 0); // Pass

// initCliLoader(arrows_1, -500, ["..", "."]); // Pass

// initCliLoader("arrows_1", 1000, ["⇐"]); // Pass

// initCliLoader("arrows_1", 1000, "⇐"); // Pass

// initCliLoader(arrows_1, 1000, ["...", ".."]); // Pass

// const intervalId = initCliLoader('dots_1');

// // Stop the loader after some time
// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000); // Pass
