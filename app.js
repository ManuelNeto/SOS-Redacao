var app = require('./config/express')();

require('./config/database.js')('mongodb://localhost/SOS-REDACAO');

module.exports = app;

var schedule = require('node-schedule');

process.on('unhandledRejection', (reason, p) =>
  console.error('Unhandled Rejection at: Promise ', p, reason)
);
