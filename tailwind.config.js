/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    fontFamily: {
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
    },
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '840px',
      },
      backgroundImage: {
        'hero-pattern':
          'linear-gradient(324.93deg, #007AFF 0.74%, #0F70DA 100%)',
        'feedback-image': "url('/src/assets/contactusimage.png')",
        'contact-image': "url('/src/assets/contactusimage.png')",
      },
      linearGradientDirections: {
        324: '324.93deg',
      },
    },
  },
  plugins: [],
};
