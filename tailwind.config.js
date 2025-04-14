/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      boxShadow: {
        '3xl': '0px 15px 30px -5px rgba(0, 0, 0, 0.3)', // Example of a stronger shadow
        '4xl': '10px 10px 40px 20px rgba(0, 0, 0, 0.3)',
        'even': '0 0 8px 2px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
    },
  },
  plugins: [],
}

