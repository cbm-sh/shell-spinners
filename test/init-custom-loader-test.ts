import initCustomLoader from '../src/init-custom-loader';

// Test function to verify initCustomLoader
const testInitCustomLoader = () => {
    const speed = 100;
    const keyframes = ['-', '\\', '|', '/'];

    console.log(`Testing initCustomLoader('${speed}, ${keyframes}...')...`);
    initCustomLoader(speed, keyframes);
  };

  testInitCustomLoader();