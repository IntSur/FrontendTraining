//引入 fs 模块
const fs = require('fs');

let p = new Promise((resolve, reject) => {
    fs.readFile('../课件/代码/ES6/P24~29-ES6_Promise/resources/插秧诗.md', (err, data) => {
        resolve(data);
    })
});

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('../课件/代码/ES6/P24~29-ES6_Promise/resources/为学.md', (err, data) => {
            resolve([value, data]);
        })        
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('../课件/代码/ES6/P24~29-ES6_Promise/resources/观书有感.md', (err, data) => {
            value.push(data);
            resolve(value);
        })
    })
}).then(value => {
    console.log(value.join('\r\n'));
})