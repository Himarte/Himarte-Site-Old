const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],

	darkMode: 'class',

	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 5s linear infinite'
			},
			colors: {
				// flowbite-svelte
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				},
				secundary: {
					// #013CA1
					50: '#E6F0FF',
					100: '#CCE1FF',
					200: '#99C3FF',
					300: '#66A5FF',
					400: '#3397FF',
					500: '#013CA1',
					600: '#002F81',
					700: '#002360',
					800: '#001840',
					900: '#000F20'
				},
				tertiary: {
					//#111B2D
					50: '#D9E0ED',
					100: '#4E5F8C',
					200: '#3D4A6F',
					300: '#2A344D',
					400: '#1D2638',
					500: '#111B2D',
					600: '#0D1524',
					700: '#0A101C',
					800: '#060B13',
					900: '#030609'
				}
			}
		}
	}
};

module.exports = config;
