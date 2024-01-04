let btn = document.querySelector('div');
btn.onclick = function() {
    /* import()动态引入模块 实现懒加载 优化运行效率 */
    let p1 = import('./hello.js');
    console.log(p1);
    p1.then(module => {
        module.hello();
    })
}