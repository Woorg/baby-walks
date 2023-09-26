const path = require('node:path');

const nextConfig = {
	experimental: {
		nextScriptWorkers: true,
	},
	webpack(config) {
		config.resolve.alias = {
			...config.resolve.alias,
			'@styles': path.resolve(__dirname, 'public/assets/styles'),
			'@images': path.resolve(__dirname, 'public/assets/images'),
			'@components': path.resolve(__dirname, 'src/app/components'),
		};

		return config;
	},
};

module.exports = nextConfig;
