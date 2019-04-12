module.exports =  (env, argv) => {
	var config {
		entry: './src/index.js',
		output: {
			filename: 'bundle.js'
		},
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
										"development": argv.mode === 'development'
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