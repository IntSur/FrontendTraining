/* 引入fs模块 */
const { rejects } = require('assert');
const fs = require('fs');
const { promiseHooks } = require('v8');

/* 调用原生方法读取文件 */
// fs.readFile('../课件/代码/ES6/P24~29-ES6_Promise/resources/插秧诗.md', (err, data) => {
//     if(err) throw err;
//     console.log(data.toString());
// })

/* 用promise去读文件 */
let p = new Promise(function(resolve, reject) {
    fs.readFile('../课件/代码/ES6/P24~29-ES6_Promise/resources/插秧诗.md', (err, data) => {
        if(err){
            reject(err);
        }
        resolve(data.toString());
    })
})

p.then(function(value) {
    console.log(value);
}, function(reason) {
    console.error(reason);
})