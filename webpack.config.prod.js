var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var base = require('./webpack.config.base');
var pkg = require('./package.json');

module.exports = merge(base.common, {
	entry: {
		vendor: Object.keys(pkg.dependencies)
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
		plugins:[
			new CleanWebpackPlugin('build', {
					root: __dirname,
					verbose: true,
					dry: false
			}),
			new webpack.optimize.UglifyJsPlugin({ 
					compress: false
			}),
			new webpack.optimize.CommonsChunkPlugin({
					names: ['vendor']
			})
		]
});