module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{js,css,png,svg,html,txt}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};