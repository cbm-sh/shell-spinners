import { initCliLoader } from '../dist/index';
import { dots_14 } from '../src/cli-loaders';

// Test function to verify initCliLoader
const testInitCliLoader = () => {
  console.log(`Testing initCliLoader('arrows_1', 80)...`);
  initCliLoader(dots_14, 100, ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]);
};


testInitCliLoader();