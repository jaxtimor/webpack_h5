# webpack_h5
1、为什么写这玩意儿？
答：vue官方的webpack配置打包用来做后台管理系统比较适合，因为入口模板只有一个html文件，但是针对APP中各个活动，往往都是独立的应用都有自己的html文件，那么问题来了，如何将不同活动的应用分别打包输出对应文件下而不只是一个模板html？这套配置就是解决这个问题的
2、适合什么项目？
答：适合vue单文件组件开发，app内的单页开发，分别独立打包输出
