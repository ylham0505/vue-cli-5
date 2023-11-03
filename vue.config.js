const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = defineConfig({
//   // ...
//   css: {
//     loaders: {
//       // ...
//       // Препроцессор SCSS
//       'scss': {
//         loader: 'sass-loader',
//         options: {
//           // Включить автопрефиксирование
//           // Autoprefixer
//           autoprefixer: {
//             // включить автопрефиксирование для всех браузеров
//             browsers: ['last 2 versions', 'ie 11'],
//           },
//         },
//       },
//     },
//   },
// });
// module.exports = defineConfig({
//       module: {
//         rules: [
//           {
//             test: /\.sass$/,
//             use: ['sass-loader'],
//           },
//         ],
//       },
// })
