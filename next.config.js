const withFonts = require('nextjs-fonts');
module.exports = withFonts({
  useFileSystemPublicRoutes: false,
  webpack(config, options) {
    return config;
  }
});
