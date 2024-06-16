/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // primary: "#00c3c7",
        primary: "#056cb8",  
        secondary: "#FFCF22",
        dark: "#00c3c7",
      },
      container: {
        
        center: true,
        padding: {
          
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
