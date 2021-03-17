// In order to set up the webpack config 

// 1. Go to package.json and make an entry for "start": "webpack-dev-server"
// {
// "scripts": {
//     "start": "webpack-dev-server"
// }
// }

// 2. Now when we run npm start we get an error for webpack cli so npm install --save-dev webpack-cli
// After we install webpack-cli still we see that our browser cannot understand the JSX syntax hence we have to create 
// a new file with package.json which will be webpack.config.js

//webpack.config.js

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path : path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }
};   // webpack runs on Node.js

// 3. We have tio install babel so that new JS code can be understood by the browser
// npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-stage-2 babel-loader

// 4 to understand now what babel does we need to create a new file .babelrc file

{
    "presets": [
        ["@babel/preset-env", {
            "targets": {
                "browsers": ["> 1%", "last 2 versions"]
            }
        }],
        "@babel/preset-react"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ]
}

//5 Loading css : For js we have babel-loader for css we have to install 2 new loaders
//npm install --save-dev style-loader css-loader postcss-loader
// then we add another entry in webpack.config.js
// we also have to install 1 plugin here npm install --save-dev autoprefixer


const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path : path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
            test: /\.css$/,
            exclude: '/node_modules/',
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader', options: {
                        importLoaders: 1,
                        modules: {
                            localIndentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }
                },
                {
                    loader: 'postcss-loader', options: {
                        ident: 'postcss',
                        plugins: () => [autoprefixer()]
                    }
                }
            ]
            }
        ]
    }
};


// 6. In order to load the images we need to install the below package
// npm install --save-dev url-loader and the plugin npm install --save-dev html-webpack-plugin

const path = require('path');
const autoprefixer = require('autoprefixer');
const htmlwebpackplugin = require('htmlwebpackplugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path : path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
            test: /\.css$/,
            exclude: '/node_modules/',
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader', options: {
                        importLoaders: 1,
                        modules: {
                            localIndentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }
                },
                {
                    loader: 'postcss-loader', options: {
                        ident: 'postcss',
                        plugins: () => [autoprefixer()]
                    }
                }
            ]
            },
            {
                test: /\.(png|jpeg|gif)$/,
                loader: 'url-loader',
                exclude: '/node_modules/'
            },
        ]
    },
    plugins: [
        new htmlwebpackplugin({
            template: __dirname + 'src/index.html',
            fileename: 'index.html'
        })
    ]
};

// when we run the prod build make these changes in package.json
//{
    // "scripts": {
    //     "start": "webpack-dev-server",
    //       "build:prod": "webpack --config webpack.config.js"
    // }
    // }









