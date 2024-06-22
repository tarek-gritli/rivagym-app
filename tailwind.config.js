/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-20": "#D6F3FC",
        "blue-50": "#A6E4F4",
        "blue-100": "#00A8E1",
        "blue-500": "#002855",
        "primary-100": "#D6F3FC",
        "primary-300": "#A6E4F4",
        "primary-500": "#00A8E1",
        "secondary-400": "#005F8C",
        "secondary-500": "#001D3D",
      },
      backgroundImage: () => ({
        "gradient-blue": "linear-gradient(90deg, #001D3D 0%, #005F8C 100%)", // Updated to match new color palette
        "mobile-home": "url('./assets/athlete.png')",
      }),
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        rivatext: "url('./assets/riva-text.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },

  plugins: [],
};
