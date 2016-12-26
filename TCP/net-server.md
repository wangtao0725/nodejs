# net.Server TCP服务器模块
这个类用于创建TCP或者UNIX服务器
eg: 8124端口等待连接的echo server
        var net = require('net');
        var server = net.createServer(function (stream) {
            stream.setEncoding('utf8');
            stream.on('connect', function () {
                stream.write('hello\r\n');
            });
            stream.on('data', function (data) {
                stream.write(data);
            });
            stream.on('end', function () {
                stream.write('goodbye\r\n');
                 stream.end();
            });
        });
        server.listen(8124, 'localhost');
    如果使用UNIX SOCKET '/tmp/echo.sock',最后一行需要改成
    server.listen('/tmp/echo.sock');
  该对象可以出发的事件
1. Event: 'connection'
    function(stream){}
    当一个新连接建立后触发这个事件，stream是net.Stream类的一个实例
    
2. Event:'close'
    function(){}
    SERVER关闭时触发
    
3. net.createServer(connectionListener)
    建立一个新的TCP SERVER    
    connectionListener 参数会自动设置为'connection'事件的监听函数。
    
4. server.listen(port,[host],[callback])
    在指定端口和主机上接收一个连接请求。
    callback将在服务器被绑定后被调用
    
5. server.listen(path,[callback])
    建立一个UNIX SOCKET SERVER并监听在指定路径上的连接。这个函数是一个异步方法，

6. server.listenFD(fd)
    建立一个SERVER并监听在给定的文件描述符上
    
7. server.close()
    停止服务器。