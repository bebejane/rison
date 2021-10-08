const withPlugins = require('next-compose-plugins');
const withGraphql = require('next-plugin-graphql')
const withTM = require('next-transpile-modules')(['seamless-scroll-polyfill']);
//const withBundleAnalyzer = require('@next/bundle-analyzer')({enabled: process.env.ANALYZE === 'true'})
const sassOptions = {
  includePaths: ['./components', './pages'],
  prependData: `
    @use "sass:math";
    @import "./styles/partials/mediaqueries"; 
    @import "./styles/partials/variables";
    @import "./styles/partials/grid";
  `
}
const nextConfig = {
  devIndicators: {
    buildActivity: false
  }
}

const config = withPlugins([withGraphql, withTM], {sassOptions, ...nextConfig})

module.exports = config