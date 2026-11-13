const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: "development",
    entry: "./src/main.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-react", { runtime: "automatic" }]],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./index.html" }),
        new MiniCssExtractPlugin({ filename: "styles.css" }),
        new CopyWebpackPlugin({
            patterns: [{ from: "404.html", to: "404.html" }],
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
