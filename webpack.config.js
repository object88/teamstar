const path = require('path')

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin('bundle.css')

module.exports = {
  devServer: {
    contentBase: './static'
  },
  devtool: 'inline-source-map',
  entry: {
    main: ['./src/index.ts', './src/elements.ts']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({ 
          fallback:'style-loader',
          use:['css-loader','sass-loader'],
        }),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    extractSass,
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.css', '.scss' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static')
  }
}