const autoprefixer = require('autoprefixer');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports =  (env, argv) => {
	function isDevelopment() {
		return argv.mode === 'development';
	}
	var config = {
		entry: './src/index.js',
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, './dist')
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					sourceMap: true
				}),
				new OptimizeCSSAssetsPlugin(
				{
					cssProcessorOptions: {
						map: {
							inline: false,
							annotation: true
						}
					}
				})
			]
		},
		plugins: [
			new CleanPlugin(),
			new MiniCSSExtractPlugin({
				filename: "bundle.css"
			})
		],
		devtool: isDevelopment() ? 'cheap-module-source-map' : 'source-map',
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
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						MiniCSSExtractPlugin.loader,
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									autoprefixer()
								]	
							}
						},
						'sass-loader'
					]
				}
			]
		}
	};
	return config;
}
