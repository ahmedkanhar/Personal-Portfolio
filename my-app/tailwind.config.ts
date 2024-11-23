/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include all files in the `app` directory
    './components/**/*.{js,ts,jsx,tsx}', // Include components directory
  ],
  theme: {
    extend: {
      animation: {
        float: "float 3s ease-in-out infinite", // Faster float (3 seconds)
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" }, // Start and end at the same position
          "50%": { transform: "translateY(-30px)" }, // Float up more (larger distance)
        },
      },
    },
  },
  plugins: [],
};
