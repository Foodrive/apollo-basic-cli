#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const createModule = require("../src/module.writer");
const createPlugin = require("../src/plugin.writer");

const createPositionals = (yargs) => {
  return yargs
    .positional("type", {
      describe: "Type of boilerplate file (module | plugin)",
    })
    .positional("name", {
      describe: "Name of your new boilerplate",
    });
};

const argv = yargs(hideBin(process.argv)).command(
  "create <type> <name>",
  "generate boilerplate files",
  createPositionals,
  (argv) => {
    switch (argv.type) {
      case "module":
        return createModule(argv.name);
      case "plugin":
        return createPlugin(argv.name);
      default:
        console.log("Unrecognised type");
    }
  }
).argv;
