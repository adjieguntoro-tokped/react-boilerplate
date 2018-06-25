require('dotenv').config();
const webpackClientConfig = require('./client.config');

webpackClientConfig.serve = {
  dev: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    logLevel: 'silent',
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 1000,
    },
  },
  hot: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT + 1,
    hmr: true,
  },
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
};

module.exports = webpackClientConfig;