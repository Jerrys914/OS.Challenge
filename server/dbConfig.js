const mongoose = require('mongoose');

const url = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds127429.mlab.com:27429/os-challenge';
mongoose.connect(url);
mongoose.Promise = global.Promise;

module.exports = mongoose.conn;