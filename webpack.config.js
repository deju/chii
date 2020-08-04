const path = require('path');

module.exports = (env, argv) => {
  const config = {
    entry: './target/index.ts',
    devtool: 'inline-source-map',
    target: 'web',
    output: {
      filename: 'target.js',
      path: path.resolve(__dirname, 'public'),
      libraryTarget: 'umd',
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {targets: { chrome: '58', ie: '11'}}], '@babel/preset-typescript']  //Preset used for env setup
           }
          // loader: 'ts-loader',
        },
      ],
    },
  };

  if (argv.mode === 'production') {
    config.devtool = 'none';
  }

  return config;
};
