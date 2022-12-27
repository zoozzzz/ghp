/*
 * Description:
 * Created: 2022-11-02 18:06:15
 * Author : Wing
 * Email : cairz@mogulinker.com
 * -----
 * Last Modified: 2022-11-02 18:06:15
 * Modified By: Wing
 * -----
 * Copyright (c) 2022 www.mogulinker.com
 */
const path = require('path');

const {
  override,
  // ...
  addLessLoader,
  addWebpackAlias,
  adjustStyleLoaders,
  // ...
} = require("customize-cra");

module.exports = override(
  // do stuff with the webpack config...
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      // Optionally adjust URLs to be relative. When false, URLs are already relative to the entry less file.
      relativeUrls: false,
      modifyVars: { "@primary-color": "#A80000" },
      // cssModules: {
      //   // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
      //   localIdentName: "[path][name]__[local]--[hash:base64:5]",
      // }
    },
  }),
  // ↓加了这么个配置
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  // enableEslintTypescript(),
  (config, env) => {
    config.resolve.extensions = ['.ts', '.tsx', '.js','.jsx','.json'];
    return config;
  },
);
