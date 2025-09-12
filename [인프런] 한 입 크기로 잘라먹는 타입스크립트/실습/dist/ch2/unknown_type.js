/** unknown 타입 **/
// 특정 변수의 타입을 모를 때
let unknownVar;
unknownVar = "";
unknownVar = 10;
unknownVar = () => { };
// 어떤 타입의 변수에도 unknown 타입의 값을 집어넣을 수 없음
let num;
// num = unknownVar; // [Error] 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.
// 어떤 연산에도 참여할 수 없음
// unknownVar * 2; // [Error] 'unknownVar'은(는) 'unknown' 형식입니다.
// 타입의 메소드도 사용 불가함
// unknownVar.toUpperCase(); // [Error] 'unknownVar'은(는) 'unknown' 형식입니다.
// 타입 정제
// typeof 연산자로 정제해준 후에는 할당 가능
if (typeof unknownVar === "number") {
    num = unknownVar;
}
export {};
// 변수의 타입을 확실히 모를 때에는 any 보단 unknown 타입을 사용하는 것이 안전함
