const path = require("path");

module.exports = {
  webpack: (config, { dev, isWorker, defaultLoaders, webpack }) => {
    config.entry = path.resolve(__dirname, "src", "index.js");

    return config;
  },
};
