const text = '字符'

console.log('原型',text.prototype) // undefined
console.log('原型链',text.__proto__) // String {}

const obj = {
  name: '对象',
}
console.log('原型',obj.prototype) // undefined
console.log('原型链',obj.__proto__) // {}