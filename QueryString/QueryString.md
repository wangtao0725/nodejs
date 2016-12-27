# Query String 查询字串
1. querystring.stringify(obj,sep='&',eq='=',munge=true)
    
    序列化对象至查询字串。选择性地覆写默认分割符和增补字符(assignment characters)。
       eg:
       
            querystring.stringify({foo: 'bar'})
            // returns
            'foo=bar'
            querystring.stringify({foo: 'bar', baz: 'bob'}, ';', ':')
            // returns
            'foo:bar;baz:bob'

2. querystring.parse(str,sep='&',eq='=')
    
   反序列化查询字串至对象。选择性地覆写默认分割符和增补字符 (assignment characters)。
    


















































































