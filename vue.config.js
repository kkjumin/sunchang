/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const ansiRegex = require('ansi-regex');

const isDevelop = process.env.NODE_ENV === 'development';
let plugins = [];
if (!isDevelop) plugins = [new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })];

module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://121.142.80.154:38369'
      }
    }
  },

  css: {
    extract: {
      filename: isDevelop ? '[name].css' : '[name].[hash].css'
    }
  },

  configureWebpack: {
    plugins,
    resolve: {
      alias: {
        '@img': path.resolve(__dirname, 'src/assets/img')
      }
    },
    output: {
      filename: isDevelop ? '[name].js' : '[name].[hash].js'
    }
  },

  filenameHashing: isDevelop,
  productionSourceMap: isDevelop,
  transpileDependencies: [ansiRegex]
};
