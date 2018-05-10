var app = require('./config/express')();

var env = process.argv[2] || process.env.NODE_ENV || 'development';

if (env === 'development') {
    require('./config/database.js')('mongodb://localhost/SOS-REDACAO');
} else {
    require('./config/database.js')('mongodb://sosredacao:projeto1_@ds119650.mlab.com:19650/sosredacao');
   }

module.exports = app;

var schedule = require('node-schedule');
