'use strict'
const Promise = require('any-promise')

// Promise.each()   挨个串行处理
// Promise.race()   方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。
// Promise.trunk()  一组一组的执行

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.each = (arg, func) => {
  
}
