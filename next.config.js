const withFonts = require('next-fonts');
module.exports = withFonts({
  useFileSystemPublicRoutes: false,
  webpack(config, options) {
    return config;
  },
  future: {
    webpack5: true
  }
});
