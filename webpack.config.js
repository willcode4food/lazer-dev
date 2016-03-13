var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlwebpackPlugin = require('html-webpack-plugin')

var libraryName = 'lazer-dev';
var PATHS = {
	app: path.resolve(__dirname, 'src'),
	build: path.resolve(__dirname, 'build')
}

var plugins = [], outputFile;
var outputFile = libraryName + '.[name].js';


plugins.push(new CleanWebpackPlugin('build', {
				root: __dirname,
				verbose: true,
				dry: false
			})
)
plugins.push(new HtmlwebpackPlugin({
				inject: 'body',
				filename: 'index.html',
				template: path.resolve(PATHS.app, 'index.html'),
				title: 'Lazer Dev'
		}))
plugins.push(new webpack.HotModuleReplacementPlugin())
var config = {
	devtool: 'inline-source-map',
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,

		// display only errors to reduce the amount of output
		stats: 'errors-only',

		// parse host and port from env so this is easy to customize
		host: process.env.HOST,
		port: process.env.PORT
	},
	entry: PATHS.app,
	output: {
		path: PATHS.build,
		filename: 'lazer-dev'
	},
	root: path.resolve('.'),
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: plugins
};

module.exports = config;