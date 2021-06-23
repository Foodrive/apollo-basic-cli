const fs = require("fs");
const { copyTemplate } = require("./utils");

const createModule = (name) => {
  if (!fs.existsSync("./src")) {
    throw new Error("src folder is not found");
  }
  const modulesPath = "./src/modules";
  try {
    if (!fs.existsSync(modulesPath)) {
      fs.mkdirSync(modulesPath);
    }

    // clean the module name into all lower case and no spaces
    const moduleName = name.toLowerCase().replace(/[\W_]/g, "");
    const newModule = `${modulesPath}/${moduleName}`;

    if (fs.existsSync(newModule)) {
      throw new Error(`An existing module already has the name: ${moduleName}`);
    }

    fs.mkdirSync(newModule);

    const resolvers = `${newModule}/resolvers`;
    const typeDefs = `${newModule}/typeDefs`;

    fs.mkdirSync(resolvers);
    fs.mkdirSync(typeDefs);

    copyTemplate("module_index.txt", `${newModule}/index.js`);
    copyTemplate("resolvers_index.txt", `${resolvers}/index.js`);
    copyTemplate("typeDefs_index.txt", `${typeDefs}/index.js`);
    copyTemplate("sample_graphql.txt", `${typeDefs}/sample.graphql`);
    copyTemplate("sample_resolver.txt", `${resolvers}/sample.resolver.js`);
  } catch (e) {
    console.log("Error:", e.message);
  }
};

module.exports = createModule;
