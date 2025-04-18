/*** 배열 ***/
const cart: string[] = [];
cart.push("apple");
cart.push("banana");
// cart.push(123); // Error: string 배열에 number 타입 원소 추가 시 오류 발생

const carts: string[][] = [
	["apple", "banana"],
	["orange", "grape"],
];

/*** 튜플: 배열이지만 원소의 개수를 명확하게 정하고 싶을 때 사용 ***/
// 튜플은 배열의 원소 개수와 타입을 정할 수 있다.
let mySize: [number, number, string] = [180, 45, "S"];
// mySize = [170, 50]; // Error: mySize의 타입은 [number, number]이므로 원소 개수가 다르면 오류 발생
// mySize = [170, "50", "M"]; // Error: 원소 개수는 맞지만 타입이 다르게 때문에 오류 발생
