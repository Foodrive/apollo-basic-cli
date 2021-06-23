# Apollo Basic CLI

## Purpose

This tool allow creation of plugins and modules
in the Apollo Server Basic boilerplate.

## Usage

```shell
apollo create module <module-name> # creates the module
apollo create plugin <plugin-name> # creates the plugin
```

## Limitations

This CLI tool simply copies over file templates and then inserts them
into their appropriate directories. Due to this, the CLI tool doesn't add the
new module or plugin as a dependency into the file which aggregates all modules or plugins together.

For example, if you create a new plugin, you have to open up the `src/plugins/index.js`
file and add it in as a new dependency like so:

```javascript
// ...import existing plugins
import myNewPlugin from "./mynew.plugin";

export default [
  // ... existing plugins,
  myNewPlugin,
];
```

Furthermore, it currently only uses Javascript modules (import-export) syntax
so if your application uses CommonJS (require/exports), then the generated scripts
will require modification.

## Features

| Feature                                      | Supported |
| :------------------------------------------- | :-------- |
| Creating modules with import-export syntax   | Yes       |
| Creating plugins with import-export syntax   | Yes       |
| Creating modules with require-exports syntax | No        |
| Creating plugins with require-exports syntax | No        |
| Automatically add modules as dependency      | No        |
| Automatically add plugins as dependency      | No        |
| Generating boilerplate database              | No        |
| Support for more verbose GraphQL schema      | No        |
