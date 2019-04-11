const config = require('./_brei.json');

exports = module.exports = {
	'assemble': [
		{
			'cwd': config.app,
			'src': [
				'modules/*.html',
				'*.html'
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
