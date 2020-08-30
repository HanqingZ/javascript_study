'use strict'

const fakeHTTPRequest = (() => {
  let i = 0;
  return () => {
    i += 1
    console.log(`it will response in ${3 - i % 4}s`)
    const value = `It's the ${i}th result`
    return new Promise((r) => { 
      setTimeout(
        () => r(value),
        (3 - i % 4) * 1000
      )
    })
  }
})();

(async () => { console.log(await fakeHTTPRequest()) })();
(async () => { console.log(await fakeHTTPRequest()) })();
(async () => { console.log(await fakeHTTPRequest()) })();

// let result;
// let globalMark = 0;
// const request = async () => {
//   let localMark = ++globalMark;
//   return new Promise((res) => {
//     fakeHTTPRequest().then(res1 => {
//       if (localMark !== globalMark) {
//         console.log(result);
//         return res(result)
//       };
//       result = res1
//       console.log(result);
//       return res(result);
//     })
//   })
// }


// (async () => { await request() })();
// (async () => { await request() })();
// (async () => { await request() })();
