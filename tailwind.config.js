/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        // Add other font families as needed
      },
      colors:{
        primary:"#0070f3",
      }
    },

    container:{
      center:true,
      padding:{
        Default:"20px",
        md:"40px",
      }
    }
  },
  plugins: [],
}

