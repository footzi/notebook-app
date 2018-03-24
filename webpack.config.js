const path = require('path');

module.exports = {
    entry: './frontend/scripts/app.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
      },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          }, 
          {
            test   : /\.twig$/,
            exclude: /(node_modules|bower_components)/,
            use    : {
              loader: 'twig-loader'
            }
          }
        ]
    }
};