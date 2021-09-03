const miniCssExtractPlugin = require('mini-css-extract-plugin'); 

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

module.exports = {
    mode: mode,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [ miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            }
        ],
    },
    plugins: [
        new miniCssExtractPlugin(), 
    ],

    devtool: 'source-map',
    devServer: {
        static: "./dist",
        hot: true,
    },
}