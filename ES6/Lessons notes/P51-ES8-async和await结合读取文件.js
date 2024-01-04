const fs = require('fs');

function readfile1() {
    return new Promise((resolve, reject) => {
        fs.readFile('../课件/代码/ES6/P24~29-ES6_Promise/resources/插秧诗.md',(err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}
function readfile2() {
    return new Promise((resolve, reject) => {
        fs.readFile('../课件/代码/ES6/P24~29-ES6_Promise/resources/为学.md',(err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}
function readfile3() {
    return new Promise((resolve, reject) => {
        fs.readFile('../课件/代码/ES6/P24~29-ES6_Promise/resources/观书有感.md',(err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

async function main() {
    let file1 = await readfile1();
    let file2 = await readfile2();
    let file3 = await readfile3();
    console.log(file1.toString());
    console.log(file2.toString());
    console.log(file3.toString());
}

main();