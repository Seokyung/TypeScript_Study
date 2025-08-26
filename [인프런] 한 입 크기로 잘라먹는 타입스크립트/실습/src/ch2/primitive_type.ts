/*** 원시 타입 ***/

/* number 타입 */
let num1: number = 123; // :타입 -> type annotation
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// [Error] 'string' 형식은 'number' 형식에 할당할 수 없습니다.
// num1 = 'hello';

// [Error] 'number' 형식에 'toUpperCase' 속성이 없습니다.
// num1.toUpperCase();

num1.toFixed();

/* string 타입 */
let str1: string = 'hello';
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// [Error] 'number' 형식은 'string' 형식에 할당할 수 없습니다.
// str1 = 123;

// [Error] 'toFixed' 속성이 'string' 형식에 없습니다.
// str1.toFixed();

str1.toUpperCase();

/* boolean 타입 */
let bool1: boolean = true;
let bool2: boolean = false;

/* null 타입 */
let null1: null = null;

/* undefined 타입 */
let unde1: undefined = undefined;

// {
//   "compilerOptions": {
//     "strictNullChecks": false
//   },
// }
// strictNullChecks 옵션이 true인 경우 엄격하게 null 값을 검사해 null 타입이 아닌 변수에는 null 값을 할당할 수 없도록 제한함
// let numA: number = null;