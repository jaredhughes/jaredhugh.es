const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withTypescript = require('@zeit/next-typescript')

module.exports = withCSS(
  withTypescript(
    withSass({
      sassLoaderOptions: {
        includePaths: ['node_modules'],
      },
      webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
        return config
      },
    }),
  ),
)
