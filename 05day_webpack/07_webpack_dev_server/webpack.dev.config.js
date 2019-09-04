var path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
// webpack ./main.js  ./build.js
module.exports = {
	// 入口
	entry:{
		// 可以有多个入口，也可以有一个，如果有一个就默认从这一个入口开始分析
		"main":'./src/main.js'
	},
	output:{
		path:path.resolve('./dist'), //相对转绝对
		filename:'build.js'
	},
	watch:true,//文件监视改动 自动产出build.js
	//声明模块
	//包含各个loader
	module:{
		loaders: [
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.(jpg|png|jpeg|gif|svg)$/,
				loader: 'url-loader?limit=60000'
			},
			{
				test:/.\less$/,
				loader:'style-loader!css-loader!less-loader'
			}
		]
	},
	plugins: [
		//插件的执行顺序与元素有关
		new htmlWebpackPlugin({
			template:'./src/Index.html', //参照物
		})
	]
}