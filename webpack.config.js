var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

var common = {
  devServer: { 
    // https://stackoverflow.com/questions/50591374/mern-stack-express-and-react-on-same-port
    // https://medium.com/bb-tutorials-and-thoughts/react-how-to-proxy-to-backend-server-5588a9e0347
    // (This works here) https://stackoverflow.com/questions/44365577/proxy-in-package-json-not-affecting-fetch-request
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
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
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

// Return Array of Configurations
module.exports = [
    reactConfig, fluxConfig, reduxConfig,     
];
