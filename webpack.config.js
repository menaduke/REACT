const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    // not be default entry looks for src and a file named index.js else we need to specify in entry
    // entry: './src/app.js',
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "src/index.html",
            filename: "./index.html"
        })
    ]
};