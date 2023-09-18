/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
          primary: {
            25: '#D5C5B8',
            50: '#B7A79B',
            100: '#998A7E',
          },
          secondary: {
            100: '#7A4257',
          },
          grey: {
              0: '#FFFCF7',
              100: '#0A0808'
          },
          danger: "#E7002A",
          success: "#00AB63",
        },
      screens: {
          lg: '1025px',
          xl: '1281px',
          xxl: '1440px'
      },
      container: {
        screens: {
            xxl: '1280px'
        }
      }, 
      borderRadius: {
        'basic': '0.313rem',
      },
      backgroundImage: {
        'offer-pattern': "url('../images/background.png')",
      },
      customClasses: {
        'button-primary': 'rounded-lg border border-gray-800 shadow-inner text-xl px-8 py-3 transition duration-300 ease-in-out hover:bg-secondary-100',
      },
    },
  },
  plugins: [],
}
