module.exports = {
  entry: './src/main.js',
  output: {
    filename: './dist/batbelt.js'
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
