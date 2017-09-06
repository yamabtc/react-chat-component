var path = require('path');

module.exports = {
  entry: {
    './dist/index': './src/index'
  },
  output: {
    path: path.join(__dirname),
    filename: '[name].js',
    publicPath: '/example/compiled/',
    // library: 'library',
    libraryTarget: 'umd',
    umdNamedDefine: true
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
