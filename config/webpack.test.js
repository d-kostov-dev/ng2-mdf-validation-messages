var helpers = require('./helpers');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
          {
              test: /\.ts$/,
              loaders: ['awesome-typescript-loader', 'angular2-template-loader']
          },
        ]
    }
}
