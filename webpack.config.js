var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, 'app/index.jsx'),
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    module: {
        rules: [
            { 
            	test: /\.(js|jsx)$/, 
            	exclude: /node_modules/, 
            	loader: 'babel-loader',
                options: {
                    presets: ["es2015"]
                },
            },
            { 
            	test: /\.less$/, 
            	exclude: /node_modules/, 
            	loader: 'style-loader!css-loader!less-loader' 
            },
            { 
            	test: /\.css$/, 
            	exclude: /node_modules/, 
            	loader: 'style-loader!css-loader' 
            },
            { 
            	test:/\.(png|gif|jpg|jpeg|bmp)$/i, 
           		loader:'url-loader?limit=5000' // 限制大小5kb
            },  
            { 
            	test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, 
            	loader:'url-loader?limit=5000' // 限制大小小于5k
            } 
        ]
    },

    resolve: {
        // 解析模块请求的选项
        // （不适用于对 loader 解析）

        modules: [// 用于查找模块的目录
          "node_modules",
           path.resolve(__dirname, "app")
        ],
        

        extensions: [".js", ".json", ".jsx", ".css"],
    },


    plugins: [
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 打开浏览器
        new OpenBrowserPlugin({
          url: 'http://localhost:8080'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
          __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        }),

        new webpack.LoaderOptionsPlugin({
            options: {

                devServer: {
                    contentBase: "./public", //本地服务器所加载的页面所在的目录
                    colors: true, //终端中输出结果为彩色
                    historyApiFallback: true, //不跳转
                    hot: true,  // 使用热加载插件 HotModuleReplacementPlugin
                    inline: true //实时刷新
                }
            }
        })
    ],

}
