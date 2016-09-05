const express = require('express'),
      cors    = require('cors'),
      debug   = require('debug')('fipe:app'),
      app     = express();

app.set('port', (process.env.PORT || 8080));

app.use(cors());
app.use(express.static(__dirname));

app.use(function (req, res, next) {
  if (req.url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'});
    res.end('');
  } else {
    next();
  }
});

app.use('/api', require('./routes'));

app.use(function(request, response, next) {
  var err = new Error('Not found ;(');
  err.status = 404;
  next(err);
});

app.use(function(err, request, response, next) {
  response.status(err.status || 500).json({ err: err.message });
  debug(err.stack);
});

app.listen(app.get('port'), function () {
  debug('Magic happens on port: ' + app.get('port'));
});

module.exports = app;