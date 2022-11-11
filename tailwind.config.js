/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ABeeZee: "ABeeZee",
        Abyssinica_SIL: "Abyssinica SIL",
        Actor: "Actor",
        Akaya_Kanadaka: "Akaya Kanadaka",
        Allura: "Allura",
        Amatic_SC: "Amatic SC",
        Cabin: "Cabin",
        Leckerli_One: "Leckerli One",
      }
    },

    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1110px',
      },
    },
  },
  plugins: [],
}
