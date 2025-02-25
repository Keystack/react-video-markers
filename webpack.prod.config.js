const pkg = require('./package.json');
const path = require('path');
const libraryName= pkg.name;

module.exports = {
  devtool: 'sourcemap',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: './dist',
    filename: 'index.js',
    sourceMapFilename: 'index.map',
    library: libraryName,
    libraryTarget: 'umd'
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.(js|jsx)/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        'url-loader'
      ]
    }]
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
  },
};
