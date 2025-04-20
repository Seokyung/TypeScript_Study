/*** Enum을 사용한 경우 (권장) ***/
// Enum을 사용한 경우 자바스크립트로 트랜스파일링 했을 때 별도의 자바스크립트 객체를 만들어서 사용함
// { Admin: "admin", User: "user", Guest: "guest" }
// 따라서 Enum의 목적에 맞는 경우 Enum 문법을 사용하는 것이 좋음
enum UserType1 {
	Admin = "admin",
	User = "user",
	Guest = "guest",
}

const role1 = UserType1.Admin;
// console.log(role1 === UserType1.Guest); // Error: '"admin"'이(가) '"guest"'과(와) 겹치지 않으므로 이 비교는 의도하지 않은 것 같습니다.

/*** 타입 별칭을 사용한 경우 ***/
// 타입 별칭은 타입스크립트에서만 의미 있는 코드이기 때문에 자바스크립트로 트랜스파일링 했을 때 추가로 객체를 만들지 않고
// 단순히 값만 사용하는 코드가 만들어짐
// const role2 = "admin";
type UserType2 = "admin" | "user" | "guest";

const role2: UserType2 = "admin";
// console.log(role2 === "guest"); // Error: '"admin"'이(가) '"guest"'과(와) 겹치지 않으므로 이 비교는 의도하지 않은 것 같습니다.

/*** Interface를 사용하는 경우 (권장) ***/
// Interface의 목적에 맞는 경우라면 Interface를 사용하는 것이 좋음
interface Entity1 {
	id: string;
}

interface TimestampEntity1 extends Entity1 {
	createdAt: Date;
	updatedAt: Date;
}

interface User1 extends TimestampEntity1 {
	username: string;
	email: string;
}

/*** 타입 별칭과 Intersection을 사용한 경우 ***/
type Id2 = {
	id: string;
};

type Entity2 = {
	createdAt: Date;
	updatedAt: Date;
};

type User2 = Id2 &
	Entity2 & {
		username: string;
		email: string;
	};

/*** 타입 별칭은 타입에 '이름'을 정하는 문법이기 때문에
 * 복잡한 타입을 만들고, 그 타입을 여러 곳에서 활용할 때 사용하는 것이 좋음 ***/
