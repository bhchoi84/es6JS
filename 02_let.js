/*
1. let은 hoisting 되지만 Temporal Dead Zone에 의해서 에러가 발생한다.
console.log(name); // 01_variables.js:1          Failed to load resource: net::ERR_FILE_NOT_FOUND
// 위 영역은 Tempral Dead Zone 사용할수없다.
let name; // 변수 선언 
name = 'name 초기화' // 변수 할당
console.log(name);

// let도 hoisting 된다. 
// 스코프 내부어디서든 변수선언은 최상위에 선언된것 처럼 행동한다.
*/

/*
let age = 30 // 1. age 30
function showAge(){
    console.log(age);  // 3. age = 30
    let age = 20; // 4. hoisting 되어 age = 20
}
showAge(); // 2. 함수 호출 
*/


// 예상: 출력은 30이 나올것 같다.


// 결과 :  Uncaught ReferenceError: Cannot access 'age' before initialization
// 에러가 발생한다. 
// line: 16 의 age가 hoisting되지만 TDZ에 의해 에러가 발생한다.
// line: 16 의 age는 함수 스코프이다.
 
// 변수 생성과정 

// 1. 선언
// 2. 초기화
// 3. 할당


// var 
// 선언과 초기화가 동시에 진행 
// 초기화를 undefined로 한다.

// let 
// 선언과 초기화가 분리
// 1. 선언이 되지만
// 2. 초기화 되기 전에 사용을 하면 refenceError가 발생 
//    초기화 되지 않았는데 사용하기 때문 


// const 
// 선언 + 초기화 + 할당을 동시에 진행한다.
// Uncaught SyntaxError: Missing initializer in const declaration
// const는 선언과 초기화 + 할당이 동시에 되어야한다.

/*
let name ;
name = 'let name'

var age;
age = 30;

const gender;
gender = 'male' // 에러 발생


// var : 함수 scope
// let, const : 블록 scope

// 블록 
// 함수, if, for, while try catch 
*/


/*
const age = 30;
if( age > 20){
    var txt = '성인';
}
console.log(txt); // 정상 성인 출력 

if( age > 20 ){
    let letText = '어른'
}
console.log(letText); // 에러
// Uncaught ReferenceError: letText is not defined
// 선언은 hoisting 되지만 
// 초기화가 되지 않은 상태에서 할당된 값을 사용할려고 하니 에러 발생 
*/

function add( num1, num2){
    var result = num1 + num2; // var는 함수 scope
}

add(2,4);
console.log( result ); // 02_let.js:94 Uncaught ReferenceError: result is not defined
// 함수 스코프라 선언이 안된것으로 not define


