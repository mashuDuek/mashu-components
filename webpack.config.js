const path = require('path');

module.exports = {
    context: __dirname,
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'components', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        ]
    },
    devtool: 'source-maps',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};