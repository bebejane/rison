module.exports = (phase, {defaultConfig}) => {
  if ('sassOptions' in defaultConfig) {
      defaultConfig['sassOptions'] = {
          includePaths: ['./components', './pages'],
          prependData: `@import "./styles/partials/mediaqueries";`,
      }
  }
  return defaultConfig;
}