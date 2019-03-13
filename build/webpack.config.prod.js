const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const paths = require('../config/paths');

module.exports = {
    mode: 'production',
    entry: {
        app: paths.INDEX_PATH,
        framework: ['react', 'react-dom']
    },
    output: {
        publicPath: './',
        filename: 'js/[name].[chunkhash:8].js',
        path: paths.DIST_PATH
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.HTML_PATH,
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css',
        })
    ],
    optimization: {
        minimizer: [
          // mode为production时，webpack会自动调用UglifyJsPlugin压缩js代码
          new UglifyJsPlugin(),
          new OptimizeCssAssetsPlugin({
            cssProcessorOptions: true
              ? {
                map: {inline: false}
              }
              : {}
          })
        ],
        // 公共js文件的抽取
        splitChunks: {
            chunks: "all",
            minChunks: 1,
            minSize: 0,
            cacheGroups: {
                framework: {
                    test: "framework",
                    name: "framework",
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },{
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
                include: paths.APP_PATH,
                query: {
                    compact: false
                } 
            }
        ]
    }
}