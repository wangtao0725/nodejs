# http.ServerResponse
这个对象一般由HTTP 服务器建立而非用户自己手动建立。
它作为'request'事件的第二个参数，这是一个可写流。

1. response.writeHead(statusCode, [reasonPhrase], [headers])
    用来发送一个响应报文头部给本次的请求方，第一位参数码反应HTTP状态，最后一个参数响应的具体内容
    只能调用一次，必须在response.end()之前调用
    
2. response.write(chunk, encoding='utf8')
    在response.writeHead之后调用，负责发送响应报文的部分数据
    chunk可以是一个字符串或者buffer
    第一次调用response.write()时，此方法会将已经缓冲的消息头和第一块消息体发送给客户。
    当第二次调用 response.write()的时候，node 将假定你想要以流的形式发送数据（分别发送每一个数据块并不做缓存）。
    这样， 其实response 对象只是缓存消息体的第一个数据块。

3. response.end([data], [encoding])
    这个方法会告诉服务器此响应的所有报文头及报文体已经发出；
    服务器在此调用后认为这条信息已经发送完毕；
    这个方法必须对每个响应调用一次。
    如果指定data 参数，他就相当于调用了response.write(data, encoding)
    然后跟着调用了response.end()。