const miniCssExtractPlugin = require('mini-css-extract-plugin'); 

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

module.exports = {
    mode: mode,
    output: {
        assetModuleFilename: "images/[hash][ext][query]",
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset',
                parser: {
                  dataUrlCondition: {
                    maxSize: 30 * 1024,
                  },
                },
            },
            {
                test: /\.jsx?$/,
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

    resolve: {
        extensions: [".js", ".jsx"],
    },

    devtool: 'source-map',
    devServer: {
        static: "./dist",
        hot: true,
    },
}