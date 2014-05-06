var less = require( 'less' )
  , fs = require( 'fs' )
  , path = require( 'path' );

function makeLess( root ) {

  return function( req, res, next ) {
    if ( path.extname( req.url ) == '.css' ) {
      var lessFile = root + '/' + path.basename( req.url, '.css' )
        + '.less';
      fs.readFile( lessFile, {encoding: "utf8"}, function( err, data ) {
        if ( !err ) {
          less.render( data, function( err, body ) {
            if ( err ) {
              throw err;
            }
            res.writeHead( 200, {
              'Content-Length': body.length,
              'Content-Type': 'text/css; charset=UTF-8'
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
module.exports = makeLess;
