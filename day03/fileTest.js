// 파일입출력 준비물
let file = require('fs'); //node.js에 있는 모듈 import
let user = new Object();
let userJSON;

user.name = "황지수";
user.id = "hds1234";
user.pw = "1234";

userJSON = JSON.stringify(user);
console.log(userJSON);

// 형식---------------------------------------------
// 출력
// file.writeFile('경로', '내용', '인코딩', '콜백함수');
// 입력
// file.readFile('경로', '인코딩', '콜백함수');

// 상대 경로에 user.json파일을 만들어 userJSON을 출력한다
file.writeFile('user.json', userJSON, 'utf-8', function(e){
    // 오류 발생시
    if(e){
        console.log(e);
    }else{
        console.log("출력 성공!");
    }
});

// 상대경로에 user.json파일을 읽는다.
file.readFile('user.json', 'utf-8', function(e, content){
    if(e){
        console.log(e);
    }else{
        // 받아온 JSON형식의 문자열을 jS Object로 바꾼다.
        let user = JSON.parse(content);
        console.log(user.name);
    }
});