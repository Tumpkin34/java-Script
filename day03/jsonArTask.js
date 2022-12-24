// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.
// shop.json으로 출력한다.
// readFile을 사용해서 shop.json을 읽어 온다.
// 기존의 JSON 내용을 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.
// 파일 입출력 준비물(fs 모듈 불러오기)
let file = require("fs");

// 프로토타입
function Product(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.json = JSON.stringify(this);
}

// products에 마우스,키보드,야구공의 정보를 담는데 .json을 통해 JSON형식으로 들어간다.
let products = new Array();
products.push(new Product('마우스', 15000, 3).json);
products.push(new Product('키보드', 60000, 8).json);
products.push(new Product('야구공', 3000, 50).json);

// toString() : {"name":"마우스","price":15000,"stock":3},{"name":"키보드","price":60000,"stock":8},{"name":"야구공","price":3000,"stock":50}
// 위와 같은 형식으로 리턴한다
// JSON.parse()가 배열임을 알 수 있게 "[,]"를 붙여준다.
file.writeFile('shop.json', "[" + products.toString() + "]", 'utf-8', function(e){});

// shop.json에서 JSON형식에 문자열을 가져옴
file.readFile('shop.json', 'utf-8', function(e, content){
    let sumObject = new Object();
    let totalPrice = 0;
    let totalStock = 0;
    // 가져온 문자열을 JS Object객체로 바꿔 저장
    products = JSON.parse(content);

    // 각 객체의 가격과 개수를 곱해 totalPrice에 더하여 저장
    products.map(v => v.price * v.stock).forEach(v => totalPrice += v);
    // 각 객체의 갯수만 totalStock에 더하여 저장
    products.map(v => v.stock).forEach(v => totalStock += v);

    // sumObject객체에 프로퍼티를 만들고 totalPrice,totalStock들로 초기화
    sumObject.totalPrice = totalPrice;
    sumObject.totalStock = totalStock;
    // 위에 객체 JSON으로 바꿈
    sumObject = JSON.stringify(sumObject);

    // sum.json에 JSON으로 바꾼 문자열 저장
    file.writeFile('sum.json', sumObject, 'utf-8', function(e){});
});