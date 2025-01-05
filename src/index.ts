import loaders from "./loaders";

// export const getRandomLoader = () => {
//   const randomIndex = Math.floor(Math.random() * loaders.length);
//   return loaders.map((loader) => loader)[randomIndex];
// };

const startLoader = (name: string) => {
  let index = 0;
  const loader = loaders.find((loader) => loader.name === name);

  if (!loader) {
    console.error("Loader not found");
    return;
  }

  const { frames } = loader;

  setInterval(() => {
    process.stdout.write(`\r${frames[index]}`);
    index = (index + 1) % frames.length;
  }, 80);
};

startLoader("dots_solid_clockwise_2x3");
