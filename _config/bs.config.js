module.exports = {
	files: [
		'./app/**/*.html',
		'./app/css/*.css',
		'./app/js/**/*.js'
	],
	reloadThrottle: 5000,
	reloadDelay: 1000,
	server: {
		baseDir: 'app',
		index: 'index.html'
	},
	watch: false
};
