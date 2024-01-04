//这是一个入口文件
import * as m1 from './module1.js';
import * as m2 from './module2.js';
import * as m3 from './module3.js';

console.log(m1.name);
m3.default.function1();

/* 加入jQuery NPM包 */
import $ from 'jQuery';
$('body').css('background', 'blue');