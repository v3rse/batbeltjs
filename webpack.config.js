var path = require("path");
module.exports = {
  entry: {
    main: './src/main.js',
    test: './test/test.js'
  },
  output: {
    path: path.join(__dirname,"dist"),
    filename: 'batbelt.[name].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
   extensions: ['','.js']
 },
  watch: true
};
