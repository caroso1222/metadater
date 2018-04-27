#!/usr/bin/env node
'use strict';
const meow = require('meow');
const metadater = require('.');

const cli = meow(`
	Usage
	  $ metadater [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ metadater
	  unicorns & rainbows
	  $ metadater ponies
	  ponies & rainbows
`);

console.log(metadater(cli.input[0] || 'unicorns'));
