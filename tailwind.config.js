/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        gray: {
          900: '#111827', // Equivalent to bg-gray-900
          800: '#1F2937', // Equivalent to bg-gray-800
          700: '#374151', // Equivalent to hover:bg-gray-700
          400: '#9CA3AF', // Equivalent to text-gray-400
        },
        green: {
          400: '#84CC16', // Equivalent to text-green-400
          // Add other green shades if needed
        },
        blue: {
          400: '#60A5FA', // Equivalent to text-blue-400
          300: '#93C5FD', // Equivalent to hover:text-blue-300
        },
        white: '#FFFFFF', // Add white if not already there
      },
    },
  },
  plugins: [],
};
