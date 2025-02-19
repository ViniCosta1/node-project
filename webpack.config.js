const path = require('path');

module.exports = {
  entry: './src/client/index.js', // Ponto de entrada   
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Adiciona suporte para extensões .jsx
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Aplica o Babel a arquivos .js e .jsx
        exclude: /node_modules/,
        use: 'babel-loader', // Usa o loader do Babel
      },
    ],
  },
  devtool: 'source-map', // Gera source maps
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
    hot: true,
  },
};