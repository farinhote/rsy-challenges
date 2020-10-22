const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    const apiClient = process.env.VUE_APP_API; // Possibility of adding mocked endpoints if

    config.resolve.alias.set(
      'api-client',
      path.resolve(__dirname, `src/api/${apiClient}`),
    );
  },
};
