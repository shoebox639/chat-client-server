module.exports = {
  entry: './client/js/main.js',
  output: {
    filename: 'main.js',
    libraryTarget: 'umd'
  },
  externals: {
    angular: 'angular',
    'angular-route': 'angular-route',
    'angular-cookies': 'angular-cookies',
    'angular-bootstrap': 'angular-bootstrap'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader?presets[]=es2015" },
      { test: /\.html$/, loader: 'raw' },
    ]
  }
}