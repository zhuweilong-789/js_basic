/**
 * 指数运算符
 */
console.log(2 ** 3); // 8


/**
 * 链式调用运算符
 * 如果左侧的对象是null或undefined，返回undefined，否则返回右侧的属性值
 */
const name = Obj?.account?.name

/**
 * ??运算符和||运算符的区别
 * ??运算符：当左侧的值是null或undefined时，返回右侧的值，否则返回左侧的值
 * ||运算符：当左侧的值是false、0、NaN、''、null、undefined时，返回右侧的值，否则返回左侧的值
 */
const foo = null ?? 'default string'; // 'default string'
const bar = 0 || 42; // 42
