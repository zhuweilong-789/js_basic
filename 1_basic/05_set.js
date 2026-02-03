const set = new Set([1, 2, 3, 4, 5, 5, 5, 5]) // set 里面不会有重复的值
console.log(set)

set.add(6) // 通过add方法添加值

set.add({}) // 添加对象时，对象的引用地址不同，所以不会被认为是重复的值
set.add({}) // 这里是两个值

console.log(set) // Set(8) {1, 2, 3, 4, 5, 6, {…}, {…}}

console.log(Set.prototype)


/**
 * 一个注意点：就是set结构的对象，键和值是相等的，所以在set结构中，键和值是同一个值
 */

const set2 = new Set(['red', 'green', 'blue'])

for (const item of set2.keys()) {
  console.log(item) // red green blue
}

for (const item of set2.values()) {
  console.log(item) // red green blue
}

for (const item of set2.entries()) { // entries方法返回的是键值对数组
  console.log(item) // ['red', 'red'] ['green', 'green'] ['blue', 'blue']
}

for (const item of set2) {
  console.log(item) // red green blue
}


const set3 = new Set()
console.log([...set3]) // [] 空数组, 通过拓展运算符会把set结构的对象转换为数组