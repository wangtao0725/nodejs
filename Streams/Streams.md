# Streams 流

stream是一个抽象接口，可以是只读，可写，可读可写。所有Stream对象都是EventEmitter的实例

#Readable Stream 只读流

一个只读流有如下方法，成员，和事件

1. Event:'data'

    function(data){}
    'data' 事件的参数是Buffer，如果调用过setEncoding()方法，则参数为为字符串

2. Event:'end'

    function(){}

    此事件在流遇到EOF（在TCP中为FIN）时触发，表示该流不会有数据，（不会再次触发‘data’事件）。如果该流是可写，则可以继续写入

3. Event:'error'
    function (exception){}
    在收取数据出错时被触发

4. Event:'close'
    function(){}
    内部的文件描述符被关闭时被触发，并不是所有流都会触发此事件

5. Event:'fd'
    function(fd){}
    当数据流接收到文件描述符信息时触发该事件（一个文件数据流包含两部分信息：文件描述符和文件的数据信息）。
   
6. stream.readable
    默认为true。当遇到错误或者流读到结尾或者调用destroy()函数后，改值被置为false
    
7. stream.setEncoding(encoding)
    该函数设置data事件返回字符串而不是Buffer对象， 编码类型可设置为utf8,ascii，base64

8. stream.pause()
    暂停触发data事件
    
9. stream.resume()
    恢复触发‘data’事件
    
10. stream.destroy()
    关闭内部的文件描述符。这样该流将不会再触发任何事件
    
# Writable Stream 可写流

1. Event:'drain'
    function(){}
    在一个write()方法被调用并返回false后触发，表明可以安全的再次写入该stream
  
2. Event:'error'
    function(exception){}
    在异常发生错误触发
    
3. Event:'close'
    function(){}
    当底层的文件描述符已终止时发出
    
4. stream.writeable
    缺省为true，但是产生‘error’，或者是end()/destroy()被调用后，为false
    
5. stream.write(string, encoding='utf8', [fd])
    使用指定的编码将字符串写入到流中。
    如果字符串已被刷新到内核缓冲区，返回true。
    返回false 则表明 内核缓冲区 已满，数据将在未来被发送出去。
    'drain'事件用来通知内核缓冲区何时为空。此方法的默认编码为 'utf8'。
    如果指定了可选参数fd，它将被当做一个文件描述符并通过流来发送。
    它只支持UNIX流，否则会被忽略且没有任何提示。
    当用这种方式发送文件描述符时，在流清空之前关闭文件描述符可能导致发送出非法的描述符。

6. stream.write(buffer)
    同上，除了使用一个原始缓冲区
    
7. stream.end()
    通过EOF或FIN来终止流
    
8. stream.end(string, encoding)
    根据指定的编码发送字符串， 并通过EOF或FIN来终止流。这对减少发送数据包的数量非常有用
    
9. stream.end(buffer)
    同上，但使用一个缓冲区
   
10. stream.destroy()
    终止底层的文件描述符，此后流不在发出任何事件