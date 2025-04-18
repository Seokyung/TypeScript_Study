"use strict";
let product = {
    id: "c001",
    name: "navy t-shirt",
    price: 25000,
    sizes: ["S", "M", "L"],
};
const newProduct = {
    id: "c002",
    name: "grey baggy pants",
    price: 59000,
    sizes: [26, 27, 28, 29, 30, 31, 32],
};
product = newProduct;
/*
[Error]
'{ id: string; name: string; price: number; sizes: number[]; }' 형식은 '{ id: string; name: string; price: number; sizes: string[]; }' 형식에 할당할 수 없습니다.
  'sizes' 속성의 형식이 호환되지 않습니다.
  'number[]' 형식은 'string[]' 형식에 할당할 수 없습니다.
    'number' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)
*/
