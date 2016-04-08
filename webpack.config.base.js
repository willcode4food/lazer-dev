var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

// var libraryName = 'lazer-dev';

var PATHS = {
	app: path.resolve(__dirname, 'src'),
	build: path.resolve(__dirname, 'build')
}

// var outputFile = libraryName + '.[name].js';

module.exports = {
	common: {
		entry: {
			app: path.resolve(PATHS.app, 'index')
		},
		output: {
			path: PATHS.build,
			filename: '[name].js'
		},
		root: path.resolve('.'),
		resolve: {
			extensions: ['', '.js']
		},
		plugins: [
			new HtmlwebpackPlugin({
					inject: 'body',
					filename: 'index.html',
					template: path.resolve(PATHS.app, 'index.html'),
					title: 'Lazer Dev Runner'
			})
		]
	}
};