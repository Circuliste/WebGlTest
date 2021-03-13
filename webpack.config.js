const path = require('path');

module.exports = {
    mode: "development",
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
        {test:/\.ts$/,exclude: /node_modules/,use:['ts-loader']}
    ],
  },
  resolve: {
    extensions:['.js','.ts']
},
};