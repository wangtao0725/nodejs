  #Buffers 缓存对象

Buffer对象的大小不能调整，可以通过require('buffer').Buffer 来使用这个类
Buffer对象是全局对象
Buffer和js中String之间的转换需要制定编码方式

1. new Buffer(size)
    创建指定大小的Buffer对象
2. new Buffer(array)
    从数组新建Buffer对象
3. new Buffer(str, encoding = 'utf8')
    新建一个保存指定字符串的Buffer对象
4. buffer.write(string, offset = 0, encoding = 'utf8')
    使用指定的编码方式将字符串从指定偏移位置开始写入buffer，然后返回实际写入的大小。如果buffer空间不足，则会写入部分字符串
5. buffer.toString(encoding, start=0, end=buffer.length)
    解码buffer数据并使用指定的编码返回字符串， 转换从start开始到end结束
6. buffer[index]
    获取或者设置指定的字节。返回值代表一个字节，所以返回值是合法的16进制0x00~0xFF 或者十进制0~255
7. Buffer.byteLength(string, encoding='utf8')
    返回字符串的实际字节数。
8. buffer.length
   buffer的大小（以字节为单位）。这里是指非陪buffer的内存大小
9. buffer.copy(targetBuffer, targetStart, sourceStart, sourceEnd=buffer.length)
    在两个buffer之间执行内存拷贝
10. buffer.slice(start, end)
    返回和老的buffer引用同一段内存的新buffer对象，但是开始和结束的位置由start和end参数指定。修改新的buffer将会改变原来的buffer

https://0532.gitbooks.io/nodejs/content/global_objects/README.html