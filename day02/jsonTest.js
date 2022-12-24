// 프로퍼티에 ""(two quotation)이 있으면 JSON이고,
// 프로퍼티에 어떠한 따옴표도 없으면 JS Object이다.
// JSON.parse() : JSON형식을 JS Object타입으로 변환
// JSON.stringify() : JS Object타입을 JSON형식으로 변환

// JS Object
user = {name: "한동석", age: 20};
// user를 JSON형식화 
userJSON = JSON.stringify(user);
// JSON형식의 userJSON출력
console.log(userJSON);

// userJSON을 JS Object화
user = JSON.parse(userJSON);
// user안에 프리퍼티인 이름을 출력
console.log(user.name);