module.exports =  (env, argv) => {
	function isDevelopment() {
		return argv.mode === 'development';
	}
	var config = {
		entry: './src/index.js',
		output: {
			filename: 'bundle.js'
		},
		devtool: isDevelopment() ? 'cheap-module-eval-source-map' : 'source-map',
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								[
									'@babel/preset-react',
									{
										"pragma": "React.createElement",
										"pragmaFrag": "React.Fragment",
										"development": isDevelopment()
									}
								]
							]
						}
					}
				}
			]
		}
	};
	return config;
}