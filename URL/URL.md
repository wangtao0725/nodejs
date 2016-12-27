# URL模块

url对象: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'

1. href:

    原始的URL。
    'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'

2. protocol

   请求的协议
   'http' 

3. host

   URL 中主机地址部分，包括端口和验证信息。
   'user:pass@host.com:8080' 

4. auth
    
   URL 中的验证信息。
   'user:pass' 

5. hostname
    
   仅仅包括主机地址。
   'host.com' 

6. port
    
   主机的端口号。
   例如：'8080' 

7. pathname
    
    URL 中的路径(path)部分，即紧跟在主机地址之后查询参数之前的部分，包括路径开头的斜线。
    例如：'/p/a/t/h'

8. search
    
    URL 中的参数部分，包括开头的问号。
    例如：?query=string

9. query
    
   查询字符串中的参数部分或者是解析过的查询字串对象
   例如：'query=string' 或者{'query':'string'} 

10. hash
    
    URL 中的锚记部分，包括开头的井号。
    例如：'#hash' 
    
11. url.parse(urlStr,parseQueryString=false)   
    
    此函数接受一个URL 字符串并返回一个对象。
    如果第二个参数传递true，node 会使用querystring 模块解析查询 字符串。

12. url.format(urlObj)
    
    此函数接受一个URL 对象，并返回一个格式化后的URL 字符串。

13. url.resolve(from,to)
    
    此函数接受一个base URL 和一个href URL，并像浏览器解析锚记一样解析它们。













































































