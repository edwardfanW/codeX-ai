/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "aquarium-blue": "#0f4c81",
        "aquarium-teal": "#18a2b8",
        "sand": "#f4e9d4"
      }
    }
  },
  plugins: []
};
