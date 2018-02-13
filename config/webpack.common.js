const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require("webpack");

const apps = require('./app.config.js');
const externals = require('./common.config.js')


let configs = [];

for(let app of apps){
    let entryObj = {};
    let config = {
        entry:{
            ployfills:'./../src/lib/ployfills.js'
        },
        output:{
            filename:'[name][chunkhash].bundle.js',
            path:path.resolve(__dirname,'./../dist/'+app.moduleName),
            chunkFilename:'lib/[name].bundle.js'
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
            new CleanWebpackPlugin([path.resolve(__dirname,'../dist'),path.resolve(__dirname,'../dist/lib')],{
                root: path.resolve(__dirname,'../'),       　　　　　　　　　　//根目录
                verbose:  true        　　　　　　　　　　//开启在控制台输出信息n'p'm
            }),
            new webpack.HashedModuleIdsPlugin(),
            // new webpack.optimize.CommonsChunkPlugin({
            //     name:'common',
            //     filename:'lib/[name][hash].js'
            // })
            new webpack.optimize.CommonsChunkPlugin({
                name:'vendor',
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name:'manifest'
            }),
            new webpack.ProvidePlugin({
                $:'jquery'
            })
        ]
    };
    let page = {
        title:app.moduleName,
        filename: app.moduleName+'.html',
        template: path.resolve(__dirname,'../src/'+app.entryHtml)
    };
    config.plugins.push(new HtmlWebpackPlugin(page));
    entryObj[app.moduleName] = path.resolve(__dirname,'../src/'+app.entryJs);
    Object.assign(config.entry,entryObj);
    Object.assign(config.entry,app.extract ? app.extract : {});
    Object.assign(config,externals);
    configs.push(config)
}

module.exports= configs;