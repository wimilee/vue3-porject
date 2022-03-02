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
//let iphone: [string | number | boolean] = [9999, '苹果', 31, true]
//元祖有元素顺序和容量固定
let iphone: (string | number | boolean)[] = [9999, '苹果', 31, true]
console.log(iphone)
//
let thing: any
thing = 'apple'
console.log(typeof thing + thing)
thing = 3
console.log(typeof thing + thing)
thing = false
console.log(typeof thing + thing)
thing = ['hw', 'xiaomi']
console.log(typeof thing + thing)
thing = ['jack', 18, false]
console.log(typeof thing + thing)
thing = { name: 'rose', age: 24 }
console.log(typeof thing + thing)
thing = [9999, '苹果', 31, true]
console.log(typeof thing + thing)
thing = class ponit {
  constructor() {}
  play() {
    console.log('是个对象')
  }
}
console.log(typeof thing + thing)

class ab {
  constructor() {}
  get = () => 'baby'
}

let anglebaby: any = new ab()
console.log(anglebaby.get())

//unknown 需要明确类型后赋值

let hd: unknown = 'howdo'
//let a:string = hd  不能将类型unknown 分配给string
let b: string = hd as string
console.log(b)

//枚举

enum sex {
  boy,
  girl,
}

console.log(sex.boy)

enum boys {
  like = 1,
  age,
  meimei = 'san',
  gege,
}
console.log(boys.age)
