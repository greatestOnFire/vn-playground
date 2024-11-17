const buildLoaders = require ("./buildLoaders.js");
const buildPlugins = require ("./buildPlugins.js");
const buildDevServer = require ("./buildDevServer.js");
const buildResolves = require ("./buildResolves.js");

function buildWebpack(options) {
    const {buildMode, paths} = options;

    return {
        mode: buildMode,
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: "[name].[contenthash].js",
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        plugins: buildPlugins(options),
        resolve: buildResolves(options),
        devServer: buildDevServer(options),
    }
};

module.exports = buildWebpack;