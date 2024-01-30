const webpack = require("webpack");
module.exports = function override(config, env) {
  config.resolve.fallback = {
    crypto: false,
    os: false,
    path: false,
    stream: false,
    util: require.resolve("util/"),
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  );

  return config;
};
