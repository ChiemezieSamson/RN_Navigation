/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: 'dark',
	corePlugins: {
		preflight: true,
	}, 
  theme: {
    extend: {},
  },
  plugins: [],
}

