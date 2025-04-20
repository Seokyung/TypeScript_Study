"use strict";
/*** Enum을 사용한 경우 (권장) ***/
// Enum을 사용한 경우 자바스크립트로 트랜스파일링 했을 때 별도의 자바스크립트 객체를 만들어서 사용함
// { Admin: "admin", User: "user", Guest: "guest" }
// 따라서 Enum의 목적에 맞는 경우 Enum 문법을 사용하는 것이 좋음
var UserType1;
(function (UserType1) {
    UserType1["Admin"] = "admin";
    UserType1["User"] = "user";
    UserType1["Guest"] = "guest";
})(UserType1 || (UserType1 = {}));
const role1 = UserType1.Admin;
const role2 = "admin";
/*** 타입 별칭은 타입에 '이름'을 정하는 문법이기 때문에
 * 복잡한 타입을 만들고, 그 타입을 여러 곳에서 활용할 때 사용하는 것이 좋음 ***/
