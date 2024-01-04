'use strict';

var _module = require('./module1.js');

var m1 = _interopRequireWildcard(_module);

var _module2 = require('./module2.js');

var m2 = _interopRequireWildcard(_module2);

var _module3 = require('./module3.js');

var m3 = _interopRequireWildcard(_module3);

var _jQuery = require('jQuery');

var _jQuery2 = _interopRequireDefault(_jQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(m1.name); //这是一个入口文件

m3.default.function1();

/* 加入jQuery NPM包 */

(0, _jQuery2.default)('body').css('background', 'blue');