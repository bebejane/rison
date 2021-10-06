const withPlugins = require('next-compose-plugins');
const withGraphql = require('next-plugin-graphql')
const withTM = require('next-transpile-modules')(['seamless-scroll-polyfill']);
const sassOptions = {
  includePaths: ['./components', './pages'],
  prependData: `
    @use "sass:math";
    @import "./styles/partials/mediaqueries"; 
    @import "./styles/partials/variables";
    @import "./styles/partials/grid";
  `
}
const nextOptions = {
  devIndicators: {
    autoPrerender: false,
  },
}
module.exports = withPlugins([withGraphql, withTM], {sassOptions, ...nextOptions})