/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Avenir', 'Arial', 'sans']
    }
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["retro"],
  },
}

