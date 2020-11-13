'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable: {
    filter: '/api',
    target: 'http://localhost:5000',
    changeOrigin: true
  }
});
