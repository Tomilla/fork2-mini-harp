var connect = require( 'connect')
  , path = require( 'path' )
  , serve_static = require( "serve-static" )
  , makeJade = require( './lib/processor/jade' );

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

  app.use( serve_static( dir ));
  app.use( makeJade( dir ));
  return app;
};

