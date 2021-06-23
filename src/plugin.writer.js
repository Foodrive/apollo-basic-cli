const fs = require("fs");
const { writeToTemplate } = require("./utils");

const createPlugin = (name) => {
  if (!fs.existsSync("./src")) {
    throw new Error("src folder is not found");
  }
  const pluginPath = "./src/plugins";
  try {
    if (!fs.existsSync(pluginPath)) {
      fs.mkdirSync(pluginPath);
    }

    const pluginName = name.toLowerCase().replace(/[\W_]/g, "");
    const newPlugin = `${pluginPath}/${pluginName}.plugin.js`;

    const content = writeToTemplate("sample_plugin.txt", {
      TEMPLATE: name,
    });
    fs.writeFileSync(newPlugin, content);
  } catch (e) {
    console.log("Error:", e.message);
  }
};

module.exports = createPlugin;
