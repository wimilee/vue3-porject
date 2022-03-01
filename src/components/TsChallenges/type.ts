const red: string = '红色'
const age: number = 18
const man: boolean = true
//arr
let phone: string[] = []
phone.push('hw', 'xiaomi')
//泛型
let school: Array<string> = []
school.push('teacher', 'student')

let website = new Array<string>(3).fill('www.baidu.com', 1, 2)
console.log(phone)
console.log(school)
console.log(website)
//元祖
let boy: [string, number, boolean] = ['jack', 18, false]
console.log(boy)
//对象
let woman: { name: string; age: number } = { name: 'rose', age: 24 }

console.log(woman)
//union
let score: string | number = '不及格'
console.log(score)
score = 59
console.log(score)
let iphone: (string | number | boolean)[] = [9999, '苹果', 31, true]
console.log(iphone)
