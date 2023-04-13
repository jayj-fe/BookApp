const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.bundle.js",
    },

    devServer: {
        port: 3000,
        liveReload: true,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", 'sass-loader'],
                exclude: /nodeModules/
            },
        ],
    },

    plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};