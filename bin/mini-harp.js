#!/usr/bin/env node
var createMiniHarp = require( "../index" ),
    root = process.cwd(),   // current directory
    parsedArgv = require( 'minimist' )(process.argv.slice( 2 ));

//by default, set port as '4000', avoid port undefined.
parsedArgv.port = parsedArgv.port == undefined ? 4000 : parsedArgv.port;
console.log( "Starting mini-harp on http://localhost:" +
    parsedArgv.port );

root =  parsedArgv._.length > 0 ? parsedArgv._ : root;

var app = createMiniHarp( root );
app.listen( parsedArgv.port );

