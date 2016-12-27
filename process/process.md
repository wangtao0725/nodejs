  #   process 进程
  
process是一个全局对象， 可以在任何地方访问。也是EventEmitter实例

1. Event:'exit'

        function(){}
    
    此事件在进程退出时触发。这是一个检查模块状态的好地方。由于主事件循环在‘exit’返回方法之后将不会继续执行，所以计时器可能不会生效
    监听exit事件
    
            process.on('exit', function(){
                process.nextTick(function(){
                console.log('this will not run')
                })
                console.log('About to exit.')
            })
    
2. Event:'uncaughtException'

        function(err){}
    
    发生未处理的异常时，此事件会触发。如果此事件有监听事件，则不执行默认行为。
    eg:
    
            process.on('uncaughtException', function(err){
                console.log('Caught exception:' + err);
            });
            setTimeout(function(){
                console.log('this will still run');
            }, 500);
            //Intentionally cause an exception, but don't catch it
            nonexistentFunc();
            console.log('this will not run');
        
3. Signal Events
    
        function(){}
    当进程接受到信号时被触发
    监听SIGINT信号的示例
    
            var stdin = process.openStdin();
            process.on('SIGINT', function(){
                console.log('Got SIGINT.Press Control-D to exit');
            })
    发送SIGINT信号最简单的方法是使用Control-C， 大多数情况这会终止应用程序的执行
    
4. process.stdout

    一个代表标准输出的流对象
    
5. process.openStdin()

    打开标准输入流，返回一个只读流对象
    
6. process.argv

    保存命令行参数的数组。第一个参数是'node',第二参数是JavaScript文件的文件名，接下来是附加的命令行参数
       
            process.argv.foreach(function(val, index, array){
                console.log(index + ':'+ val);
            })

7. process.execPath

    此参数为进程可执行文件的绝对路径
    
8. process.chdir(directory)

    改变进程的当前目录，失败时抛出异常
    
9. process.compile(code, filename)

        var localVar = 123,
        compiled, evaled;
        compiled = process.compile('localVar = 1;', 'myfile.js');
        console.log('localVar: ' + localVar + ', compiled: ' + compiled);
        evaled = eval('localVar = 1;');
        console.log('localVar: ' + localVar + ', evaled: ' + evaled);
        // localVar: 123, compiled: 1
        // localVar: 1, evaled: 1
    process.compile 并没有访问本地作用域，所以localVar 变量并没有改变。eval 可以访问本地作用域，所以localVar 被改变了。
    当代码中有语法错误时，process.compile 将会是应用程序退出。
    
10. process.cwd()

    返回进程的当前工作目录
 
11. process.env()

    一个保存用户环境变量的对象

12. process.exit(code=0)
    使用进程退出代码并退出进程。

13. process.exit(1)

    执行node的shell将会得到返回值1.
    
14. process.getgid()
    返回进程的用户组标识
    
15. process.setgid(id)

    当前进程的用户组标识。这个函数可以接受数字形式的组ID 或者是字符串形式的组名。如果 指定组名，此函数会阻塞进程直至将组名解析成为数字ID。
    
16. process.getuid()

    返回当前进程的用户标识。此函数返回数字形式的用户ID，而不是用户名。
    
17. process.setuid()

    指定当前进程的用户标识，这个函数可以接受数字形式的用户ID或者字符串形式的用户名。如果指定用户名，此方法在将用户名解析成用户ID时会阻塞
    
18. process.version

    编译进程可执行文件的属性，代表NODE_VERSION
    
19. process.installPrefix

    编译进程可执行文件的属性，代表NODE_PREFIX
    
20. process.kill(pid, signal='SIGINT')

    向一个进程发送信号，参数pid为进程ID，signal是一个描述要发送信号的字符串，如果不指定，默认发送’SIGINT’信号
    
21. process.pid

    当前进程的ID
    
22. process.title

    设置，获取ps命令中显示的名称
    
23. process.platform

    表示程序运行的平台，如‘linux2’
    
24. process.memoryUsage()

    返回一个描述Node进程内存占用的对象
    
25. process.nextTick(callback)

    在事件循环的下一轮调用这个回调。此函数不是setTimeout(fn,0)的别名，更加高效
    
26. process.umask([mask])

    设置或读取进程的文件创建模式掩码，子进程会从父进程继承这个掩码。如果使用此函数设置新的掩码，则它返回旧的掩码，否则返回当前掩码
    var oldmask, newmask = 0644;
    oldmask = process.umask(newmask);
    console.log('Changed umask from: ' +
     oldmask.toString(8) +
     ' to ' + 
     newmask.toString(8));