module.exports = {

  // Points d'entrée
  entry: {
    app: ['./assets/js/app.js']
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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ['es2015']
        }
      }
    ]
  }

}