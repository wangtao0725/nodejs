# Global Objects 全局对象

1. global
    全局命名空间对象

2. process
    
3. require.paths
    一个保存了require函数搜索路径的数组。
    eg：
    require.paths.unshift('/usr/local/node');
    console.log(require.paths)
    //   /usr/local/node,/Users/mjr/.node_libraries

4. __filename
    当前正在执行的脚本的文件名。此为绝对路径，且和命令行参数所指定的文件名不一定相同
    
5. __dirname
    当前执行脚本的文件夹
    
6. module
    指向当前模块的引用