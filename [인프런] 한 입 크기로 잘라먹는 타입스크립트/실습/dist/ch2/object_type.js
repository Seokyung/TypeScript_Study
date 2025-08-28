/*** 객체 타입 ***/
let user = {
    id: 1,
    name: '홍길동',
    age: 20,
};
user.id; // (property) id: number
user = {
    id: 2,
    name: '김철수',
};
let config = {
    apiKey: 'MY API KEY',
};
// [Error] 읽기 전용 속성이므로 'apiKey'에 할당할 수 없습니다.
// config.apiKey = 'hacked';
let pen = {
    brand: '모나미',
    color: 'black',
};
pen.color;
export {};
