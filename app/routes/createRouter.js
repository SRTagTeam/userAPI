const Router = require('express').Router();

/* V1 Routes */

const healthCheck = require('./v1/healthCheck');
const users = require('./v1/users');

Router.use('/', healthCheck);
Router.use('/api/users', users);

/* End of V1 Routes */

module.exports = Router;