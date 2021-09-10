module.exports = (phase, {defaultConfig}) => {
  if ('sassOptions' in defaultConfig) {
      defaultConfig['sassOptions'] = {
          includePaths: ['./components', './pages'],
          prependData: `
            @import "./styles/partials/mediaqueries"; 
            @import "./styles/partials/variables";
            @import "./styles/partials/grid";
          `,
      }
  }
  defaultConfig.redirects = async () => {
    return [{
      source: '/home',
      destination: '/',
      permanent: true,
    }]
  }
  return defaultConfig;
}