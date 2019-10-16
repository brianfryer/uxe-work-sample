module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('precss'),
    require('rucksack-css'),
  ]
}
