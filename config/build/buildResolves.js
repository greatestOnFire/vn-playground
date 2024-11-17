const path = require("node:path");

function buildResolves(options) {
    const { pathsAlias } = options;
    return {
        alias: pathsAlias,
        extensions: [".*",".js",".vue",".json"],
    }
}

module.exports = buildResolves;