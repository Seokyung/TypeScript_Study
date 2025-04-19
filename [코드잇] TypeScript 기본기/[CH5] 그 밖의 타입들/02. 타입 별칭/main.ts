// cart의 타입 별칭 지정 (string[])
// 타입에 별칭을 지정해두면 언제든지 쉽게 타입을 바꿀 수 있음
type TypeCart = string[];

// 함수의 타입에 별칭 지정
type TypeCartResCallback = (res: boolean) => void;

// 객체의 타입에 별칭 지정
// 객체는 타입 별칭 지정보단 interface로 정의하는 것이 좋음
// type TypeProduct = {
// 	id: string;
// 	name: string;
// 	price: number;
// };

interface TypeProduct {
	id: string;
	name: string;
	price: number;
}

const personCart: TypeCart = ["a001", "a002", "a003"];

interface MallPerson {
	id: string;
	name: string;
	age: number;
	cart: TypeCart;
}

const mallPerson1: MallPerson = {
	id: "mp001",
	name: "홍길동",
	age: 60,
	cart: ["비타민A", "루테인", "글루타치온"],
};

console.log(mallPerson1);
