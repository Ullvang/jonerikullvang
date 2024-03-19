/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'brand-dark': '#151515',
				'brand-light-dark': '#242424',
				'brand-light-green': '#ADFFDA',
				'brand-green': '#4CE19E',
				'brand-dark-green': '#318E64',
				'brand-neon-green': '#53E14C'
			}
		}
	},
	plugins: []
};
