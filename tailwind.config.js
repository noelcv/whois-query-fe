/** @type {import('tailwindcss').Config} */
require('dotenv').config();
const purgeEnabled = process.env.PURGE_ENABLED || false;
module.exports = {
  mode: 'jit',
  purge: [],
  purge: {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/*.css"
  ]
},
  theme: {
    extend: {},
  },
  plugins: [],
}
