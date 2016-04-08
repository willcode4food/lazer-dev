var webpack = require('webpack');
var merge = require('webpack-merge');
var base = require('./webpack.config.base');

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
			loaders: [
				{
					test: /\.js$/,
					loader: 'babel',
					exclude: ['/node_modules', '/src/lib', '/build']
				},
				{
					test: /\.js$/,
					loader: 'eslint-loader',
					exclude: ['/node_modules', '/src/lib', '/build']
				},
				{
					test: /\.css$/,
					loaders: ['css', 'autoprefixer'],
					exclude: ['/node_modules', '/src/lib', '/build']
				},
				{ 
					test: /\.(png|jpg|svg)$/, 
					loader: 'url-loader?limit=8192',
					exclude: ['/node_modules', '/src/lib', '/build'] 
				},
				{
			      test: /\.(woff|eot|ttf)$/,
			      loader: 'url-loader?limit=100000',
			      exclude: ['/node_modules', '/src/lib', '/build']
			    }
			]
		},
		node: {
			fs: 'empty'
		},
		plugins:[
			new webpack.HotModuleReplacementPlugin()
		]
});