# dva-project
通过dva脚手架写的一个点餐系统

#启动项目
npm i 安装依赖包
npm start 启动项目

#目录介绍
mock mock数据的（假数据）
node_modules 安装的依赖的包
public 入口文件
src 
    assets 静态文件
    components 公共组件
    pages 各个页面的目录
        models 管理状态
        routes 组件
            IndexPage.js 显示的内容
        services 服务（请求数据）
    utils 封装公共文件（例如：格式化时间）
    index.scss 全局样式
    index.js 实例化dva app 引入路由 开启
    router.js 路由
    package.json 模块（安装包依赖）

#准备工作
安装 cnpm i node-sass sass-loader antd babel-plugin-import --save
修改.webpackrc 为.webpackrc.js
.webpackrc.js 内配置：
    