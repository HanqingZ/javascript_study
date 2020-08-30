'use strict'

// function add(x) {
//   return function(y) {
//     if (y) {
//       return add(x+y);
//     }
//     return x;
//   };
// }

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

// var add = (function() {
//   let sum = 0;
//   function add(n) {
//     sum += +n || 0;
//     return add;
//   }
//   add.valueOf = function(){
//     return sum;
//   }
//   return add;
// }());
// add(1)(2)
// add(2)(3)()

// function add(a) {
//   const sum = (b = 0) => {
//     a += b
//     return sum
//   }
//   sum.valueOf = () => a
//   return sum
// }

// function add(value) {
//   "use strict";
//   var plus = function () {
//       var args = [];
//       var adder = function adder() {
//           console.log(arguments);
//           Array.prototype.push.apply(args,Array.prototype.slice.apply(arguments))
//           return adder;
//       }
//       adder.toString = function () {
//           return args.reduce(function(a, b) {
//               return a + b;
//           })
//       }
//       return adder;
//   }
//   return plus()(value);
// }

function plus(value) {
  "use strict";
  var add = function () {
      var args = [];
      var adder = function adder() {
          Array.prototype.push.apply(args,Array.prototype.slice.apply(arguments))
          return adder;
      }
      adder.toString = function () {
          return args.reduce(function(a, b) {
              return a + b;
          })
      }
      return adder;
  }
  return add()(value);
}

// console.log(add(2)(3)(4).sums())
// console.log(add(2)(3)(4).sums())
// console.log(add(2)(3)(5)())
console.log(add(1)(2)(4).toString());

