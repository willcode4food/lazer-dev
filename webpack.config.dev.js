var webpack = require('webpack');
var merge = require('webpack-merge');
var base = require('./webpack.config.base');
var autoprefixer = require('autoprefixer');
module.exports = merge(base.common, {
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
		module: {
			preLoaders: [
				{
					test: /\.js$/,
					loader: 'eslint-loader',
					exclude: ['/node_modules', '/src/lib', '/build']
				}
			],
			loaders: [
				{
					test: /\.js$/,
					loader: 'babel',
					exclude: ['/node_modules', '/src/lib', '/build']
				},
				{
					test: /\.css$/,
					loader: 'style!css?modules&sourceMap&localIdentName=[local]_[hash:base64:5]&importLoaders=1!postcss-loader',
					exclude: ['/node_modules', '/src/lib', '/build']
				},
				{ 
					test: /\.(png|jpg|svg)$/,
					loader: 'file-loader?limit=8192',
					exclude: ['/node_modules', '/src/lib', '/build']
				},
				{
			      test: /\.(woff|eot|ttf|png|jpg|svg)$/,
			      loader: 'url-loader?limit=100000',
			      exclude: ['/node_modules', '/src/lib', '/build']
			  }
			]
		},
		// support last two released versions of each major browser as well as ie >= 9
		// major browsers listed here: https://github.com/ai/browserslist
		postcss: [
			autoprefixer({ browsers: ['last 2 versions', 'ie >= 9'] })
		],
		node: {
			fs: 'empty'
		},
		plugins:[
			new webpack.HotModuleReplacementPlugin()
		]
});