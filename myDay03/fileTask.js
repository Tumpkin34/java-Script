// 상품명, 가격, 재고를 JS 객체에 프로퍼티로 담는다.
// JSON 형식으로 변환한 뒤, product.json으로 출력한다.
// product.json에 있는 JSON 형식을 JS Object 타입으로 변환한다.
// 각 프로퍼티를 출력한다.

var file = require('fs');
var goods = {name:'콜라',price:'2500',ea:'10'};
console.log(goods.name);
var goodsJSON = JSON.stringify(goods);
file.writeFile('product.json',goodsJSON,'utf-8',function(e){
    if(e){
        console.log(e);
    }else{
        console.log("출력성공!");
    }
})

file.readFile('product.json',function(e,content){
    let product = JSON.parse(content);
    console.log(product.name);
    console.log(product.price);
    console.log(product.ea);
})