var HtmlwebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
	entry: {
		main: ['babel-polyfill', './src/main.js'],
		test: ['./src/js/test.js']
	},
	output: {
		path: './dist',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{ 
				test: /\.jsx?$/, 
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['es2015']
				}
			},
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader'
			}
		]
	},
	plugins: [
		new HtmlwebpackPlugin({
			title: 'Intro to webpack',
			template: 'src/index.html'
		}),
		new UglifyJsPlugin({
			beautify: false,
			mangle: { screw_ie8 : true },
			compress: { screw_ie8: true, warnings: false },
			comments: false
		})
	]
}