const mongoose = require('mongoose');
const config = require('config');
const debugDatabase = require('debug')('app:database');

const adminDbConnection = () => {
    return new Promise(function (resolve, reject) {
        const dbUrl = config.get('adminDb');
        
        mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
            .then(() => {
                debugDatabase('Connected to MongoDB');
                resolve();
            })
            .catch(err => {
                debugDatabase('Could not connect to MongoDB...', err);
                reject(err);
            })
            .finally({
                //TODO: Finally event
            });
    });
}

module.exports.adminDbConnection = adminDbConnection;