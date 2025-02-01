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
      screens: {
        // mobile: '400px',
        // => @media (min-width: 640px) { ... }
        // tablet: '640px',
        // => @media (min-width: 640px) { ... }
  
        // laptop: '1024px',
        // => @media (min-width: 1024px) { ... }
  
        // desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      
    }
    
  },
  plugins: [],
}

