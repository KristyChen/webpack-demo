/**
 * Created by jessic on 2016/9/19.
 */
var webpack=require("webpack");
var htmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:__dirname+"/app/main.js",//Ψһ������ļ�,ע��__dirname���»�������
    output:{
        path:__dirname+"/build",//�������ļ���ŵĵط�
        filename:"bundle.js"//���������ļ����ļ���
    },
    devtool:"eval-source-map",//��������source Maps��Ϊʲô��Щǰ����ϡ�#��
    devServer:{
        contentBase:"./public",//���ط����������ص�ҳ�����ڵ�Ŀ¼
        colors:true,//�ն���������Ϊ��ɫ
        historyApiFallback:true,//����ת
        inline:true,//ʵʱˢ��
        hot:true//���������hotModuleReplacement����ģ�������webpack-dev-server��
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
                loader:"style!css?modules��postcss"//��̾�ŵĹ���������ͬһ�ļ�ʹ�ò�ͬ���͵�loader
            }
        ]


    },
    postcss:[
        require('autoprefixer')//�����Զ����ò�ͬ�������ǰ׺
    ],
    plugins:[
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
        new htmlWebpackPlugin({
            template:__dirname+"/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
