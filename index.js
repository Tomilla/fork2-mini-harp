module.exports = function() {
    var parsedArgv = require( 'minimist' )(process.argv.slice( 2 ));
    var createMiniHarp = require( "connect" )
        , app = createMiniHarp();

    //by default, set port as '4000', avoid port undefined.
    parsedArgv.port = parsedArgv.port === undefined ? 4000 : parsedArgv.port;
    console.log( "Starting mini-harp on http://localhost:" +
        parsedArgv.port );

    app.use( function( req, res, next) {
        if  (req.url == "/current-time" ) {
            res.end( (new Date()).toISOString() );
        }
        else {
            next();
        }
    });
    app.listen(parsedArgv.port);
};
