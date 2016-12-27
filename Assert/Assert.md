# Assert 断言
此模块是用来编写单元测试的，你可以使用require('assert')访问该模块。

1. assert.fail(actual,expected,message,operator)

   此函数使用参数operator, 测试actual 和expected 是否相等。

2. assert.ok(value,[message])
    
    测试参数value 是否为true，此函数和assert.equal(true, value, message)等价。

3. assert.equal(actual,expected,[message])
    
    此函数为简便测试函数，使用操作符‘==’比较actual 和expected 是否相等。

4. assert.notEqual(actual,expected,[message])
    
    此函数为简便测试函数，使用操作符’！=‘比较actual 和expected 是否相等。

5. assert.deepEqual(actual,expected,[message])
    
    执行深度比较是否相等。

6. assert.notDeepEqual(actual,expected,[message])
    
    深度比较是否不相等。

7. assert.strictEqual(actual,expected,[message])
    
    此函数使用操作符‘===’严格比较是否两参数相等。

8. assert.notStrictEqual(actual,expected,[message])
    
    此函数使用操作符‘!==’严格比较是否两参数不相等。

9. assert.throws(block,[error],[message])
    
    测试代码块，期待其抛出异常。

10. assert.ifError(value)
    
    判断参数value 是否为false，如果为true 则抛出异常。
    通常用在回调函数中判断是否发生了错误。 
    eg:
        
            assert.ifError = function (err) {
                if (err) {
                    throw err; 
                }
            };











































































