const Crawler = require('../lib/fipe');
const Promise = require('bluebird');

const Seed = function() {
  return new Promise(function(resolve, reject) {
    'use strict';

    let code = null;

    fipe.getReferenceTable()
      .then((data) => {
        code = JSON.parse(data)[0].Codigo;

        // Load Cars
        return _loadBrands(code, 1);
      })
      .then(function() {
        // Load Bikes
        return _loadBrands(code, 2);
      })
      .then(function() {
        // Load Trucks
        return _loadBrands(code, 3);
      })
      .then(function() {
        resolve();
      })
      .catch(reject);
  });
};

function _loadBrands(ref, type) {
  return new Promise(function(resolve, reject){
    fipe.getBrands(ref, type)
    .then(data => {
      const brands = JSON.parse(data);
      brands.forEach(brand => {
        _loadModels(ref, type, brand.Value);
        console.log('->', brand)
      });
      resolve();
    })
    .catch(reject);
  });
}


function _loadModels(ref, type) {
  return new Promise(function(resolve, reject){
    fipe.getBrands(ref, type)
    .then(data => {
      const brands = JSON.parse(data);
      brands.forEach(brand => {
        console.log('->', brand)
      });
      resolve();
    })
    .catch(reject);
  });
}

module.exports = Seed;