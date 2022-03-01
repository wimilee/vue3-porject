let hw = '华为'
//hw = 2 //不能将类型“number”分配给类型“string”
console.log(typeof hw) // node type.js ==> number
console.log(hw) //2
let state = true
console.log(typeof state)
//arr
const arr = ['huawei', 'apple']
//arr.push(3) //"类型“number”的参数不能赋给类型“string”的参数
console.log(arr) // node type.js ==>[ 'huawei', 'apple', 3 ]

const arr2 = ['huawei', 'xiaomi', 2]
arr2.push('apple', 1)
console.log(arr2) //[ 'huawei', 'xiaomi', 2, 'apple', 1 ]

//object
const human = { name: 'jack', age: 18, isman: true }
console.log(typeof human.name)
console.log(typeof human.age)
console.log(typeof human.isman)

const girl = { name: 'rose', age: 21, isman: false, relation: [{ dad: 'mark' }, { mom: 'jerry' }] }

console.log(typeof girl.relation[1].mom) //string
