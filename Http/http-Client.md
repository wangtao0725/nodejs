# http.Client

使用服务器地址作为参数来构造一个HTTP client，其返回的句柄可用来发出一个或者多个请求。
根据连接的服 务器不同，这个客户端可以使用管道处理机制来处理请求或者每个请求重新构建stream。
当前的实现方式并没 有用管道处理机制处理请求.
Example of connecting to google.com:
var http = require('http');
var google = http.createClient(80, 'www.google.com');
var request = google.request('GET', '/',{'host': 'www.google.com'});
request.end();
request.on('response', function (response) {
    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + JSON.stringify(response.headers));
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

1. Event:'upgrade'
    function(request, socket, head) {}
    当服务器响应upgrade请求时触发此事件，
    如果这个消息没有被监听，客户端接受到一个upgrade头的话会导致这个连接被关闭
    
2. http.createClient(port, host='localhost', secure=false, [credentials])
    构造一个新的HTTP客户端。port和host指明了将要连接的目标。在发出请求之前不会建立流。
    secure用来表示是否启用HTTPS。
    credentials是一个来自于crypto模块的可选参数，
    credentials中可以包含client的私钥，证书以及一个可信任的数字认证中心的证书列表。
    
3. client.request(method='GET', path, [request_headers])
    发出一个请求，在必须时建立一个流。该函数返回一个http.ClientRequest 对象。
    method 是可选项，缺省会以 GET 方式发出请求
    request_headers 是可选项。
    请求头的额外部分一般由NODE 内部实现。
    该函数返回一个ClientRequest 对象 如果你就想要发送一个信息体，
    记得要在头信息里包含Content-Length 项。
    如果你想要将BODY 通过流的方式 传输发送，或许需要设置Transfer-Encoding: chunked.
  
4. client.verifyPeer()
    返回true/false并在上下文附带服务器定义的或者缺省数字认证中心的有效证书列表
    
5. client.getPeerCertificate()
    返回JSON结构详尽表述的服务器方证书，('subject','issuer','valid_from','valid_to')