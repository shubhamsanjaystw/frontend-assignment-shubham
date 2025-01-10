const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle name
    clean: true, // Cleans the output directory before each build
  },
  mode: 'development', // Use 'production' for optimized builds
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Handle JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: './dist', // Serve files from the dist directory
    port: 8080, // Port for the dev server
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement
  },
};
