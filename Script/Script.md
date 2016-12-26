# Script 脚本

var Script = process.binding('evals').Script;```

JavaScript 代码可以被编译、立刻执行或者编译、保存、延时执行。

1. Script.runInThisContext(code, [filename])
    同process.compile函数类似，Script.runInThisContext函数编译执行code参数包含的代码并返回结果
    就如同这些代码是从filename参数指定文件中加载的一样。这些代码不能访问本地作用域。filename参数是可选的
    
2. Script.runInThisContext
    函数执行的代码并不访问本地作用域，所以localVar 变量的值并没有改变。
    eval 函数执 行的代码可以访问本地作用域，所以localVal 的值被改变了。
    如果代码有语法错误，Script.runInThisContext 会输出错误信息到控制台（stderr）并抛出异常。
   
3. Script.runInNewContext(code, [sandbox], [filename])
    将代码编译并在sandbox参数指定的作用域内执行代码并返回结果。如同代码从文件中加载的一样。执行的代码并不能访问本地作用域
    sandbox参数指定对象将作为代码执行的全局对象
    请注意，执行不信任的代码(untrusted code)是一项需要技巧的工作。Script.runInNewContext 函数非常有用，它可 以在一个独立的线程中执行不信任的代码防止全局变量被意外修改。
    如果代码有语法错误，Script.runInThisContext 会输出错误信息到控制台（stderr）并抛出异常。
    
4. new Script(code, [filename])
    新建Script 对象会编译code 参数指定的代码，就如同代码是从filename 参数指定的文件中加载的一样。
    和其他 函数不同的是，它将返回一个代表经过编译的代码的Script 对象，这个对象可以使用下面介绍的函数执行内部 编译好的代码。
    这个script 对象并不绑定到任何全局对象，但是可以在运行时绑定到指定对象，每次绑定仅在 本次运行时生效。
    filename 参数是可选的。
    如果代码有语法错误，new Script emits 会输出错误信息到控制台（stderr）并抛出异常。
    
  &&  script.runInThisContext() &&
  该函数执行对象中代码并返回结果。执行的代码并不会访问本地作用域
  
  &&  script.runInNewContext([sandbox]) &&
  该函数将sandbox参数指定的对象作为全局对象执行代码，并返回结果。执行的代码并不访问本地作用域
  
  