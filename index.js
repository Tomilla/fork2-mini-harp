var connect = require( 'connect' )
  , app = connect()
  , path = require( 'path' )
  , serve_static = require( "serve-static" )
  , makeJade = require( './lib/processor/jade' )
  , makeLess = require( './lib/processor/less' );

module.exports = function( dir ) {

  app.use( function( req, res, next ) {
    if ( req.url == "/current-time" ) {
      res.end( (new Date()).toISOString() + '\n' );
    } else {
      //call the next function if the middleware doesn't know
      //how to handle a request.
      next();
    }
  });
  app.use( function( req, res, next ) {
    if ( req.url == '/' ) {
      req.url = '/index.html';
    }
    next();
  });
  app.use( function( req, res ,next ) {
    if ( path.extname(req.url) == '.jade' ||
      path.extname(req.url) == '.less' ) {
      res.statusCode = 404;
      res.end();
    }
    else {
      next();
    }
  });

  app.use( serve_static( dir ));
  app.use( makeJade( dir ));
  app.use( makeLess( dir ));
  return app;
};
