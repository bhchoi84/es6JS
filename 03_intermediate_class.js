/**
 * 생성자 함수
 */

// 객체 리터럴
/*
let user = {
    name: 'Mike',
    age: 30
}
*/

// 생성자 함수 ( 함수명 첫글자 대문자 )
/*
function User( name, age ){
    this.name = name;
    this.age = age;
}

let user1 = new User('Mike', 30)
let user2 = new User('Tom', 25)
let user3 = new User('Jane', 50)

console.log(user1);
console.log(user2);
console.log(user3);
*/

/*
function User(name, age){
    this.name = name
    this.age = age 
    this.sayName = function(){
        console.log(this.name)
    }
}

let user10 = new User( 'Michale', 50)
user10.sayName()
let user11 = new User( 'Rocky', 20)
user11.sayName()
*/

function Item(title, price){
    // this = {};
    this.title = title
    this.price = price 
    this.showPrice = function(){
        console.log(`${title}의 가격은 ${price}원 입니다.`) // ``은 키보드 숫자 1옆의 백틱
    }
    // return this;
}

const item1 = new Item('라면', 800);
const item2 = new Item('구두', 150000); // undefined 함수의 return 이 없으므로 
const item3 = Item('가방', 80000);
item1.showPrice()
item2.showPrice()
item3.showPrice() // 03_intermediate_class.js:59 Uncaught TypeError: Cannot read properties of undefined (reading 'showPrice')


