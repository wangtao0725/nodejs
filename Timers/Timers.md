#Timers 计时器

1. setTimeout(callback, delay, [arg], [...])
    设置延时delay毫秒后执行回调函数，该函数返回timeoutld。
    
2. clearTimeout(timeoutId)
    清除指定的定时
    
3. setInterval(callback, delay, [arg], [...])
    设置重复延时调用callback。该函数返回intervalId
    
4. clearInterval(intervalId)
    清除指定的重复延时回调
    
  # Child Process
   node通过ChildProcess类提供全面的popen(3)功能。程序可以通过子进程的标准输入(stdin)
标准输出(stdout)、标准错误输出(stderr)已完全非阻塞的形式传递数据
    可以使用require('child_process').spawn()创建子进程。每个子进程总是带有三个流对象
:child.stdin,child.stdout，child.stderr。每个ChildProcess类也是一个事件触发器

1. Event:'exit'
    function(code, signal){}
    此事件在子进程结束后触发。如果进程正常结束，code参数的值就是子进程退出后的返回值，否则参数为null
    如果进程因为信号终止，参数signal就是信号的名称，否则为null。
    触发此事件后，node将不再触发'output'和‘error’事件
    
2. child.stdin
    可写流(Writable Stream)，代表子进程的标准输入(stdin)。使用end()函数关闭此流(stream)，通常会终止子进程。
    
3. child.stdout
    只读流(Readable Stream)，代表子进程的标准输出(stdout)。
    
4. child.stderr
    只读流(Readable Stream)，代表子进程的标准错误输出(stderr)。
    
5. child.pid
    子进程的PID

6. child_process.spawn(command, args=[], [options])
    使用指定的命令行参数创建新线程。如果不指定参数，args默认为空数组。
    第三个参数指定额外选项。默认值如下：
               
               { cwd: undefined
               , env: process.env,
               , customFds: [-1, -1, -1]
               }
    
7. child_process.exec(commond, [options], callback)
    使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回
    回调函数得到的参数分别为(error, stdout, stderr)。
    成功时error 参数是null；失败时error 参数是Error 的实例。 
    error.code 是子进程的返回值，error.signal 保存终止进程的信号。
    exec 函数的第二个可选参数可以用来指定一些选项。默认值为
                              
            { encoding: 'utf8',
             timeout: 0,
             maxBuffer: 200*1024, 
             killSignal: 'SIGKILL',
             cwd: null, 
             env: null
            }
    如果timeout 为大于0的值，node 将终止运行时间超过timeout（单位为毫秒）的子进程。
    子进程将被终止信号 (killSignal，默认值为'SIGKILL')终止。
    maxBuffer 指定stdout 和stderr 最大可缓存数据的大小，如果超过这个值 子进程将被终止

8. child.kill(signal='SIGTERM')
    向子进程发送信号。
    