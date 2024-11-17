const path = require("node:path");
const buildWebpack = require("./config/build/buildWebpack");


module.exports = (env) => {
    const paths = {
        entry: path.resolve(__dirname, "./src/main.js"),
        output: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "./public/index.html"),
        src: path.resolve(__dirname, "src"),
    };

    const pathsAlias = {
        "@views": path.resolve(__dirname, "src/views"),
        "@router": path.resolve(__dirname, "src/router"),
        "@components": path.resolve(__dirname, "src/components"),
        "@assets": path.resolve(__dirname, "src/assets"),
    }

    const config = buildWebpack({
        port: env.port ?? 3000,
        buildMode: env.mode ?? "development",
        paths,
        pathsAlias
    });

    return config;
};