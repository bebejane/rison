const withPlugins = require('next-compose-plugins');
const withGraphql = require('next-plugin-graphql')
const withTM = require('next-transpile-modules')(['seamless-scroll-polyfill']);
const withBundleAnalyzer = require('@next/bundle-analyzer')({enabled: process.env.ANALYZE === 'true'})
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
    buildActivity: false
  },
  distDir: 'out'
}

const config = withPlugins([withBundleAnalyzer, withGraphql, withTM], {sassOptions, ...nextOptions})

module.exports = config