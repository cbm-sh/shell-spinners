import initLoader from '../src/init-loader';

// Test function to verify initLoader by name and custom speed
const testInitLoaderByNameAndCustomSpeed = () => {
  console.log(`Testing initLoader('dots_1', 20)...`);
  initLoader('dots_1', 20);
};

testInitLoaderByNameAndCustomSpeed();