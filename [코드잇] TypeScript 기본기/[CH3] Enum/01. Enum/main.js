"use strict";
var Size;
(function (Size) {
    Size["S"] = "S";
    Size["M"] = "M";
    Size["L"] = "L";
    Size["XL"] = "XL";
})(Size || (Size = {}));
let shirt = {
    id: "a001",
    name: "옥스퍼드 셔츠",
    sizes: [Size.S, Size.M, Size.L], // 값으로 쓸 때는 객체처럼 점 표기법으로 사용
    color: "blue",
};
const findSize = (size) => {
    if (!size) {
        return "Find All Size";
    }
    else {
        return `Find ${size} Size`;
    }
};
console.log(findSize());
console.log(findSize(Size.S));
console.log(findSize(Size.M));
