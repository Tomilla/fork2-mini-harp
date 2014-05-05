module.exports = function() {
    var parsedArgv = require( 'minimist' )(process.argv.slice( 2 ));
    var createMiniHarp = require( "connect" )
        , app = createMiniHarp();

    console.log( "Starting mini-harp on http://localhost:" +
        parsedArgv.port );
    app.listen(parsedArgv.port);
};
