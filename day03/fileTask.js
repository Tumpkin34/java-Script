// 상품명, 가격, 재고를 JS 객체에 프로퍼티로 담는다.
// JSON 형식으로 변환한 뒤, product.json으로 출력한다.
// product.json에 있는 JSON 형식을 JS Object 타입으로 변환한다.
// 각 프로퍼티를 출력한다.
let file = require('fs');
// JS Object 객체 만듬
let product = {name: '마우스', price: 4900, stock: 4};

// JSON형식으로 바꿈
let productJSON = JSON.stringify(product);

// product.json에 씀
file.writeFile('product.json', productJSON, 'utf-8', function(e){});

// product.json의 내용을 가져옴
file.readFile('product.json', 'utf-8', function(e, content){
    //다시 JS Object로 만듬
    let product = JSON.parse(content);
    // JS Object의 프로퍼티들을 출력
    console.log(product.name);
    console.log(product.price);
    console.log(product.stock);
});