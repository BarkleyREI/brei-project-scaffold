const config = require('./_brei.json');

exports = module.exports = {
	'css': [
		{
			'cwd': config.app,
			'dot': true,
			'dest': '../' + config.dist,
			'src': [
				'css/**/*'
			]
		}
	],
	'dist': [
		{
			'cwd': config.app,
			'dot': true,
			'dest': '../' + config.dist,
			'src': [
				'modules/*.html',
				'*.html'
			]
		}
	],
	'deploy': [
		{
			'cwd': config.dist,
			'dot': true,
			'src': [
				'**'
			],
			'dest': config.deploy
		}
	]
};
