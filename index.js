var connect = require( 'connect'),
    serve_static = require( "serve-static" );

module.exports = function( path ) {
    var app = connect();

    app.use( function( req, res, next) {
        if (req.url == "/current-time" ) {
            res.end( (new Date()).toISOString() );
        }
        else {
            next();
        }
    });

    app.use(serve_static( path ));
    return app;
};

