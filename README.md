# cli-loaders

A collection of cli loaders for your command-line applications.

## Installation

To install the package, use npm or yarn:

```sh
npm install cli-loaders
# or
yarn add cli-loaders
```

## Usage

### Importing the Loaders

You can import the loaders and use them in your project:

```typescript
import { initLoader } from 'cli-loaders';
```

### Initializing a Loader

You can initialize a loader by its name or id:

```typescript
import { initLoader } from 'cli-loaders';

// Initialize by name
initLoader('dots_variant_1');

// Initialize by id
initLoader(1);
```

### Customizing the Speed

You can also customize the speed of the loader:

```typescript
import { initLoader } from 'cli-loaders';

// Initialize with custom speed
initLoader('dots_variant_1', 100);
```

## Available Loaders

Here are the available loaders you can use:

- `dots_variant_1`
- `dots_variant_2`
- `dots_variant_3`
- `dots_variant_4`
- `dots_variant_5`
- `dots_variant_6`
- `dots_variant_7`
- `dots_variant_8`
- `dots_variant_9`
- `dots_variant_10`
- `dots_variant_11`
- `dots_variant_12`
- `dots_variant_13`
- `dots_variant_14`
- `dots_variant_15`
- and counting 👌

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Special Thanks

Special thanks to [cli-spinners](https://www.npmjs.com/package/cli-spinners) and [sindresorhus](https://github.com/sindresorhus) for the json file for some of the loaders in this project.

