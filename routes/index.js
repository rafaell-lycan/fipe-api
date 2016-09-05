const express = require('express'),
      router  = express.Router(),
      Promise = require('bluebird'),
      FipeController = require('../controllers/FipeController'),
      debug   = require('debug')('fipe:routes');
      fipe    = require('../lib/fipe');


router.use(function(request, response, next) {
  if(request.path === '/') {
    return response.json({
      'message' : 'Tabela FIPE API'
    });
  }

  next();
});

// router.get('/:type', FipeController.getByType);
router.get('/update', FipeController.seed);

module.exports = router;