const path = require("path");
const fs = require("fs");

const copyTemplate = (template, dest) => {
  fs.copyFileSync(path.join(__dirname, "templates", template), dest);
};

const readTemplate = (template) => {
  return fs.readFileSync(path.join(__dirname, "templates", template), "utf8");
};

const writeToTemplate = (template, args) => {
  let contents = readTemplate(template);

  for (const key of Object.keys(args)) {
    const value = args[key];
    contents = contents.replaceAll(`<%${key}%>`, value);
  }

  return contents;
};

module.exports = {
  copyTemplate,
  readTemplate,
  writeToTemplate,
};
