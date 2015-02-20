var environmentService = require('environment-config').environmentService;
module.exports.connections = {
  databaseConfig: environmentService.getEnvironmentConfig('config/environments').database
};
