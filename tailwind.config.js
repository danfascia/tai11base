module.exports = {
  purge: {
    content: ['./dist/**/*.html'],
    
    // Manually whitelist style classes for PurgeCSS to ignore
    options: {
      whitelist: [],
    }
},
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
