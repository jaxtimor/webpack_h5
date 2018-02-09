const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require("webpack");

const apps = require('./app.config.js');

let configs = [];

for(let app of apps){
    let entryObj = {};
    let config = {
        entry:{},
        output:{
            filename:'[name][hash].bundle.js',
            path:path.resolve(__dirname,'./../dist')
        },
        module:{
            rules:[
                {
                    test: /\.html$/,
                    use: ["html-loader"]
                }
            ]
        },
        plugins:[
            new CleanWebpackPlugin([path.resolve(__dirname,'../dist')],{
                root: path.resolve(__dirname,'../'),       　　　　　　　　　　//根目录
                verbose:  true        　　　　　　　　　　//开启在控制台输出信息
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name:'common',
                filename:'lib/common[hash].js'
            })
        ]
    };
    let page = {
        title:app.moduleName,
        filename: app.moduleName+'/'+app.moduleName+'.html',
        template: path.resolve(__dirname,'../src/'+app.entry)
    };
    config.plugins.push(new HtmlWebpackPlugin(page));
    entryObj[app.moduleName+'/'+app.moduleName] = path.resolve(__dirname,'../src/'+app.entry);
    Object.assign(config.entry,entryObj);
    configs.push(config)
}

module.exports= configs;