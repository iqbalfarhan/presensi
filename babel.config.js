module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					alias: {
						'@components': './src/Components',
						'@constants': './src/Constants',
						'@fonts': './src/Fonts',
						'@images': './src/Images',
						'@interfaces': './src/Interfaces',
						'@navigations': './src/Navigations',
						'@screens': './src/Screens',
						'@states': './src/States',
						'@utils': './src/Utils',
					},
				},
			],
		],
	};
};
