var webpack = require('webpack');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "/build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: [/node_modules/,/public/]
            },
            {
                test: /\.jsx$/,
                loader: "react-hot!babel",
                exclude: [/node_modules/,/public/]
            },
            {
                test: /\.css$/,
                loader: "react-hot!style-loader!css-loader",
                exclude: [/node_modules/,/public/]
            }
        ]
    }
};