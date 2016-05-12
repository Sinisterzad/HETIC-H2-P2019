// Si chargé avec Webpack
define(["./operators.js"], function (operators) {
  var test = operators.sum(10, 5) // 15
  console.log(test)
})

// Si chargé avec RequireJS
// define(["operators"], function (operators) {
//   var test = operators.sum(10, 5) // 15
//   console.log(test)
// })