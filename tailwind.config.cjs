/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      backGround: '#F2F1F3',
      lightShades: '#CBBA8E',
      lightAccent: '#8BA2C5',
      mainBrand: '#315694',
      darkAccent: '#424242',
      darkShades: '#545454',
      primary: '#2C5795'
    },
    fontFamily: {
      sans: ['Source Code Pro', 'seriff']
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
