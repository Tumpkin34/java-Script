// 1~10까지 Array객체에 담은 후 짝수만 출력
// 한글을 숫자로
// 숫자를 한글로
// 1~100까지 합 출력

// 1~10까지 Array객체에 담은 후 짝수만 출력
// var numbers = new Array(10).fill();
// numbers.map(function(v,i){return i+1}).filter(function(v){v%2==0? console.log(v):""})

// // 한글을 숫자로
// var hangle = "공일이삼사오육칠팔구";
// var check = "구사구팔".split("");
// var result = "";
// check.map(function(v){return hangle.indexOf(v)}).forEach(function(v){result += v});
// console.log(result);

// 숫자를 한글로
var hangle = "공일이삼사오육칠팔구";
var check = "9498".split("");
var result = "";
check.map(function(v){return hangle.charAt(v)}).forEach(function(v){result += v});
console.log(result);


// // 1~100까지 합 출력

