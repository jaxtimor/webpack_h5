const webpackCommons=require('./webpack.common.js');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const util = require('util')

let prods = [];

for (let com of webpackCommons){
    console.log('>>>>>>'+util.inspect(com))
    prods.push( webpackMerge(com,{
        devtool:'source-map',
        plugins:[
            new UglifyWebpackPlugin(
                {
                    sourceMap:true
                }
            ),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV':JSON.stringify('production')
            })
        ]
    }))
}


module.exports =prods;
