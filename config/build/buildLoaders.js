const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function buildLoaders(options) {
    const { buildMode } = options;

    const isProduction = buildMode === 'production';

    const vueLoader = {
        test: /.vue$/,
        loader: "vue-loader",
    }

    const babelLoader = {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
        }
    }

    const fontLoader = {
        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
        loader: "file-loader",
        options: {
            name: "[name][contenthash:8].[ext]",
        }
    };

    const styleLoader = {
        test: /\.s?css$/,
        use: [
            isProduction ? MiniCssExtractPlugin.loader: "style-loader",
            "css-loader",
            {
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        plugins: () => [autoprefixer()],
                    }
                },
            },
            "sass-loader",
        ],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
        loader: "file-loader",
        options: {
            outputPath: "assets",
            esModule: false,
        },
    }

    return [
        babelLoader,
        vueLoader,
        fontLoader,
        styleLoader,
        fileLoader,
    ]

};

module.exports = buildLoaders;