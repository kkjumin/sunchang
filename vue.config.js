// const path = require('path');

// const isDevelop = process.env.NODE_ENV === 'development';

module.exports = {
  // options...
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://121.142.80.154:38369'
      }
    }
  }
};
