//不要用解构来实现类似功能，考察 apply/call

function b() {
  console.log(arguments)
}

// a = (...args) => { 
//   b(...args.slice(args.length - 3))
// }

a = (...args) => {
  b.apply(this, args.slice(args.length - 3))
}

a = (...args) => {
  b.call(this, args.slice(args.length - 3))
}

a(1,2,3,4,5,6,7,8,9)
