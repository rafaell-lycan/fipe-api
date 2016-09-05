'use strict';

const mongoose = require('mongoose');
const debug = require('debug')('fipe:db:mongoose');
const config = require('config');

const db = mongoose.connect(_connection());


module.exports = db;

/**
 * private
 */
function _connection() {
  var username = process.env.MONGO_USERNAME || config.get('mongo.username'),
      password = process.env.MONGO_PASSWORD || config.get('mongo.password'),
      host     = process.env.MONGO_SERVER   || config.get('mongo.host'),
      port     = process.env.MONGO_PORT   || config.get('mongo.port'),
      database = process.env.MONGO_DATABASE || config.get('mongo.database'),

      auth = username ? username + ':' + password + '@' : '';

  return 'mongodb://' + auth + host + ':' + port + '/' + database;
};