require('@babel/register')({
  presets: ['@babel/preset-env'],
  ignore: ['node_modules', '.next'],
});

// Import the rest of our application.
module.exports = require('./server.js');
