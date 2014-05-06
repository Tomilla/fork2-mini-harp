function createMiniHarp( path ) {
  var connect = require( 'connect')
  , serve_static = require( "serve-static" )
  , app = connect();

  app.use( function( req, res, next) {
    if (req.url == "/current-time" ) {
      res.end( (new Date()).toISOString() + '\n' );
    } else {
      //call the next function if the middleware doesn't know
      //how to handle a request.
      next();
    }
  });

  app.use( serve_static( path ));
  return app;
};

module.exports = createMiniHarp;
