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

You can initialize any loader by its name.

```typescript
import { initLoader } from 'cli-loaders';

// Initialize by name
initLoader('dots_variant_1');
```

### Customizing the Speed

You can also customize the speed of the loader:

```typescript
import { initLoader } from 'cli-loaders';

// Initialize with custom speed
initLoader('dots_variant_1', 100);
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Special Thanks

Special thanks to [cli-spinners](https://www.npmjs.com/package/cli-spinners) and [sindresorhus](https://github.com/sindresorhus) for the json file for some of the loaders in this project.

