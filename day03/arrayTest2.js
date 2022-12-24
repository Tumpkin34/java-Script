// 1~10까지 Array객체에 담은 후 짝수만 출력
// //fill()메소드를 통해서 10칸의 공간에 undefined를 넣어준다.
// var datas = new Array(10).fill();
// // datas.forEach(function(v, i, ar){
// //     ar[i] = i+1;
// // })
// // map을 통해 각 인덱스 번호에 undefined를 인덱스번호+1로 넣어주고 .filter를 통해서 2의 배수인 것을 걸러서 저장한다.
// datas = datas.map(function(v, i){return i+1}).filter(function(v){return v % 2 == 0;})
// console.log(datas);

// 한글을 숫자로
// var hangle = "공일이삼사오육칠팔구".split("");
// var input = "일공이사".split("");
// // input에 각 인덱스 번호에 있는 문자가(input.map(function(v)) hangle에 몇번째 문자에 해당하는지 인덱스 번호를 받고 (hangle.indexOf(v)) 각각의 숫자를 빈문자열로 연결하고(join("")) 저장
// var result = parseInt(input.map(function(v){return hangle.indexOf(v)}).join(""))
// console.log(result);

// 숫자를 한글로
var hangle = "공일이삼사오육칠팔구".split("");
var input = "1024".split("");
// input에 각 인덱스에 해당하는 숫자(input.map(function(v)) 번째 인덱스의 문자를 가져온다(hangle[v])
var result = input.map(function(v){return hangle[v]}).join("");
console.log(result);

// 1~100까지 합 출력
// 100칸의 배열에 1~100까지 집어넣는다
var datas = new Array(100).fill().map((v, i) => i + 1);
var result = 0;
// result에 1~100까지 더한다
datas.forEach(v => result += v);
console.log(result);