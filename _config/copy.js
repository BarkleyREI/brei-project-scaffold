const config = require('./_brei.json');

const root = __dirname + '/..';

const app = root + '/' + config.app;
const dist = root + '/' + config.dist;
const deploy = root + '/' + config.deploy;

exports = module.exports = {
	'css': [
		{
			'cwd': app,
			'dot': true,
			'dest': dist,
			'src': [
				'css/**/*'
			]
		}
	],
	'dist': [
		{
			'cwd': app,
			'dot': true,
			'dest': dist,
			'src': [
				'modules/*.html',
				'*.html'
			]
		},
		{
			'cwd': app,
			'dot': true,
			'dest': dist,
			'src': [
				'js/**/*'
			]
		}
	],
	'deploy': [
		{
			'cwd': dist,
			'dot': true,
			'src': [
				'**'
			],
			'dest': deploy
		}
	]
};
