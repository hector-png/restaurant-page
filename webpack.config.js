const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtools: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    module: {},
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};