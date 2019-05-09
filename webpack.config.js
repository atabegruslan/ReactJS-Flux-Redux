var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

var common = {
    // TODO: Add common Configuration
  devtool: debug ? "inline-sourcemap" : null,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },  
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};

var reactConfig = Object.assign({}, common, {
  name: "React",
  entry: `${__dirname}/src/react/js/scripts.js`,
  output: {
    path: __dirname + "/public/react/js",
    filename: "scripts.min.js"
  },
});

var fluxConfig = Object.assign({}, common,{
  name: "Flux",
  entry: `${__dirname}/src/flux/js/scripts.js`,
  output: {
    path: __dirname + "/public/flux/js",
    filename: "scripts.min.js"
  },
});

var reduxConfig = Object.assign({}, common,{
  name: "Redux",
  entry: `${__dirname}/src/redux/js/scripts.js`,
  output: {
    path: __dirname + "/public/redux/js",
    filename: "scripts.min.js"
  },
});

// Return Array of Configurations
module.exports = [
    reactConfig, fluxConfig, reduxConfig,     
];
