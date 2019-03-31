'use strict';

const assemble = require('assemble');
const assembleHelpers = require('assemble-helpers');
const extname = require('gulp-extname');
let app = assemble();

const _dir = __dirname + '/';

app.use(assembleHelpers());

app.task('load', function (cb) {
	app.create('includes', {viewType: 'partial'});
	app.create('modules', {viewType: 'renderable'});

	app.helpers([
		'handlebars-helpers/lib',
		require(_dir + '../app/assemble/helpers/helpers.js')
	]);

	app.partials([
		_dir + '../app/assemble/includes/*.hbs',
		_dir + '../app/assemble/partials/*.hbs',
		_dir + '../app/assemble/modules/*.hbs'
	]);

	app.layouts(_dir + '../app/assemble/layouts/*.hbs');

	app.pages(_dir + '../app/assemble/*.hbs');
	app.modules(_dir + '../app/assemble/modules/*.hbs');

	app.option('layout', 'default.hbs');

	cb();
});

app.task('default', ['load'], function () {

	return app.toStream('pages')
		.pipe(app.renderFile())
		.pipe(extname({ext: '.html'}))
		.pipe(app.dest('app'));

});

app.task('modules', ['load'], function () {

	return app.toStream('modules')
		.pipe(app.renderFile())
		.pipe(extname({ext: '.html'}))
		.pipe(app.dest('app/modules'));

});

module.exports = app;
