#通过sys访问模块

需要通过require('sys')访问
1. sys.print(string)
    此函数和console.log()类似，只是不输出结尾的换行符
    require('sys').print('String with no newline')
    
2. sys.debug(string)
    同步输出函数，此函数将阻塞进程并将字符串打印到标准错误输出（stderr）
    
3. sys.log(string)
    将字符串输出至标准输出（stdout，就是控制台），附加时间戳
    
4. sys.inspect(object, showHidden=false, depth=2)
    将对象转化为字符串的形式返回，对调试非常有用
    如果showHidden参数设定为true，则对象的非枚举属性也会被转化。
    如果指定depth参数，它会告诉解析器（inspectter）格式化对象的时候要递归的次数。
    默认只递归两次，想无限递归 传递null
    
5. sys.pump(readableStream, writeableStream, [callback])
    从readableStream读取数据并写入writeableStream，
    如果writeableStream.write(data)返回false，readableStream将暂停，直到
    如果writeableStream的drain事件被触发。
    当如果writeableStream关闭或者错误发生时，回调函数会被调用，并接受一个表示错误的参数