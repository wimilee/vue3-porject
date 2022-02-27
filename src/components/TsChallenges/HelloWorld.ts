type HelloWorld = string // expected to be a string
//type HelloWorld = any
/* _____________ 测试用例 _____________ */
import { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>]
const hw: HelloWorld = '3'
//const apple: HelloWorld = 4
console.log(hw)
console.log('----')
//console.log(apple)
