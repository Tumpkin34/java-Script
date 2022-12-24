/* JS에서는 오버로딩을 지원하지 않습니다. */
// function add(num1, num2, num3){
//     return num1 + num2 + num3;
// }

// function add(num1, num2){
//     return num1 + num2;
// }

// JS에서 동일한 식별자로 함수를 여러 번 선언하면,
// 가장 마지막에 선언한 함수로 결정된다.

console.log(add(1, 3));
console.log(add(1, 2, 3));

// 가변인자
function add(...args: any[]){
    var total = 0;
    for(let i = 0; i < args.length; i++){
        total += args[i];
    }
    return total;
}

console.log(add(1, 3));
console.log(add(1, 2, 3));

// typescript를 사용하고 싶을 때에는 다운로드 후 사용해야 한다.
// npm install typescript --save-dev
// npm install -g typescript
// npm install -g ts-node @types/node
// npx tsc
// Set-ExecutionPolicy Unrestricted (관리자 권한으로 실행)
// tsc --init

// 파일 확장자를 .ts로 변경

// ts 파일을 js로 변환한다.
// tsc 파일명.ts

// 변환된 js파일을 node로 실행한다.
// node 파일명.js



function intro(name: string, ...args: any[]){
    console.log("이름 : " + name);

    for(let i = 0; i < args.length; i++){
        console.log("기타정보" + (i + 1) + " : " + args[i]);
    }
}

intro("황지수", 20, "경기도");


// 문자열에 있는 includes() 메소드에 조회할 값을 전달하면,
// 포함되어 있을 때 true, 없을 때에는 false이다.

console.log("ABC".includes("A"));