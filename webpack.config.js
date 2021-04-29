const path = require("path");

const appRootPath = path.join(__dirname);

// Phaser webpack config
const phaserModule = path.join(appRootPath, "/node_modules/phaser-ce/")
const phaser = path.join(phaserModule, "build/custom/phaser-split.js")
const pixi = path.join(phaserModule, "build/custom/pixi.js")
const p2 = path.join(phaserModule, "build/custom/p2.js")

// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //devtool: '#source-map',
    mode: "development",
    devServer: {
	    port: 3010
    },
    entry: {
        app: path.resolve(appRootPath, "index.js"),
        vendor: ["pixi", "p2", "phaser"]
    },
    output: {
        path: path.resolve(appRootPath, "dist/"),
        filename: "[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|gif|svg|pvr|pkm|mp3|wav)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[ext]?[hash]',
                            esModule: false,
                        },
                    },
                ],
            },
            {
                test: /pixi\.js/,
                loader: "expose-loader",
                options: {
                    exposes: ["PIXI"],
                },
            },
            {
                test: /phaser-split\.js$/,
                loader: "expose-loader",
                options: {
                    exposes: ["Phaser"],
                },
            },
            {
                test: /p2\.js/,
                loader: "expose-loader",
                options: {
                    exposes: ["p2"],
                },
            }
        ]
    },
    resolve: {
        alias: {
            assets: path.join(__dirname, 'www/assets'),
            phaser: phaser,
            pixi: pixi,
            p2: p2,
        }
    }
}
