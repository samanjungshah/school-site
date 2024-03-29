/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      xxl: "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        brandColor: '#004C3F', // Replace with your desired color code
        brandSoftColor: '#008060', // Replace with your desired color code
      },
      fontFamily: {
        'serif': ['Lora', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

