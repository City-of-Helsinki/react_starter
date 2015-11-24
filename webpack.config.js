var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);
var BUILD, DEV;

var common = {
  entry: [path.resolve(ROOT_PATH, 'app/main')],
  resolve: {
    extensions: ['', '.js', '.jsx', '.cjsx', '.coffee']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Webpack and Mocha starter'
    })
  ]
};

if(TARGET === 'library') {
    module.exports = {
        entry: [path.resolve(ROOT_PATH, 'app/components/kuppi.cjsx')],
        resolve: {
            extensions: ['', '.js', '.jsx', '.cjsx', '.coffee']
        },
        output: {
            // export itself to a global var
            libraryTarget: "var",
            // name of the global var: "Foo"
            library: "kuppi",
            path: path.resolve(ROOT_PATH, 'build'),
            filename: 'kuppi.js'
        },
        externals: {
            'react': 'React'
        },
        devtool: 'source-map',
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel?stage=0',
                    include: path.resolve(ROOT_PATH, 'app')
                },
                {
                    test: /\.cjsx$/,
                    loaders: ['coffee', 'cjsx'],
                    include: path.resolve(ROOT_PATH, 'app')},
                { test: /\.coffee$/,
                    loader: 'coffee',
                    include: path.resolve(ROOT_PATH, 'app')}
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    // This has effect on the react lib size
                    'NODE_ENV': JSON.stringify('production')
                }
            })
            //new webpack.optimize.UglifyJsPlugin({
            //  compress: {
            //    warnings: false
            //  }
            //})
        ]
    };
}

if(TARGET === 'build') {
  module.exports = merge(common, {
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel?stage=0',
          include: path.resolve(ROOT_PATH, 'app')
        },
        {
          test: /\.cjsx$/,
          loaders: ['react-hot', 'coffee', 'cjsx'],
          include: path.resolve(ROOT_PATH, 'app')},
        { test: /\.coffee$/,
          loader: 'coffee',
          include: path.resolve(ROOT_PATH, 'app')}
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          // This has effect on the react lib size
          'NODE_ENV': JSON.stringify('production')
        }
      })
      //new webpack.optimize.UglifyJsPlugin({
      //  compress: {
      //    warnings: false
      //  }
      //})
    ]
  });
}

if(TARGET === 'dev') {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    entry: [
      'webpack/hot/dev-server'
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel?optional[]=runtime&stage=0'],
          include: path.resolve(ROOT_PATH, 'app')
        },
        {
          test: /\.cjsx$/,
          loaders: ['react-hot', 'coffee', 'cjsx'],
          include: path.resolve(ROOT_PATH, 'app')
        },
        { test: /\.coffee$/,
          loader: 'coffee',
          include: path.resolve(ROOT_PATH, 'app')
        },
        {
          test: /\.tsx?$/,
          loaders: ['react-hot', 'babel?optional[]=runtime&stage=0', 'ts-loader'],
          include: path.resolve(ROOT_PATH, 'app'),
          ts: {compilerOptions: 'jsx'}
        }
      ]
    }
  });
}
