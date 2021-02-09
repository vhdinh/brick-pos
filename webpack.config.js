const path = require('path');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
    img: path.join(__dirname, './files')
};

module.exports = (env, argv) => {
    const dev = argv.mode === 'development';

    return {
        entry: './src/index.tsx',
        devtool: dev ? 'source-map' : 'none',
        mode: dev ? 'development' : 'production',
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader'
                },
                // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jp(e*)g|svg|gif|ico)$/,
                    loader: 'file-loader',
                    include: PATHS.img,
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'files'
                    }
                }
            ]
        },
        // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
        resolve: { extensions: ['*', '.js', '.jsx', '.ts', '.tsx'] },
        output: {
            path: path.resolve(__dirname, 'dist/'),
            publicPath: '/',
            filename: 'bundle.js'
        },
        plugins: [
            new CleanWebpackPlugin(),
            new WebpackAssetsManifest({
                output: 'asset-manifest.json'
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new CopyPlugin({
                patterns: [{ from: 'src/styles/fonts', to: 'fonts' }]
            })
        ]
    };
};
