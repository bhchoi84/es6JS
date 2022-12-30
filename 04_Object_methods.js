/**
 * Intermediate Class
 * Object 
 * methods 
 *  Computed property
 */

let a = 'age';

const user = {
    name: 'Mike',
    [a]: 30 // computed property
    // [a] 가르키는 변수의 할당된 값이 변수가 되고 거기에 30이 할당 
    // let a = 'age => let age로 30이라는 값이 할당 
}
/*
console.log(user.name)
console.log(user.age)
console.log(user)
*/

/*
user
{name: 'Mike', age: 30}
*/

/*
const expr = {
    [1+4]: 5,
    ["say"+"Hello"]: "hello"
}
console.log( expr )
// { 5: 5, 안녕하세요: "hello"}
console.log( expr.sayHello ) // hello 찍힘
*/

/**
 * Methods 
 * Object.assign()
 * Object.keys()
 * Object.values()
 * Object.entries()
 * Object.fromEntries()
 */

/*
const person = {
    name: 'Mike',
    age: 30
}

const clonePerson = person // 변수의 주소값 복사로 인해 둘다 같은 할당 공간을 바라 보므로
// 한개 수정시 둘다 변경된다.

const newPerson = Object.assign({}, person); // {} 초기값 , 두번째값부터 병합
// {} + { name: 'Mike', age: 30 } => 병합

newPerson.name = 'Tom';
console.log('newPerson name : ' + newPerson.name) // Tom
console.log('person name : ' + person.name) // Mike 

*/

/*
const person = {
    name: 'Mike',
    age: 30
}

let otherPerson = Object.assign({gender: 'male'}, person);
console.log(otherPerson); // { { gender: 'male, name: 'Mike', age: 30}}

 otherPerson = Object.assign({name: 'Ally'}, otherPerson); // 같은 속성으로 복사하면 덮어쓴다.
 console.log(otherPerson) // { { gender: 'male, name: 'Mike', age: 30}} 
 
*/

/*
const user1 = {
    name: 'Mike'
}

const info1 = {
    age: 30
}

const info2 = {
    gender: 'female'
}

const aggrePerson = Object.assign(user1, info1, info2);
console.log(aggrePerson)
*/

/*
// Object.keys => Object의 key를 배열로 반환
const user2 = {
    name: 'Mike',
    age: 30,
    gender: 'mare'
}

// key들만
const user2Key = Object.keys(user2);
console.log(user2Key);

// value 만
const user2Values = Object.values(user2)
console.log(user2Values)

// object key:value => [["",""],["",""]] 배열의 쌍으로 저장
// Object.entries()
// 객체 -> 배열
const objectArray = Object.entries(user2)
console.log(objectArray)


// 배열 -> 객체
// Object.fromEntries
const userObject = Object.fromEntries(Object.entries(user2))
console.log(userObject)
*/


// computed 응용
function makeObject(key, val){
    return {
        [key]: val
    }
}

const obj = makeObject('age', 30)
console.log(obj);