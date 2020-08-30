const config = {
  wechat: {
    appKey: 'mock appKey',
    appSecret: 'mock appSecret'
  }
}

Object.entries(config.wechat).map(ele => {
  Object.defineProperty(config.wechat, ele[0], {
    writable: false
  })
})

config.wechat.appKey = 'change app key' // 避免改变 config 内部的任何值

// expect(config.wechat.appKey).toBe('mock appKey')
console.log(config.wechat.appKey);
