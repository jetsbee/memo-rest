const path = require('path');

module.exports = {
    entry:   './index.js',
    devtool: 'eval',
    output:  {
        path:     __dirname,
        filename: './dist/bundle.js'
    },
    devServer: {
      port:  8081,
      proxy: {
          '/**': {
              target:      'http://localhost:8080',
              secure:      false,
              prependPath: false
          }
      },
    },
    module: {
        loaders: [
            {
                test:    path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader:  'babel'
            }
        ]
    }
};
