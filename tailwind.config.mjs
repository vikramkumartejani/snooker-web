/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackish: "#2E2E2E",
        greenish: "#63D398",
        grayish: "#637381",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'light-gradient':
          "radial-gradient(50% 50% at 50% 50%, rgba(240, 255, 247, 0) 0%, #F0FFF7 100%)",
        'dark-gradient': "radial-gradient(50% 50% at 50% 50%, #F0FFF7 0%, #F0FFF7 100%)",
      },
    },
  },
  plugins: [],
};
