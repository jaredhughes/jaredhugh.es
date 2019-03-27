require('dotenv').config()
const webpack = require('webpack')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withTypescript = require('@zeit/next-typescript')

const USE_ENV_VARS = ['NODE_ENV', 'MAPBOX_ACCESS_TOKEN', 'CURRENT_CITY']

module.exports = withCSS(
  withTypescript(
    withSass({
      sassLoaderOptions: {
        includePaths: ['node_modules'],
      },
      webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(USE_ENV_VARS))

        return config
      },
    }),
  ),
)
