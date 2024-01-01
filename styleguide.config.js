module.exports = {
  components: 'src/components/**/*.tsx',
title: "Radix Component Library",
// serverPort: 3020,
template: {
  favicon: "https://raw.githubusercontent.com/Cool-Runningz/radix-component-library/main/favicon.ico",
},
webpackConfig: {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: "eval-source-map"
},
};
