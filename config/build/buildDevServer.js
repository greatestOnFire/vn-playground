function buildDevServer(options) {

    return {
        port: options.port,
        historyApiFallback: true,
        open: true,
        hot: true,
    }
};

module.exports = buildDevServer;