// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.
// shop.json으로 출력한다.
// readFile을 사용해서 shop.json을 읽어 온다.
// 기존의 JSON 내용을 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.

// ---------------------------------------------------------------------------
// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
function Goods(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}

// 3개의 Object를 1개의 Array 객체에 모두 담는다.
let beverage = new Array();
beverage.push(new Goods('팹시', 1500, 5));
beverage.push(new Goods('스프라이트', 1300, 3));
beverage.push(new Goods('물', 5000, 2));
// console.log(beverage[0].name);

// JSON으로 변경시킨다.
let beverageJSON = JSON.stringify(beverage);
// shop.json으로 출력한다.
let file = require('fs');

file.writeFile('shop.json', beverageJSON, 'utf-8', function (e) {
    if (e) {
        console.log(e);
    } else {
        console.log("출력 성공!")
    }
})

// // readFile을 사용해서 shop.json을 읽어 온다.
// // 기존의 JSON 내용을 Array 객체로 변환한다.
file.readFile('shop.json', 'utf-8', function (e, content) {
    console.log(content);
    beverageJSON = JSON.parse(content);
})
beverage = JSON.parse(beverageJSON);

// // 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.
totalPrice = 0;
totalStock = 0;
beverage.map(v => v.price * v.stock).forEach(v => totalPrice += v);
beverage.map(v => v.stock).forEach(v => totalStock += v);

console.log(totalPrice);
console.log(totalStock);

let sumObject = new Array();
let sumObjectJSON;
sumObject.totalPrice = totalPrice;
sumObject.totalStock = totalStock;
sumObjectJSON = JSON.stringify(sumObject);
console.log(sumObjectJSON);
console.log(sumObject);


file.writeFile('sum.json',sumObject,'utf-8',function(e){});

// ---------------------------------------------------------------------------------
// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.
// shop.json으로 출력한다.
// readFile을 사용해서 shop.json을 읽어 온다.
// 기존의 JSON 내용을 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.
// let file = require("fs");

// function Product(name, price, stock){
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
//     this.json = JSON.stringify(this);
// }

// let products = new Array();
// products.push(new Product('마우스', 15000, 3).json);
// products.push(new Product('키보드', 60000, 8).json);
// products.push(new Product('야구공', 3000, 50).json);

// // console.log(products.toString());
// // file.writeFile('shop.json', "[" + products.toString() + "]", 'utf-8', function(e){});

// file.readFile('shop.json', 'utf-8', function(e, content){
//     let sumObject = new Object();
//     let totalPrice = 0;
//     let totalStock = 0;
//     products = JSON.parse(content);

//     products.map(v => v.price * v.stock).forEach(v => totalPrice += v);
//     products.map(v => v.stock).forEach(v => totalStock += v);

//     sumObject.totalPrice = totalPrice;
//     sumObject.totalStock = totalStock;
//     sumObject = JSON.stringify(sumObject);

//     file.writeFile('sum.json', sumObject, 'utf-8', function(e){});
// });