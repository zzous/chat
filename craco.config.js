const { getLoader, loaderByName } = require('@craco/craco');
const CracoAlias = require('craco-alias');

module.exports = {
  devServer: {
    compress: true,
    port: 8080,
    open: false,
    historyApiFallback: true
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        baseUrl: '.'
      }
    },
    {
      plugin: require('craco-plugin-scoped-css')
    }
  ],
  webpack: {
    configure: (webpackConfig, { env }) => {
      if (env === 'development') {
        // const overrideOptions = {
        //   // ... options
        // };
        // const { isFound, match } = getLoader(webpackConfig, loaderByName('style-loader'));

        // if (isFound) match.parent[match.index] = overrideOptions;
      }

      return webpackConfig;
    }
  },
  style: {
    css: {
      loaderOptions: () => ({ url: false })
    }
  }
};
