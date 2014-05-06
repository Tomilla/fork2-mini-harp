function makeJade ( root ) {
  var fs = require( 'fs' )
    , path = require( 'path' )
    , jade = require( 'jade' );

  return function( req, res, next ) {

    if ( path.extname( req.url ) == '.html' ) {
      var jadeFile = root + '/' + path.basename( req.url, '.html' )
        + '.jade';
      fs.readFile( jadeFile, {encoding: "utf8"}, function( err, data ) {
        if ( !err ) {
          jade.render( data, function( err, body ) {
            if ( err ) {
              throw err;
            }
            res.writeHead( 200, {
              'Content-Length': body.length,
              'Content-Type': 'text/html; charset=UTF-8'
            });
            res.end( body );
          });
        } else {
          res.statusCode = 404;
          res.end();
        }
      });
    } else {
      next();
    }
  }
}
module.exports = makeJade;
