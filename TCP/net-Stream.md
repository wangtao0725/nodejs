# net.Stream TCP流模块
这个对象是对TCP或者UNIX SOCKET的抽象，它实现全双工的流接口。
net.Stream可以由用户手动建立，并且作为一个客户端来使用，
也可以被node建立并通过服务器的'connection'事件传递给用户

1. Event:'connect'
    当成功建立连接后触发此事件
    
2. Event:'secure'
    function(){}
    当一个stream与其等端安全建立一个SSL握手后触发
    
3. Event:'data'
    function(){}
    当接受到数据时触发该事件，数据会是Buffer或者String，数据的编码通过stream.setEncoding()来设计
    
4. Event:'end'
    function(){}
    当stream发出一个FIN包后触发此事件。
    当这个事件被发出 后，唯一能做的事情或许只是call stream.end()了。
    
5. Event:'timeout'
    function(){}
    当流因为不活动而超时时触发这个事件。
    这是唯一一个因为stream 空闲而通知的事件，这个时候用户必须手动 关闭这个连接。
    
6. Event:'drain'
    function(){}
    当写缓冲区变空的时候触发这个事件，可以用来控制/调节上传

7. Event: 'error' 
    function (exception) { } 
    当发生一个错误时候触发。‘close’事件将跟随这个事件被发出
    
8. Event: 'close'
    function(had_error){}
    当stream 被完全关闭时发出这个事件。
    参数had_error 是一个用来标示stream 关闭是否是因为传输错误所导致 的标志
    
9. net.createConnection(port, host='127.0.0.1')
    构造一个新的stream 对象并且打开一个stream 到指定的端口和主机，
    如果第二个参数没有写，则假设主机为 localhost 
    建立连接后触发connect 事件。
    
10. stream.connect(port,host='127.0.0.1')
    在指定端口和主机打开一个stream
    在连接建立之后会触发‘connect’事件。
    如果在连接过程中产生问题，将产生'error'事件，而 不会被触发'connect'。
11. stream.remoteAddress
    这个字符串代表远程计算机的IP 地址
    
12. stream.readyState
    stream.readyState 可以是'closed', 'open', 'opening', 'readOnly' 'writeOnly' 中的一个

13. stream.setEncoding(encoding='null')
    为接受到的数据设置编码格式(只能'ascii', 'utf8', 'base64'中的一个)。
    
14. stream.setSecure([credentials])
    配合crypto 模块提供的私钥和证书（在peer authentication 中是CA 证书），此方法可以为stream 提供https 支持。
    
15. stream.verifyPeer()
    根据被信任的证书列表或对方连接证书上下文的验证结果返回true 或false。
    
16. stream.getPeerCertificate()
    返回用JSON 结构详尽表述的对等方证书，
    其中包含一个证书的‘主题’，‘发布者’，'有效来源','有效目标'。
  
17. stream.write(data,encoding='ascii')
    通过stream 发送数据,
    第二个参数指定这个字符串实例的编码，缺省为ASCII，因为实用UTF8编码比较慢。
    如果全部数据安全写入内核缓冲区则返回true，
    如果全部或者部分数据仍然在用户空间排队则返回false, 
    当缓 冲区再次空闲的时候'drain'事件会被触发。

18. stream.end([data],[encoding])
    半关闭stream，也就是说，stream 发出一个FIN 包。这个时候可能服务器还会发出一些数据。
    当call 这个函数 后,readyState 会变成'readOnly'。
    如果使用了data 这个参数, 这就相当于call stream.write(data, encoding),
    其次后面跟随着 stream.end().stream.destroy() 请确保在这个stream 上没有任何I/O 活动。
    只有在错误发生的时候（为了调试错误）才需要调用此函数。
19. stream.pause()
    暂停数据的读取.更确切的说，'data'事件将不会被发出,这个方法在控制上传的时候非常有用。

20. stream.resume()
    恢复读取数据
    
21. stream.setTimeout(timeout)
    设置timeout 这么多毫秒作为stream 的超时时间，默认情况下net.Stream 没有超时时间。
    当超时事件被触发，stream 将受到一个‘timeout’事件，
    但是连接将不会被断掉，用户必须执行end()或者destroy 来结束这个stream。    
    如果timeout 为0，会禁用超时。

22. stream.setNoDelay(noDelay=true)
    禁止Nagle algorithm(Nagle 运算模式被设计用来减少LAN 和其它网络拥塞)，
    缺省情况下TCP 连接使用Nagle algorithm，此模式会在真正将数据发出前将其缓冲起来。
    设置noDelay 将在每次call stream.write()时立刻将数据 连续发出。
    
23. stream.setKeepAlive(enable=false,[initialDelay])
    允许/禁止keep-alive 功能，在一个空闲stream 首次收到keepalive 之前可以设置killalive 的延时。
    设置 initialDelay(毫秒)变量将设置接收到最后的数据包和首次keepalive 探测之间的时差。
    设置为0则保持缺省（或者 上一次的）设置的数值不变。
    
    
    
    
    
    
    
    
    
    