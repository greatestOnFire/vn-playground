const {VueLoaderPlugin} = require("vue-loader") ;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require ("clean-webpack-plugin");
const htmlWebpackPlugin = require ("html-webpack-plugin");


function buildPlugins(options) {

    const {buildMode, paths} = options;

    const isDevelopment = buildMode === 'development';
    const isProduction = buildMode === 'production';

    const plugins = [
        new htmlWebpackPlugin({
            template: paths.html,
            favicon: "./public/favicon.ico",
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ];

    if (isProduction) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].css",
            chunkFilename: "[name].[contenthash:8].css",
        }))
    }


    return plugins
}

module.exports = buildPlugins;