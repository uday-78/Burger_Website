/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryColor: "#010a5e",

        primaryColorLight: "#010d78",

        secondaryColor: "#FFCC00",

        paragraphColor: "#cecece",

        whiteColor: "#fff",

        blackColor: "#000",

        greenColor: "#007936",

        redColor: "#cc3433",

        darkColor: "#000",

        darkColorLight: "#171717",
      },

      keyframes: {
        move:{
          "50%": {transform: 'translateY(-1rem)'}
        }
      },

      animation: {
        'movingY': 'move 2s ease-in-out infinite'
      } ,

      boxShadow: {
        'custom-shadow': 'rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
      }
    },
    container:{
      center: true,
      paddding:{
        DEFAULT: '1rem',
        sm: '1.5rem'
      }
    },

    fontFamily:{
      oswald:['Oswald', 'sans-serif'],
      dmSans:['DM Sans', 'sans-serif'],
    }
  },
  plugins: [],
};
