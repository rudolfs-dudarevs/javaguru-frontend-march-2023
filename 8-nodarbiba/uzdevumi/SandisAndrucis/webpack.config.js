const path = require("path");

module.exports = {
    mode:"development",
    entry:"./index.js",
    output: {
        path: path.resolve(__dirname, "Public"),
        filename: "main.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}