// 1~10까지 Array객체에 담은 후 짝수만 출력
// 한글을 숫자로
// 숫자를 한글로
// 1~100까지 합 출력

// 1~10까지 Array객체에 담은 후 짝수만 출력
// fill(); : 없는 값으로 채워줌
// "1,2,3,4,5,6,7,8,9,10".split(",").forEach(function (v) {
//     if (v % 2 == 0) {
//         console.log(v);
//     }
// })

// // 한글을 숫자로
// // var hangle = "공일이삼사오육칠팔구";
// // var checkNum = "사사오일".split("");
// // checkNum.forEach(function(v){
// //     for(let i = 0; i<hangle.length; i++){
// //         if(v == hangle.charAt(i)){
// //             console.log(i);
// //         }
// //     }
// // })

// // 숫자를 한글로
// var hangle = "공일이삼사오육칠팔구";
// var checkNum = "9498".split("");
// checkNum.forEach(function (v) {
//     console.log(hangle.charAt(v));
// })

// // 1~100까지 합 출력

// var numbers = [];
// total = 0;

// for(let i = 1; i < 100; i++){
//     numbers.push(i);
// }
// numbers.forEach(function(v){
//     total += v;
// })
// console.log(total);


// -------------------------------------------
// 한글을 숫자로
// let hangle = "영일이삼사오육칠팔구";
// let num = "0123456789";

// var input = "영일이삼"
// var output = "";

// for (let i = 0; i < input.length; i++) {
//     console.log("----------");
//     console.log(input.charAt[i]);
//     console.log(hangle.indexOf(input.charAt[i]));
//     console.log(num.charAt[hangle.indexOf(input.charAt[i])]);
//     output += num.charAt[hangle.indexOf(input.charAt[i])]
//     console.log(output);
// }

// console.log(output);

var data = new Array(7);
data.push("월");
console.log(data);