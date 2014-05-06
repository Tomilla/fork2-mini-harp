#!/usr/bin/env node
var createMiniHarp = require( "../index" )
  , argv = require( 'minimist' )(process.argv.slice( 2 ))
  , root = argv._.length > 0 ? argv._ : process.cwd();
//by default, set port as '4000', avoid port undefined.
argv.port = argv.port || 4000;

console.log( "Starting mini-harp on http://localhost:"
            + argv.port );

createMiniHarp( root ).listen( argv.port );

