# http.ClientRequest
http.Client的request()方法建立并返回http.clientRequest对象。
该对象代表一个进行中的请求，该请求的信息头已经发送出去
要获得回应，可以为request对象增加一个'response'事件监听器。
'response'事件将在request对象接收到响应头的时候被触发，
'response'事件的处理函数接收一个参数，该参数是http.ClientResponse的实例

1. Event:'response'
    function(){}
    在响应被接收后触发。仅被发出一次，参数response是http.ClientResponse的实例
    
2. request.write(chunk,encoding='utf8')
    发送body中的一块。用户可以通过多次调用这个方法将请求数据包通过流的方式发送到服务器。
    把['Transfer-Encoding','chuncked']放在请求头里。
    参数chunk应当是数字索引的数组或者字符串
    encoding可选，在chunk为字符串是使用
    
3. request.end([data],[encoding])
    完成本次请求的发送。
    如果使用参数data，
    就等于在调用request.write(data, encoding)之后紧接着调用request.end()。