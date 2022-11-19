/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/articles/**/*.mdx",
  ],
  theme: {
    extend: { }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
