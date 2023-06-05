const svgrPlugin = require('vite-plugin-svgr');
const { mergeConfig } = require('vite');

module.exports = {
  async viteFinal(config) {
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode']
      },
      plugins: [
        svgrPlugin({
          svgrOptions: {
            icon: true
          }
        })
      ]
    });
  },
  typescript: {
    reactDocgen: 'react-docgen'
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-react-router-v6',
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  }
};
