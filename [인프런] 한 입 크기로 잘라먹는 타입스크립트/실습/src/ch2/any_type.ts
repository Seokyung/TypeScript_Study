/** any 타입 **/
// 특정 변수의 타입을 모를 때

let anyVar1 = 10;
// anyVar1 = "hello"; // [Error] 'string' 형식은 'number' 형식에 할당할 수 없습니다.
// 타입스크립트에서는 변수의 타입이 변수를 초기화할 때 초기화 하는 값을 기준으로 추론하기 때문에 오류 발생

// any 타입은 모든 타입의 값을 다 할당받을 수 있음
let anyVar2: any = 20;
anyVar2 = "hello2";

anyVar2 = true;
anyVar2 = {};
anyVar2 = () => {};

anyVar2.toUpperCase(); // [런타임 오류] anyVar2.toUpperCase is not a function (anyVar2의 타입은 함수인데 문자열 메소드를 사용함) -> any 타입은 최대한 피하는 것이 좋음
anyVar2.toFixed();

// 모든 타입의 변수에 any 타입의 값을 집어넣을 수 있음
let num: number = 100;
num = anyVar2;
