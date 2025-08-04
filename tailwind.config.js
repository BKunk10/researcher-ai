/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Add other folders as needed
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Remove "./src/**/*" if you don't use src/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};