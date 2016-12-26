# File System 文件系统

1. fs.rename(path1, path2, [callback])  //  fs.renameSync(path1, path2)
   异步命名(rename(2))。只传递异常给回调函数       同步命名
    
2. fs.truncate(fd, len, [callback])     //  fs.truncateSync(fd, len)
   异步截断。只传递异常给回调函数                 同步截断
       
    
3. fs.chmod(path, mode, [callback])     //  fs.chmodSync(path, mode)
   异步更改文件权限。只传递异常给回调函数          同步更改文件权限
   
    
4. fs.stat(path, [callback])            //  fs.statSync(path)
   利用路径异步读取属性.                        同步读取属性(stat(2))。返回fs.Stats。  
   回调函数的第二个参数是
   fs.Stats对象(err, stats)
   
5. fs.lstat(path, [callback])           //  fs.lstatSync(path)
    利用路径读取属性                           利用路径同步读取属性(lstat(2))。返回fs.Stats。 
    如果这个文件参数是一个符号连接，则
    返回该符号连接的属性
    回调函数的第二个参数是
    fs.Stats对象(err, stats)
6. fs.fstat(fd, [callback])             //  fs.fstat(fd)
    利用存在的指标异步读取属性                   利用存在的指标同步读取属性(fstat(2))。返回fs.Stats。
    回调函数的第二个参数是
    fs.Stats对象(err, stats)
    
7. fs.link(srcpath, dstpath, [callback]) //  fs.linkSync(dstpath, srcpath)
    异步建立连接。只传递异常给回调函数               同步建立连接(link(2))。
    
8. fs.symlink(linkdata, path, [callback]) //  fs.symlinkSync(linkdata, path)
    异步建立符号连接。只传递异常给回调函数            同步建立符号连接

9. fs.readlink(path, [callback])          //  fs.readlinkSync(path)
    异步读取连接。                               同步读取连接。返回已解析的文件路径。                
    回调函数第二个参数是
    已解析的文件路径(err,resolvedPath)

10. fs.realpath(path,[callback])            //  fs.realpathSync(path)
    异步读取绝对路径名称，                            同步读取绝对的路径名称返回已解析的文件路径
    回调函数的第二个参数是已解析的文件路径

11. fs.unlink(path, [callback])             //  fs.unlinkSync(path)
    异步删除连接，只传递异常给回调函数                   同步删除连接

12. fs.rmdir(path, [callback])              //  fs.rmdirSync(path)
    异步删除目录                                      同步删除目录
    
13. fs.mkdir(path, mode, [callback])        //  fs.mkdirSync(path, mode)
     异步建立目录                                    同步建立目录

14. fs.readdir(path, [callback])            //  fs.readdirSync(path)
    异步读取目录中的内容。                           同步读取目录中的内容。  

15. fs.close(fd, [callback])                //  fs.closeSync(fd)
    异步结束                                        同步结束
    
16. fs.open(path,flags,mode=0666,[callback]) //    fs.openSync(path, flags, mode=0666)
    异步开启文件。标签可为'r','r+','w','w+','a','a+'   同步开启文件
    回调函数第二个参数是指标
    
17. fs.write(fd,buffer,offset,length,position,[callback]) 
    透过指标(fd)写入缓冲区至文件。                                
    offset 偏移 和 length 长度 决定哪一部份的缓冲区被写入。 
    position 写入位置 若 position 为空，则写入至现存位置。
    回调函数的第二个参数是写入动作的数据大小(bytes)。(err, written)
    
    //  fs.writeSync(fd,str,position,encoding='utf8')
        fs.write(字串)的同步方式。返回写入动作的数据大小。  
    //  fs.write(fs,buffer,offset,length,position)
        fs.write(缓冲区)的同步方式。返回写入动作的数据大小
         
18. fs.read(fd,buffer,offset,length,position,[callback])
    透过指标(fd)读取数据。
    buffer 是读取的数据的存放位置。
    offset 是标注哪里开始写入缓冲区。    
    length 是以整数型态(INT)标注读取的数据大小。    
    position 是以整数型态(INT)标注文件的读取位置。
    若 position 为空，则由现存位置读取。
    回调函数的第二个参数是读取动作的数据大小(bytes)。(err, bytesRead)
    //  fs.readSync(fd,buffer,offset,length,position)
        fs.read(缓冲区)的同步方式。返回读取动作的数据大小。
    
19. fs.read(fs,length,position,encoding,[callback])
        透过指标(fd)读取数据。        
        length 是以整数型态(INT)标注读取的数据大小。        
        position 是以整数型态(INT)标注文件的读取位置。若 position 为空，则由现存位置读取。        
        encoding 是读取数据的预期编码。 回调函数的第二个参数是读数的数据而第三个参数是读取动作的数据大小(bytes)。(err, str, bytesRead)
    //  fs.readSync(fd,length,position,encoding)
        fs.read(字串)的同步方式。返回读取动作的数据大小。

20. fs.readFile(filename,[encoding],[callback])  //  fs.readFileSync(filename, [encoding])
    透过文件路径异步读取内容                                若encoding被指定，返回字符串， 反之则返回原始buffer
    回调函数的第二个参数是文件内容

21. fs.writeFile(filename,data,encoding='utf8',[callback]) //  fs.writeFileSync(filename,data,encoding='utf8')
    异步写入数据至文件，data可以为字符串或缓冲区

22. fs.watchFile(filename,[options],listener)
    观察文件异变。文件异动时会触发监听函数。
    传递给监听函数的参数分别是当前状态对象(curr)以及前次状态对象(prev)。

23. unwatchFile(filename)
    停止观察文件异变

24. fs.Stats   获取文件信息
 
25. fs.ReadStream 读取文件

26. fs.WriteStream 写入文件
    Event: 'open' function (fd) { }
    
    fd 是可写流使用的文件描述符。 fs.createWriteStream(path, [options]) 此函数新建一个WriteStream 对象（参见"可写流"章节）。
    
    options is an object with the following defaults:
    
    options 是一个具有如下默认值的对象：
    
    {
    'flags': 'w'
    , 'encoding': 'null'
    , 'mode': 0666
    }