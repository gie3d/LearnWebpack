var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/main.js'
	],
	output: {
		path: './dist',
		filename: 'bundle.js'
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
		})
	]
}