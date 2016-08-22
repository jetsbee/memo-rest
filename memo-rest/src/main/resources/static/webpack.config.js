var path = require('path');

module.exports = {
    entry: './index.js',
    devtool: 'eval',
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel'
            }
        ]
    }
};