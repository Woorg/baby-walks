module.exports = {
	plugins: {
		'tailwindcss/nesting': {},
		'postcss-simple-vars': {},
		'postcss-import': {},
		'postcss-mixins': {},
		tailwindcss: {},
		rfs: {
			twoDimensional: false,
			baseValue: 16,
			unit: 'rem',
			breakpoint: 1440,
			breakpointUnit: 'px',
			factor: 10,
			class: false,
			unitPrecision: 6,
			safariIframeResizeBugFix: false,
			// remValue: 16,
		},
		'postcss-preset-env': {
			autoprefixer: { grid: true },
			stage: 0,
			features: {
				clamp: true,
				'logical-properties-and-values': true,
				'media-query-ranges': {
					preserve: true,
				},
				'custom-properties': true,
			},
		},
	},
};
