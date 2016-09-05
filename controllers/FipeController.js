// const Vehicle = Promise.promisifyAll(require('../models/VehicleModel'));
const Seed = require('../lib/seed');
const debug = require('debug')('fipe:controller:api');

const FipeController = {
  seed : function (request, response, next) {
    Seed()
      .then(() => {
        response.json({message: 'Update success!'});
      })
      .catch(next);
  },
};

module.exports = FipeController;