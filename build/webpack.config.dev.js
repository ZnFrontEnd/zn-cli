const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('../config/paths');

module.exports = {
    mode: 'development',
    entry: {
        webpackHotDevClient: require.resolve('react-dev-utils/webpackHotDevClient'),
        erroroverlay: require.resolve('react-error-overlay'),
        app: paths.INDEX_PATH
    },
    output: {
        publicPath: '/',
        filename: 'js/[name].js',
        path: paths.DIST_PATH
    },
    resolve: {
        alias: {
            '@': paths.APP_PATH
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.HTML_PATH,
            inject: 'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },{
                test: /\.less$/,
                use: [
                    'style-loader',
                    { 
                        loader: 'css-loader', 
                        options: {
                            importLoaders: 1,
                            modules: true, 
                        } 
                    },
                    'less-loader',
                    'postcss-loader'
                ]
            },{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    compact: false
                } 
            }
        ]
    }
}