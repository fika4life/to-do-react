/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', "sans"],
      },
      colors: {
        brightBlue: "hsl(220, 98%, 61%)",
        checkBackground:
          "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        lightGrayishBlue: "hsl(233, 11%, 84%)",
        darkGrayishBlue: "hsl(236, 9%, 61%)",
        veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
      },
    },
  },
  plugins: [],
};
