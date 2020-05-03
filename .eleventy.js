// Modules
const readableDate = require('./_11ty/date.js');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const dotenv = require('dotenv').config()

console.log("Running in " + process.env.NODE_ENV + " environment...")

module.exports = function(eleventyConfig) {
  
    // Layout aliases
    eleventyConfig.addLayoutAlias('default', 'layouts/base.njk');

    /* Pass through */
    eleventyConfig.addPassthroughCopy('src/images')

    // Plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Filters
    eleventyConfig.addFilter('date', readableDate)
    // ... cssmin
    // ... jsmin

    // Custom Collections
    eleventyConfig.addCollection()

    // Custom Shortcodes

    // Transforms
    if (process.env.NODE_ENV == 'production') {
    eleventyConfig.addTransform("htmlmin", require('./_11ty/htmlmin.js') );
    }
  
    return {
      dir: { input: 'src', output: 'dist', data: '_data' },
      passthroughFileCopy: true,
      templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
      htmlTemplateEngine: 'njk'
    }
  }