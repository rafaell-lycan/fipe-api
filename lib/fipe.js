const request = require('request'),
      Promise = require('bluebird');

const BASE_URL = 'http://veiculos.fipe.org.br/api';

/**
* codigoTabelaReferencia => 195 [setembro/2016]
* codigoTipoVeiculo => 1 [Carro], 2 [Motos], 3 [Caminhões]
*/

const Fipe = {
  getReferenceTable() {
    return requester(null, BASE_URL.concat('/veiculos/ConsultarTabelaDeReferencia'));
  },

  getBrands(ref, type) {
    const data = {
      codigoTabelaReferencia : ref,
      codigoTipoVeiculo: type
    };

    return requester(data, BASE_URL.concat('/veiculos/ConsultarMarcas'));
  },

  getModels(ref, type, brand) {
    const data = {
      codigoTabelaReferencia : ref,
      codigoTipoVeiculo: type,
      codigoMarca: brand
    };

    return requester(data, BASE_URL.concat('/veiculos/ConsultarModelos'));
  },

  getModelYear(ref, type, brand, model) {},

  getVehicles(ref, type, brand, model, year) {},

  getVehicle(ref, type, brand, model, year) {},
};

function requester(data, url) {
  return new Promise(function(resolve, reject) {
    request({
      method: 'POST',
      url: url,
      form: data
    }, function(err, response, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = Fipe;