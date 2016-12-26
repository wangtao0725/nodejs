# EventEmitter事件触发器

所有能触发事件的对象都是events.EventEmitter的实例
通过调用require('events').EventEmitter,我们可以使用EventEmitter类
当向EventEmitters（事件触发器）对象上注册新的时间监听器时，都会触发'newListener'事件。 
当事件触发器过程中出现错误时，典型的处理方式是它将触发一个'error'事件。
Error 事件的特殊性在于：如果 没有函数处理这个事件，它将会输出调用堆栈，
并随之退出应用程序。

1. Event:'newListener'
    function(event, listener) {}
   该事件在添加新监听器时被触发
   
    Event:'error'
    function(exception) {}
    如果发生错误，‘error’事件将会被触发。这是一个特殊事件，如果没有相应的监听函数监听这个事件，node将会结束应用程序的执行并显示异常堆栈

2. emitter.on(event, listener)
    向指定的事件监听器数组尾部添加一个新的监听器
    
    server.on('stream', function(stream){
        console.log('someone connected!')
    })

3. emitter.removeListener(event, listener)
    从指定监听器数组中删除一个监听器。需要注意的是， 此操作将会改变处于被删监听器之后的那些监听器的索引
    
    var callback = function(stream){
        console.log('someone connected!');
    };
    server.on('stream', callback);
    //...
    server.removeListener('stream', callback);
    
4. emitter.removeAllListeners(event)
    删除指定事件的所有监听器

5. emitter.listeners(event)
    返回指定事件的监听器数组。
    
    server.on('stream', function(stream){
        console.log('s o c!')
    });
    console.log(sys.inspect(server.listeners('stream')))
    emitter.emit(event, [arg1], [arg2], [...])
    
    使用所提供的参数，将依次执行事件监听器数组中的每一个监听函数。