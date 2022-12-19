/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main:{
          white : "hsl(0, 0%, 100%)"
        },
        dark:{
          darkBlue: "hsl(209, 23%, 22%)",
          veryDarkBlue: "hsl(207, 26%, 17%)"
        },
        light:{
          veryDarkBlue: "hsl(200, 15%, 8%)",
          darkGray: "hsl(0, 0%, 52%)",
          veryLightGray: "hsl(0, 0%, 98%)",

        }
      },
      screens:{
        sm: "768px"
      }
    },
  },
  plugins: [],
}