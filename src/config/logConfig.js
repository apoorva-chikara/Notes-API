const bunyan = require('bunyan');
// Load package.json
const pjs = require('../../package.json');

// Get some meta info from the package.json
const { name, version } = pjs;

// Set up a logger
const getLogger = (message, level) => bunyan.createLogger({ name: `${message}`, level });

// Configuration options for different environments
module.exports = {
  development: {
    name,
    version,
    log: () => getLogger(name, 'debug'),
  },
  production: {
    name,
    version,
    log: () => getLogger(name, 'info'),
  },
};
