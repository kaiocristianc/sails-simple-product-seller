var environmentService = require('environment-config').environmentService;
console.log(environmentService.getEnvironmentConfig('config/environments').database);
module.exports.connections = {
  databaseConfig: environmentService.getEnvironmentConfig('config/environments').database
};
