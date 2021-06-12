Utils. The utility library documentation / [Exports](modules.md)

# Utils

The generic utility library.

## Table of Contents

  - [Installing](#installing)
  - [Example](#example)
  - [API](#api)
  - [Development](#development)
  - [Debug](#debug)
  - [Testing](#testing)
  - [License](#license)

## Installing

Using npm:

```bash
$ npm install @atelon/utils
```

## Example

```ts
import { isDefined } from  @atelon/utils;

if (isDefined(undefined)) {
  console.log('The value is defined');
}
else {
  console.log('The value is undefined');
}

// Output:
// The value is undefined
```

## API

See [api file](./docs/modules.md).

## Development

Write some changes. Typedoc is not working under docker, so run it manually. Use Visual Studio Code to build project with commands: app-build.

## Debug

Use Visual Studio Code to run commands: compose-up-debug, compose-down-debug.

## Testing

Use Visual Studio Code to run commands: app-test.

## License

Utils is [MIT licensed](LICENSE).
