// 상품명과 가격을 JSON으로 만든다.
// 위 JSON을 JS Object 객체로 변환한다.
// 각각의 프로퍼티를 출력한다.
// JSON으로 변환한 뒤 출력한다.

// 상품명과 가격을 JSON으로 만든다.
let productJSON = `{"name": "마우스", "price": 25000}`;
// 위 JSON을 JS Object 객체로 변환한다.
let product = JSON.parse(productJSON);

// 각각의 프로퍼티를 출력한다.
console.log(productJSON);
console.log(product);

console.log(product.name);
console.log(product.price + "원");

// JSON으로 변환한 뒤 출력한다.
productJSON = JSON.stringify(product);
console.log(productJSON);