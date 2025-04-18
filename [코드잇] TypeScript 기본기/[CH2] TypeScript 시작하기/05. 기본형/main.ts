let itemName: string = "ivory hoodie";
let itemPrice: number = 75000;
let membersOnly: boolean = true;
let owner: undefined = undefined;
let seller: null = null;

// seller = undefined; // null과 undefined는 서로 다른 타입이기 때문에 타입 오류 발생

// Infinity와 NaN 모두 Number 타입이기 때문에 타입 검사 시 Number.is 메서드로 검사해야 함
let num1 = 2 / 0; // Infinity
let num2 = 0 / 0; // NaN

console.log(typeof num1, typeof num2); // number number
console.log(Number.isFinite(num1), Number.isNaN(num2)); // false true
