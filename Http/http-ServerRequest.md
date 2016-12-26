# http.ServerRequest
这个对象通常由HTTP SERVER 建立而非用户手动建立，
并且会作为传递给'request'事件监听器第一个参数 
此对象的可以触发以下事件：
1. Event:'data'
    function(chunk){}
    当接收到信息体中的一部分时候会发出data 事件。
    
2. Event:'end'
    每次完全接收完信息后都会触发一次。没有参数，当这个事件发出后，将不会再触发其他事件。
    
3. request.method
    只读字符串
    
4. request.url
    请求的URL 字符串.
    require('url').parse('/status?name=ryan')
    
5. request.headers
    只读
    
6. request.httpVersion
    HTTP协议版本
    
7. request.setEncoding(encoding='null')
    设置此请求的包体的字集编码， ‘utf8’或者‘binary’。缺省值是null，这表示data事件参数将会是buffer对象
    
8. request.pause()
    暂停此request触发事件。控制上传
    
9. request.resume()
    恢复一个暂停request
    
10. request.connection
    request.connection 是一个代表当前连接的net.Stream 对象。
    对于HTTPS，使用request.connection.verifyPeer() 和
    request.connection.getPeerCertificate()来获得客户端（浏览 器）的认证详情。