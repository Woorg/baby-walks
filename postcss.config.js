module.exports = {
	plugins: {
		'postcss-simple-vars': {},
		'tailwindcss/nesting': {},
		'postcss-import': {},
		'postcss-mixins': {},
		tailwindcss: {},
		rfs: {
			twoDimensional: false,
			baseValue: 19,
			unit: 'rem',
			breakpoint: 1920,
			breakpointUnit: 'px',
			factor: 10,
			class: false,
			unitPrecision: 6,
			safariIframeResizeBugFix: false,
			remValue: 19,
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
