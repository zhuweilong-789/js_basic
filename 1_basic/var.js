var a = [] // 定义一个全局变量
for(var i = 0;i<10;i++){ // 这里定义的也是全局变量i
  a[i] = function() { console.log(i) } // 导致这里的i都是全局变量i，共享的是全局变量的值
}

console.log('数据', a[6]())


for(let j = 0;j<10;j++){ // for循环函数和for内部是两个作用域，1:如果是相同作用域不可以重复声明
  let j = 'abc'
  console.log(j)
}

