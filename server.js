var express = require('express');
const morgan = require('morgan');
const config = require('config');
const intercepter = require('./core/interceptor');
const router = require('./app/routes/createRouter.js');
const debugApplication = require('debug')('app:application');
const dbConnection = require('./core/database');

app = express();
app.use(express.json());
app.use(intercepter);

/* Register Routes */
app.use('/', router);

/* To enable http logging */
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debugApplication('Morgan Enabled...');
}

/* To get environment flag */
debugApplication(`Node_ENV: ${app.get('env')}`);

/* To get application settings configurations */
debugApplication(config.get('name'));

dbConnection.adminDbConnection().then(() => { /* Do nothing */ }).catch((error) => { debugApplication(`DB Error: ${error}`); });

/* Use of process object which can be set using environment variables */
const port = process.env.PORT || 3000;

/* For any unhandled exceptions */
process.on('unhandledRejection', function(reason, promise) {
    console.log(promise);    
});

app.listen(port, function () {
    debugApplication(`Example app listening at localhost:${port}`);
});