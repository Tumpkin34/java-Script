// 각 객체 생성
var hong = {name: '홍길동', age: 20, level: 1};
var lee = {name: '이순신', age: 40, level: 2};
var jang = {name: '장보고', age: 19, level: 3};
// train객체에 위에 각 객체 담음
var train = new Array(hong, lee, jang);

// JS Object로 출력
console.log(train);
// JSON으로 출력
console.log(JSON.stringify(train));