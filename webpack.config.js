const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'tools.js',
        globalObject: 'this',        // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
        libraryTarget: 'umd'         // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, 'src')
                ],
                exclude: /node_modules/,
                loader: "babel-loader",
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    toplevel: true
                }
            })
        ],
    },
}
