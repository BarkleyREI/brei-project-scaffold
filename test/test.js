/*global describe, it, require, __dirname*/

'use strict';

// const util = require('brei-util');
const util = require('../../brei-util/index.js');
const u = require('util');

const root = __dirname + '/..';

let valid = [
	'.gitignore',
	'README.md',
	{
		_config:
			['.eslintrc.json',
				'.stylelintignore',
				'_brei.json',
				'assemblefile.js',
				'bs.config.js',
				'modernizr-config.json',
				'postcss.config.js',
				'webpack.config.js']
	},
	{
		app: [
			{ assemble: [] },
			{
				ejs: [
					{
						lib: [
							'jquery.js'
						]
					},
					'main.js'
				]
			},
			{ img: [] },
			{ scss: [] },
		]
	},
	{
		lib: []
	},
	'package.json',
	{
		test: ['test.js']
	}
];

describe('Verify file and folder structure', function () {

	it('Deep object comparison check', function () {

		let ttree = util.tree(root);

		let files = util.ftree(ttree);

		console.log('\n------- files --------\n');
		console.log(u.inspect(files, false, null));

		console.log('\n------- valid --------\n');
		console.log(u.inspect(valid, false, null));

		console.log('\n------- test --------\n');
		console.log(u.inspect(util.deepNotOnly(valid, files), false, null));

		util.assert(util.deep(util.deepNotOnly(files, valid), {}));

	});

});

