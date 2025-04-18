"use strict";
let stock = {
    id: "1234",
    name: "apple",
    price: 1000,
    membersOnly: true, // membersOnly 속성은 선택적이므로 생략 가능
    sizes: ["S", "M", "L"],
};
if (stock.membersOnly) {
    console.log("회원 전용 상품입니다.");
}
else {
    console.log("일반 상품입니다.");
}
// 객체 값 할당 시 프로퍼티 이름에 변수를 사용할 경우
// js
let field = "field name";
let obj = {
    [field]: "field value",
};
//ts
let stock2 = {
    c001: 1,
};
console.log(stock2);
