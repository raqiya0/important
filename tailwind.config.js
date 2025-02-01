/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        text: "#e9ebf1",
        background: "#08090c",
        primary: "#5f6e91",
        secondary: "#51344c",
        accent: "#784f5d",
      },
      
    }
    
  },
  plugins: [],
}

