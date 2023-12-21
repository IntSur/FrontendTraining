//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/json-server', (request, response)=>{
    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    
    //设置响应
    response.send('HELLO EXPRESS');
});

app.all('/json-server', (request, response)=>{// app.all为允许所有接收任意类型的请求
    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');// 允许所有域
    response.setHeader('Access-Control-Allow-Headers','*');// 允许所有头
    
    const obj1 = {
        name:'admin1',
    }

    const str1 = JSON.stringify(obj1);

    //设置响应
    response.send(str1);
});

//4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动, 8000 端口监听中....");
});