module.exports = (file, options, env) => {

	console.log('hello', file, options, env);

	let config = {
		plugins: {}
	};

	if (typeof file.env !== 'undefined' && file.env === 'scss') {
		// config.parser = require('postcss-sass');
		config.plugins = {
			'postcss-sorting': {
				'order': [
					'custom-properties',
					'dollar-variables',
					{
						type: 'at-rule',
						name: 'extend'
					},
					'at-variables',
					'declarations',
					'rules',
					'at-rules'
				],
				'properties-order': 'alphabetical'
			}
		};
	} else {
		config.plugins = {
			'autoprefixer': {
				browsers: [
					'> 5% in US',
					'last 2 versions',
					'Firefox ESR',
					'IE >= 8',
					'iOS >= 8'
				],
				remove: false
			},
			'cssnano': false
		};
	}

	return config;

};
