/** enum 타입 **/
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 숫자형 Enum
// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }
// 자동으로 숫자 할당이 됨
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 10] = "USER";
    Role[Role["GUEST"] = 11] = "GUEST";
})(Role || (Role = {}));
// 문자열 Enum
var Language;
(function (Language) {
    Language["KOREAN"] = "ko";
    Language["ENGLISH"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "홍길동",
    role: Role.ADMIN, // 0: 관리자
    language: Language.KOREAN,
};
const user2 = {
    name: "김첨지",
    role: Role.USER, // 1: 일반 유저
};
const user3 = {
    name: "점순이",
    role: Role.GUEST, // 2: 게스트
};
console.log(user1, user2, user3);
export {};
