/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	mode: 'jit',
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '12px',
				sm: '12px',
				lg: '20px',
				'2xl': '46px',
			},
		},

		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1440px',
			},
			maxWidth: {
				'8xl': '1440px',
			},
			fontFamily: {
				manrope: ['var(--manrope)'],
				'cormorant-infant': ['var(--cormorant)'],
				'noto-serif': ['var(--noto)'],
			},
			colors: {
				pampas: {
					DEFAULT: '#F3EFEB',
					50: '#FFFFFF',
					100: '#FFFFFF',
					200: '#FFFFFF',
					300: '#FFFFFF',
					400: '#FFFFFF',
					500: '#F3EFEB',
					600: '#DED3C8',
					700: '#C9B7A5',
					800: '#B49B82',
					900: '#9E7F5F',
					950: '#8D7155',
				},
			},
			backgroundColor: {
				input: 'rgba(255, 255, 255, 0.11)',
			},
			backgroundImage: {
				'gradient-button': 'linear-gradient(93deg, #ffe8db -108.14%, #fccdb1 90.48%)',
			},
			boxShadow: {
				btn: '0px 0px 20px 0px #CE8C65',
			},
		},
	},
	plugins: [],
};
