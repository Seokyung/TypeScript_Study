"use strict";
const shoeSizes = [220, 230, 240, 250, 260, 270];
// Array<number>.map<void>
// (parameter) size: number
shoeSizes.map((size) => {
    //
});
const clothingSizes = ["S", "M", "L", "XL"];
// Array<string>.map<void>
// (parameter) size: string
clothingSizes.map((size) => {
    //
});
// Generics 문법: 타입을 직접적으로 고정된 값으로 명시하지 않고 변수를 통해 언제든지 변할 수 있는 타입
// 제네릭을 이용해 코드에 선언한 타입을 변수화하고, 나중에 타입을 정하는 식으로 유연하게 사용 가능
// 꺾쇠 괄호와 대문자 T 변수로 지정
// <T> : 타입 파라미터 (T는 타입을 뜻함)
// 함수 제네릭
function printArray(items) {
    for (const item of items) {
        console.log(item);
    }
}
printArray(shoeSizes); // 타입 추론: function printArray<number>(items: number[]): void
printArray(clothingSizes); // 타입 추론: function printArray<string>(items: string[]): void
printArray([true, false]);
const point = [1, 2];
const fullName = ["Kim", "Gildong"];
const triangle = [90, "45", 45];
// Map 객체 제네릭
// Map<key, value>
const map = new Map();
