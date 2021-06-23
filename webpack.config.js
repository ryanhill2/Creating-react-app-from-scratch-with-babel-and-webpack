const path = require('path');
//creates HTMl file for us
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module:{
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }
    ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}