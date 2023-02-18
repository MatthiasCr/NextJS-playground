/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Source Serif Pro', 'Georgia', 'serif'],
      body: ['Synonym', 'system-ui', 'sans-serif'],
    },
    textUnderlineOffset: 4,
  },
  plugins: [],
}
