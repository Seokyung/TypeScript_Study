/*** 객체 타입 ***/

let user: { // 객체 리터럴 타입
  id: number;
  name: string;
  age?: number; // 선택적 프로퍼티 (optional property)
} = {
  id: 1,
  name: '홍길동',
  age: 20,
}

user.id; // (property) id: number

user = {
  id: 2,
  name: '김철수',
}

let config: {
  readonly apiKey: string; // 읽기 전용 프로퍼티 (readonly property)
} = {
  apiKey: 'MY API KEY',
}

// [Error] 읽기 전용 속성이므로 'apiKey'에 할당할 수 없습니다.
// config.apiKey = 'hacked';


let pen: {
  brand: string;
  color: string;
} = {
  brand: '모나미',
  color: 'black',
}

pen.color;