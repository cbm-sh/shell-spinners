// Define a type for the possible loader names
type LoaderNames =
  | "dots_solid_clockwise_2x3"
  | "dots_solid_counterclockwise_2x3";

// Define a type for a loader object
type Loader = {
  name: LoaderNames;
  frames: string[];
};

// Create an array of loader objects
const loaders: Loader[] = [
  {
    name: "dots_solid_clockwise_2x3",
    frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"],
  },
  {
    name: "dots_solid_counterclockwise_2x3",
    frames: ["⠏", "⠇", "⠧", "⠦", "⠴", "⠼", "⠸", "⠹", "⠙", "⠋"],
  },
];

// Export the loaders array as the default export
export default loaders;
