// import { config } from 'dotenv';
import bunyan from 'bunyan';

// Get some meta info from the package.json
const { name, version } = { name: 'my:app', version: '1.0.0' };

// Set up a logger
const getLogger = (message, level) => bunyan.createLogger({ name: `${message}`, level });

// Configuration options for different environments
const config = {
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

export default config;
