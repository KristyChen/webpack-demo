/**
 * Created by jessic on 2016/9/19.
 */
var webpack=require("webpack");
var htmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:__dirname+"/app/main.js",//唯一的入口文件,注意__dirname是下划线两横
    output:{
        path:__dirname+"/build",//打包后的文件存放的地方
        filename:"bundle.js"//打包后输出文件的文件名
    },
    devtool:"eval-source-map",//配置生成source Maps，为什么有些前面加上“#”
    devServer:{
        contentBase:"./public",//本地服务器所加载的页面所在的目录
        colors:true,//终端中输出结果为彩色
        historyApiFallback:true,//不跳转
        inline:true,//实时刷新
        hot:true//这个参数是hotModuleReplacement插件的，以上是webpack-dev-server的
    },
    module:{
        loaders:[
            {
                test:/\.json$/,
                loader:"json"
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel"
            },
            {
                test:/\.css$/,
                loader:"style!css?modules！postcss"//感叹号的功能在于让同一文件使用不同类型的loader
            }
        ]


    },
    postcss:[
        require('autoprefixer')//可以自动调用不同浏览器的前缀
    ],
    plugins:[
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
        new htmlWebpackPlugin({
            template:__dirname+"/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
