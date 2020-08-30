'use strict'

// const add = (x) => {
//   let sum = x;
//   function resultFn(y){
//     console.log(arguments);
//     if(arguments.length){
//         sum += y;
//         return resultFn;
//     }
//     return sum;
//   }
//   return resultFn;
// }

function add(a) {
  const sum = (b = 0) => {
    a += b
    return sum
  }
  sum.valueOf = () => a
  return sum
}

console.log(add(1).sums())
console.log(add(1)(2).sums())
console.log(add(1)(2)(3).sums())
console.log(add(1)(2)(3)(4).sums())
