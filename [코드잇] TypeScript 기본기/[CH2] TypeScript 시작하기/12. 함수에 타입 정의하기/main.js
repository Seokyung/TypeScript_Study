"use strict";
const mallStock = {
    a001: 10,
    a002: 3,
    a003: 5,
};
const codeItMall = {
    stock: {
        a001: 1,
        a002: 2,
        a003: 3,
    },
    cart: [],
    addToCart,
    addManyToCart,
};
const mallCart = [];
// 함수에 타입 지정
// const 함수명 = (파라미터: 타입): 리턴 타입 => {};
// function 함수명(파라미터: 타입): 리턴 타입 {}
function addToCart(id, quantity = 1) {
    // 파라미터에 기본값 지정해서 대체할 수 있는 코드
    // if (typeof quantity === "undefined") {
    // 	quantity = 1;
    // }
    if (mallStock[id] < quantity) {
        return false;
    }
    mallStock[id] -= quantity;
    for (let i = 0; i < quantity; i++) {
        mallCart.push(id);
    }
    return true;
}
function addManyToCart(...ids) {
    for (const id of ids) {
        addToCart(id);
    }
}
console.log(codeItMall.addManyToCart(...Object.keys(codeItMall.stock)));
console.log(mallStock, mallCart);
// console.log(mallStock, mallCart);
// const result1 = addToCart("c001", 3);
// console.log(`result 1: ${result1}`);
// console.log(mallStock, mallCart);
// const result2 = addToCart("c002", 100);
// console.log(`result 2: ${result2}`);
// console.log(mallStock, mallCart);
// const result3 = addToCart("c003", 2);
// console.log(`result 2: ${result3}`);
// console.log(mallStock, mallCart);
