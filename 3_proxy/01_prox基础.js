let proxy_obj = new Proxy({}, {
  get(target, prop){
    console.log('获取值', target, prop)
    return target[prop] || '默认值'
  },
  set(target, prop, value){
    console.log('设置值', target, prop, value)
    target[prop] = value
  },
})

proxy_obj.a = 100
console.log(proxy_obj.a)  // 100 
console.log(proxy_obj.b)  // 默认值
