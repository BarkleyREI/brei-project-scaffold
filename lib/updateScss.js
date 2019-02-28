const fs = require('fs');
const path = require('path');
const nodeDir = require('node-dir');
const _ = require('lodash');
const collection = [
	{
		'name': 'partials',
		'searchName': 'partials',
		'dir': './app/assemble/partials',
		'recursive': true
	},
	{
		'name': 'modules',
		'searchName': 'modules',
		'dir': './app/assemble/modules',
		'recursive': true
	},
	{
		'name': 'templates',
		'searchName': 'assemble',
		'dir': './app/assemble/.',
		'recursive': false
	}
];

const ignored = [
	'.git',
	'node_modules',
	'.DS_Store',
	'thumbs.db',
	'Thumbs.db'
];

/*

This script runs through each directory in the collection object above and generates an appropriate .scss file in the
respective directory under /app/scss/.

The recursive parameter is important. It is set to false on templates so that the templates folder isn't filled with
all the sass files for partials and modules.

Ideas for the future for this include:
- Scanning the handlebars files for a flag that prevents a sass file from being generated.
- Scanning for a flag that determines a different composite sass file for the intention of including in a different
	master css file other than main.css (for example, level.css) https://github.com/BarkleyREI/generator-brei-app/issues/64

 */

collection.forEach(function (data) {

	let ff = fs.readdirSync(data.dir);

	ff = _.difference(ff, ignored);

	ff = ff.filter(hbs => hbs.indexOf('.hbs') !== -1);

	// console.log(ff);

	var names = [];
	var finalScssFile = '';
	var finalPath = './app/scss/' + data.name + '/_assemble-' + data.name + '.scss';

	console.log('Updating Assemble.io ' + data.name + ' sass...');

	ff.forEach(function (entry) {
		// Add names to be added to .scss file
		var regex = new RegExp('^.+' + data.searchName + '/');

		if (!/^_+/.test(entry)/* && data.name !== 'templates'*/) {
			entry = '_' + entry;
		}

		// console.log(data.name, entry);

		if (data.name === 'templates') {
			if (entry !== '_index.hbs') {
				names.push(entry);
				// writeMissingFiles(data, entry);
			}
		} else {
			names.push(entry);
			// writeMissingFiles(data, entry);
		}
	});

	// console.log(data.name, names);

	names.sort();

	let rmf = writeMissingFiles(data, names);

	rmf.then(function () {

		names.forEach(function (name) {
			var importPath = '@import \'';

			importPath = importPath + name;
			finalScssFile = finalScssFile + importPath + '\';\n';
		});

		if (finalScssFile == '') {
			console.log('file is empty!!!');
		} else {

			// fs.writeFileSync(finalPath, finalScssFile, function (err) {
			// 	if (err) {
			// 		throw err;
			// 	}
			//
			// 	console.log('Done! ' + data.name + ' updated!');
			// });

		}

	});
});

// Check to see if same name .scss file exists. If not, create one
function writeMissingFiles(data, names) {

	// console.log("\n====\nwriteMissingFiles()\n\n" + data + "\n" + entry + "\n====\n");

	// var name = entry.replace('.hbs', '');
	// var filename = data.name + '/' + name + '.scss';
	// var readPath = './app/scss/' + filename;

	let fle = fs.readdirSync('./app/scss/' + data.name);

	const exclu = [
		'_assemble-modules.scss',
		'_assemble-partials.scss',
		'_assemble-templates.scss'
	];

	fle = _.difference(fle, exclu);
	fle = _.difference(fle, ignored);

	// let ff = fs.readdirSync(readPath);

	// console.log(fle, names);

	fle = fle.map(item => item.replace('.scss', ''));
	names = names.map(item => item.replace('.hbs', ''));

	let diff = _.difference(names, fle);

	// console.log(fle, names, diff);

	return new Promise(function (resolve, reject) {

		let errored = false;

		diff.forEach(function (x) {

			var cleanName = x.replace('_', '');
			var content = '.' + cleanName + ' {\n\n}\n';
			var filename = x + '.scss';

			if (cleanName.length >= 1) {
				fs.writeFile('./app/scss/' + data.name + '/' + filename, content, function (err) {

					if (err) {
						errored = err;
					}

					console.log('\nI just wrote ' + filename + ' for you!\n');

				});
			}

		});

		if (errored) {
			reject(errored);
		} else {
			resolve();
		}

	});

	// fs.readFile(readPath, 'utf8', function (err, file) {
	//
	// 	// console.log("reading file " + readPath);
	//
	// 	if (err) {
	// 		console.log('A SASS file doesnt exist. Creating ' + filename + ' for you.');
	// 	}
	//
	// 	if (!file && name != null && typeof name !== 'undefined') {
	//
	// 		// console.log('checking name: ', name, typeof name, name.length);
	//
	// 		if (typeof name === 'object') {
	// 			name = name[0];
	// 		}
	//
	// 		var writePath = readPath;
	// 		var cleanName = name.replace('_', '');
	// 		var content = '.' + cleanName + ' {\n\n}\n';
	//
	// 		// console.log('== no file contents ==');
	//
	// 		if (cleanName.length >= 1) {
	// 			fs.writeFile(writePath, content, function (err) {
	//
	// 				if (err) {
	// 					throw err;
	// 				}
	//
	// 				console.log('\nI just wrote ' + filename + ' for you!\n');
	//
	// 			});
	// 		}
	//
	// 	}
	// });
};
