// console.log('hello world')

// 1. var로 선언된 변수는 최상위로 끌어올려져서 undefined로 읽힌다.

console.log(name); // undefined => 최신 브라우저는 null로 처리됨
var name; // hoisting 되어 해당 스크립트 실행시 최상단으로 끌어올려진다. 그래서 윗줄의 name은 선언은 된것이다.
name = 'name 초기화'; // 할당은 hoisting 되지 않는다.
console.log(name)