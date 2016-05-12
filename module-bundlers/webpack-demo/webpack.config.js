var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')

module.exports = {

  // Points d'entrée
  entry: {
    main: ['./assets/js/main.js']
  },

  // Configuration de l'export
  output: {
    path: './build',
    filename: "js/[name].js"
  },

  // Configuration des loaders
  module: {
    loaders: [
      {
        test: /\.styl$/,
        // loader: "style-loader!css-loader!stylus-loader",
        loader: ExtractTextPlugin.extract('css-loader!postcss-loader!stylus-loader')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

  // Configuration des plugins
  plugins: [
    new ExtractTextPlugin('css/[name].css') // Permet d'extraire le fichier css
  ],

  // Configuration de postcss
  postcss: function () {
    return [autoprefixer]; // Inclusion du plugin autoprefixer
  },

}