const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './frontend/scripts/app.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
      },
    module: {
        rules: [{
          test: /\.css/,
            use : [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
          }, {
            test   : /\.scss$/,
            use    : [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          }, {
            test   : /\.twig$/,
            exclude: /(node_modules|bower_components)/,
            use    : {
              loader: 'twig-loader'
            }
          }
        ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'app.css'
      }),
    ],
    devtool: 'inline-cheap-module-source-map'
};