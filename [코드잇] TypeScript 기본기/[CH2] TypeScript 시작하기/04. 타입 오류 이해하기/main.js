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
// product = newProduct; // 오류 발생
/*
[TIP] 단락별로 범위를 좁혀가며 읽으면 오류 내용을 정확히 알 수 있음 (단락이 좁아질수록 세부적인 내용이 나옴)
'{ id: string; name: string; price: number; sizes: number[]; }' 형식은 '{ id: string; name: string; price: number; sizes: string[]; }' 형식에 할당할 수 없습니다.
  'sizes' 속성의 형식이 호환되지 않습니다.
  'number[]' 형식은 'string[]' 형식에 할당할 수 없습니다.
    'number' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)
*/
