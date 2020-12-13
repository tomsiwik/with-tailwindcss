const path = require("path");

module.exports = {
  webpack: (config, { dev, isWorker, defaultLoaders, webpack }) => {
    const rules = config.module.rules;

    config.entry = path.resolve(__dirname, "src", "index.js");

    return config;
  },
};
