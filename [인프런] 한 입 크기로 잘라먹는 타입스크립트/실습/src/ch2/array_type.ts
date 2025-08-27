/*** Array 타입 ***/

// 기본 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['hello', 'I\'m', 'Seokyung'];
let boolArr: Array<boolean> = [true, false, true]; // 제네릭 문법

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, 'hi']; // 유니언 타입

// 다차원 배열의 타입 정의
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

/*** Tuple 타입 ***/
// 튜플 - 길이와 타입이 고정된 배열

let tup1: [number, number] = [1, 2];

// [Error] '[number, number, number]' 형식은 '[number, number]' 형식에 할당할 수 없습니다. 소스에 3개 요소가 있지만, 대상에서 2개만 허용합니다.
// tup1 = [1, 2, 3];

// [Error] 'string' 형식은 'number' 형식에 할당할 수 없습니다.
// tup1 = [1, 'hi'];

let tup2: [number, string, boolean, number[]] = [1, 'hello', false, [5, 6]];

// 순서 달라도 오류 발생
// tup2 = ['hello', false, [5, 6], 0];

// *주의 - 배열 메서드를 사용할 경우 튜플의 길이 제한이 발동하지 않음
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();

// 배열의 순서, 인덱스가 중요할 때 튜플 타입을 이용해 값을 잘못 넣지 않도록 방지할 수 있음
const users: [string, number][] = [
  ['홍길동', 1],
  ['김민수', 2],
  ['황익명', 3],
  // [4, '박카피바라'], // error
];