/*global describe, it, require, __dirname*/

'use strict';

const util = require('brei-util');
// const u = require('util');

const root = __dirname + '/..';

let valid = [
	'README.md',
	{
		_config:
			['.eslintrc.json',
				'.stylelintignore',
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
		lib: ['updateScss.js']
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

		// console.log(u.inspect(files, false, null));

		util.assert(util.deep(valid, files));

	});

});

