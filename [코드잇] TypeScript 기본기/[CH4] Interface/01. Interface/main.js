"use strict";
var Hobby;
(function (Hobby) {
    Hobby["exercise"] = "\uC6B4\uB3D9";
    Hobby["read"] = "\uB3C5\uC11C";
    Hobby["movie"] = "\uC601\uD654 \uAC10\uC0C1";
    Hobby["game"] = "\uAC8C\uC784";
    Hobby["music"] = "\uC74C\uC545 \uAC10\uC0C1";
})(Hobby || (Hobby = {}));
const printPerson = (person) => {
    console.log(`${person.name}의 취미는 ${person.hobby.join(", ")}입니다.`);
    if (person.likes) {
        console.log(`${person.name}이(가) 좋아하는 것에는 ${person.likes.join(", ")} 이(가) 있습니다.`);
    }
    if (person.dislikes) {
        console.log(`${person.name}이(가) 싫어하는 것에는 ${person.dislikes.join(", ")}이(가) 있습니다.`);
    }
};
const person1 = {
    name: "홍길동",
    age: 30,
    tel: "010-1234-5678",
    hobby: [Hobby.exercise, Hobby.game, Hobby.music],
    likes: ["김치찌개", "햄버거"],
    dislikes: ["미역", "비 오는 날"],
};
const person2 = {
    name: "박과장",
    age: 21,
    tel: "010-4321-9876",
    hobby: [Hobby.read, Hobby.music],
};
printPerson(person1);
printPerson(person2);
