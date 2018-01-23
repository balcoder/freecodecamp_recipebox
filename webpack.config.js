// path is one of nodes core modules
var path = require("path");

// store our dist and src dir paths in a handy variable
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

// the main webpack configuration
var config = {
  // the entry point of webpack to start bundling. Webpack starts
  // here and then add every import in order
  entry: SRC_DIR + "/app/index.js",
  // where to output our bundle
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    // where the app will live on a production server
    publicPath: "/app"
  },
  module: {
    loaders: [
      {
        // load babel with presets so we can use es6 syntax and react
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "env", "stage-2"]
        }

      },
      // write scss styles - compile first with sass-loader, once compiled to
      // css use the css-loader to include it in the bundle, then use
      // style-loader  to include the styles in header
      {
        test: /\.scss$/,
        include: SRC_DIR,
        use: ['style-loader','css-loader','sass-loader']
      }
    ]
  }
}

module.exports = config;
