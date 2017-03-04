var path = require("path");
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var PUBLIC_PATH = path.resolve(ROOT_PATH,'public');

		
module.exports = {
	entry: APP_PATH,

	output: {
		path: PUBLIC_PATH,
		filename: 'bundle.js'
	},
    devtool: 'source-map',
	plugins:[

	],
	module:{
		loaders:[
			{
                test:/\.js$/,
				loaders:['babel-loader'],
				exclude:'/node/modules/',
				include:__dirname
			},
            {
            	test: /\.less$/,
				loader: "style-loader!css-loader!less-loader"
            }
		]
	}

};