'use strict'

function b() {
  console.log(arguments)
}

a = (...args) => {
  b.apply(this, args.slice(args.length - 3))
}

a = (...args) => {
  b.call(this, args.slice(args.length - 3))
}

a(1,2,3,4,5,6,7,8,9)
