/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-gray-50',
    'min-h-screen',
    'scroll-smooth'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

