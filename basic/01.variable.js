console.log('123')
// var,let,const
// scope=블럭 {...}

// 1.var
// 읽기, 쓰기 가능하다
// 블럭을 무시한다

{
    var user = 'Jonh'
    user = 'Alice'
    console.log(user)
}

console.log(user)

// 2. let
// 읽기 쓰기 가능하다

{
    let title = 'html'
    console.log(title)

    title = 'css'
    console.log(title)
}
// console.log(title)

// 3. const
// 상수-읽기만 가능 - 변하지않는다

{
    const subject = '야인시대'
    console.log(subject)

    // subject = "배트맨"
}

// 4. 변수의 데이터 타입
// 원시 데이터 (primitive)Number,string,boolean,null,undefined
// object :싱글데이터를 묶어놓은 데이터
// const myClass = {
//     subject: 'html'
//      date: '2023-12-13'

// }
// function
// const hahahah = function () {
//....할일을 적어준다
// console.log("hahahah~~~~~")
// }

//number
const num = 100
const width = 10.5
console.log(`값은 ${num}이고, 타입은 ${typeof num}입니다.`)

const a = 1 / 0
const b = -25 / 0
const c = 'html' / 10

console.log(a)
console.log(b)
console.log(c)

// String
const first_name = 'jonh'
const last_name = 'snow'
const full_name = first_name + last_name
console.log(full_name)
console.log(`${first_name} ${last_name}`)
