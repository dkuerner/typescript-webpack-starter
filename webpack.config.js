module.exports = {
	entry: './App.ts',
	output: {
		filename: 'bundle.js'
	},
	resolve: {
		extensions: [ '', '.webpack.js', '.web.js', '.ts', '.js']
	},
	module: {
		loaders: [
			{ test: /\.ts(x?)$/, loader: 'babel-loader!ts-loader' }
		]
	}
}
	
