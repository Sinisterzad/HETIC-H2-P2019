module.exports = {

  // Points d'entrée
  entry: {
    app: ['./assets/js/app.js']
  },

  // Configuration de l'export
  output: {
    path: './build',
    filename: "js/[name].js"
  }

}