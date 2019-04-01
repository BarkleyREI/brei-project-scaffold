const config = require('./_brei.json');

exports = module.exports = {
	'assemble': [
		{
			'cwd': config.app,
			'src': [
				'modules/*.hbs',
				'*.hbs'
			]
		}
	],
	'dist': [
		{
			'cwd': config.dist,
			'src': [
				'*'
			]
		}
	],
	'deploy': [
		{
			'cwd': config.deploy,
			'src': [
				'css/**/*',
				'js/**/*',
				'img/**/*',
				'modules/*.html',
				'*.html'
			]
		}
	]
};
