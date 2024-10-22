// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        signika: ['"Signika Negative"', 'sans-serif'], // Add the Signika font
      },
    },
  },
  plugins: [],
};
