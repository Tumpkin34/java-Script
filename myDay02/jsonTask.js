// 상품명과 가격을 JSON으로 만든다.
// 위 JSON을 JS Object 객체로 변환한다.
// 각각의 프로퍼티를 출력한다.
// JSON으로 변환한 뒤 출력한다.

var giftInfoJSON = `{"name" : "수박","price" : "10000"}`;
giftInfo = JSON.parse(giftInfoJSON);
console.log(giftInfoJSON);
console.log(giftInfo);
console.log(JSON.stringify(giftInfo));

