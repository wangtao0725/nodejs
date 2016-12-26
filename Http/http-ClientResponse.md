# http.ClientResponse
这个对象在使用http.Client 发起请求时被创建，
它会以参数的形式传递给request 对象'response'事件的响应函数。
'response'实现了可读流的接口。

1. Event:'data'
    function(chunk){}
    当接收到消息体一部分时触发
    信息体的编码通过response.setBodyEncoding()设置
    
2. Event:'end'
    function(){}
    该事件对于每个收到的消息会触发一次。
    
3. response.statusCode
    回应状态
    
4. response.httpVersion
    所连接到的服务器所使用HTTP协议版本
    
5. response.headers
    http信息头对象
    
6. response.setEncoding(encoding='null')
    设置回应信息体的编码
    
7. response.pause()
   暂停response触发事件。通常在控制一个下载动作时使用

8. response.resume()
    恢复一个暂停的请求
    
9. response.client
    保存response所属的http.Client的引用