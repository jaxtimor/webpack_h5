const webpackMerge = require('webpack-merge');
const webpackCommon = require('webpack.common.js');

module.exports=webpackMerge(webpackCommon,{
    devtool: "inline-source-map",
    devServer: {
        contentBase:'./../dist'
    }
})