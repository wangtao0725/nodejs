# http.Server

此模块会触发以下事件
1. Event:'request'
    function(request,response){}
    request是http.ServerRequest的一个实例，response则是http.ServerResponse的一个实例
    
2. Event:'connection'
    function(stream){}
    当一个新的TCP stream建立后发出此消息。stream是一个net.Stream对象。参数stream可以在request.connection中访问
    
3. Event:'close'
    function(errno){}
    当服务器关闭时触发此事件
    
4. Event:'request'
    function(request,response){}
    每个请求发生的时候均会被触发。

5. Event:'upgrade'
    function(request,socket,head)
    每当一个客户端请求一个http upgrade时候发出此消息。如果这个事件没有监听，那么请求upgrade的客户端对应连接被关闭
    1.参数“request”代表一个http 请求，和'request'事件的参数意义相同。
    2.socket 是在服务器与客户端之间连接用的网络socket
    3.head 是Buffer 的一个实例,是upgraded stream所发出的第一个包，这个参数可以为空。
    
6. Event:'clientError'
    function(exception){}
    客户端连接的‘error’事件被触发执行

7. http.createServer(requestListener)
    返回一个新的web server对象
    requestListener 是一个会去自动监听'request'事件的函数。
    
8.  server.listen(port,[hostname],[callback])
    在指定端口和主机名上接受连接。
    如果hostname 没有写,这个服务器将直接在此机器的所有IPV4地址上接受连 接(INADDR_ANY).
    
9. server.listen(path,[callback])
    建立一个UNIX SOCKET 服务器并在指定路径监听。 
    这个方法是一个异步的方法，作为最后一个参数的回调方法将在服务器已经在此端口上绑定好后被调用。
    
10. server.setSecure(credentials)
    允许此服务器支持HTTPs，配合crypto模块credentials指定私钥以及此服务器的证书，
    并且也可选择数字中心认证证书作为客户端的认证
11. server.close()
    使此服务器停止接受任何新连接
    
12. server.maxConnections
    设置此属性使服务器的连接数高于此数值时拒绝连接
 
13. server.connections
    
    代表当前服务器的连接数。