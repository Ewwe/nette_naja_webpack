const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env,args) => {
    const isProduction = args.mode === 'production';
    return {
        context: path.resolve(__dirname),
        entry: {
            main: './scripts/main.js',
        },
        output: {
            path: path.join(__dirname,'dist'),
            publicPath: isProduction ? '/dist/' : '/',
        },
        module: {
            rules: [
                {
                    test:/\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ],
                },{
                    test: /\.ts$/,
                    use: 'awesome-typescript-loader'
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin()
        ],
        devServer: {
            contentBase: path.join(__dirname,'dist'),
            port: 3060
        }
    }
}