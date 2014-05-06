var connect = require( 'connect')
  , path = require( 'path' )
  , serve_static = require( "serve-static" )
  , makeJade = require( './lib/processor/jade' )
  , makeLess = require( './lib/processor/less' );

module.exports = function( dir ) {
  var app = connect();

  app.use( function( req, res, next) {
    if (req.url == "/current-time" ) {
      res.end( (new Date()).toISOString() + '\n' );
    } else {
      //call the next function if the middleware doesn't know
      //how to handle a request.
      next();
    }
  });
  app.use( function (req, res, next) {
    if (req.url == '/') {
        req.url = '/index.html';
    }
    next();
  })

  app.use( serve_static( dir ));
  app.use( makeJade( dir ));
  app.use( makeLess( dir ));
  return app;
};

