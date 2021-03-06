import webpack from "webpack";

import paths from "./paths";

module.exports = {
    mode: "development",
    output: {
        filename: "[name].js",
        path: paths.outputPath,
        chunkFilename: "[name].js"
    },
    performance: {
        hints: "warning",
        maxAssetSize: 10000000,
        maxEntrypointSize: 8500000,
        assetFilter: assetFilename => {
            return (
                assetFilename.endsWith('.scss') || assetFilename.endsWith(".css") || assetFilename.endsWith(".js")
            );
        }
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        compress: true,
        hot: true,
        contentBase: './',
        historyApiFallback: true,
        port: 8081
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};