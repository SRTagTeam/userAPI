const debugApplication = require('debug')('app:application');

const intercepter = function(req, res, next){
  debugApplication('interceptor logging...');
    next();
  }

module.exports = intercepter;