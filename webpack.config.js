var path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname),
    filename: 'example/index.js',
    publicPath: '/example/compiled/'
  },

  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  devServer: {
    contentBase: './example',
    host: 'localhost',
    inline: true,
    info: false
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ['.js', '.jsx' ]
  }
};
