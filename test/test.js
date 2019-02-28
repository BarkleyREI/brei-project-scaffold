const assert = require('yeoman-assert');
const fs = require('fs');
const _ = require('lodash');

const root = __dirname + '/..';

const ignored = [
	'.git',
	'node_modules',
	'.DS_Store'
];

let rootFiles = [
	'package.json',
	'README.md',
	'.gitignore',
	'src',
	'test'
];

let configFiles = [
	'.eslintrc.json',
	'.stylelintrc.json',
	'assemblefile.js',
	'bs.config.js',
	'modernizr-config.json',
	'postcss.config.js',
	'webpack.config.js'
];

describe('Verify file and folder structure', function () {

	it('Root file check', function () {

		let files = filesArray(root);

		assert(has(rootFiles, files));

	});

	it('Config check', function () {

		let files = filesArray(root + '/_config');

		assert(hasOnly(configFiles, files));

	});

});

function has(list, arr) {

	let diff = _.difference(list, arr);

	if (diff.length === 0) {
		return true;
	} else {
		throw new Error("Missing: " + diff);
	}

}

function hasOnly(list, arr) {

	// Remove ignored files and directories
	arr = _.difference(arr, ignored);

	let forward = _.difference(list, arr);
	let backward = _.difference(arr, list);

	return forward.length === backward.length;

}

function filesArray(dir) {

	return fs.readdirSync(dir);

}