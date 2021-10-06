const withGraphql = require('next-plugin-graphql')

module.exports = withGraphql({
  sassOptions : {
    includePaths: ['./components', './pages'],
    prependData: `
      @use "sass:math";
      @import "./styles/partials/mediaqueries"; 
      @import "./styles/partials/variables";
      @import "./styles/partials/grid";
    `,
  }
})