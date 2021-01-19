var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

var common = {
  devServer: { 
    proxy: { 
      "/api/**": {
        target: 'http://localhost:3000', 
        secure: false 
      }  
    }
  },
  devtool: debug ? "inline-sourcemap" : null,
  module: {
    // loaders: [
    //   {
    //     test: /\.jsx?$/,
    //     exclude: /(node_modules|bower_components)/,
    //     loader: 'babel-loader',
    //     query: {
    //       presets: ['react', 'es2015', 'stage-0'],
    //       plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
    //     }
    //   }
    // ]

    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react', // Transpile React JSX
            'es2015', // Transpile ES6 code
            'stage-0' // Transpile features after ES6
          ],
          plugins: [
            'react-html-attrs', 
            'transform-decorators-legacy', 
            'transform-class-properties'
          ],
        } // https://stackoverflow.com/questions/43206062/why-do-i-have-to-put-babel-presets-inside-babelrc-and-webpack-config-js
      },
      {
        test: /\.(scss)$/,
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. Turn css into js
          "sass-loader" // 1. Turn sass into css (dependent on node-sass)
        ]
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

var mobxConfig = Object.assign({}, common,{
  name: "Mobx",
  entry: `${__dirname}/src/mobx/js/scripts.js`,
  output: {
    path: __dirname + "/public/mobx/js",
    filename: "scripts.min.js"
  },
});

// Return Array of Configurations
module.exports = [
    reactConfig, fluxConfig, reduxConfig, mobxConfig, 
];
