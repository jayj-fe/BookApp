const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    output: {
        path: path.join(__dirname, "/docs"),
        filename: "index.js",
    },

    devServer: {
        port: 3000,
        liveReload: true,
        proxy: {
            "/api" : {
              target: "https://openapi.naver.com",
              pathRewrite: {"/api": "/"},
              changeOrigin: true
            }
        }
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
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /nodeModules/
            }
        ],
    },

    plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};