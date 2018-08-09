const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/init.js',
    output: {
        filename: 'fableau.js',
        path: path.resolve(__dirname, 'public/assets')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        },{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        ["env", {
                            targets: {
                                ie: 11
                            }
                        }]
                    ]
                }
            }
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};
