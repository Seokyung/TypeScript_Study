let stock: {
	id: string;
	name: string;
	price: number;
	membersOnly?: boolean; // membersOnly는 선택적 속성
	sizes: string[];
} = {
	id: "1234",
	name: "apple",
	price: 1000,
	membersOnly: true, // membersOnly 속성은 선택적이므로 생략 가능
	sizes: ["S", "M", "L"],
};

if (stock.membersOnly) {
	console.log("회원 전용 상품입니다.");
} else {
	console.log("일반 상품입니다.");
}

// 객체 값 할당 시 프로퍼티 이름에 변수를 사용할 경우
// js
let field = "field name";
let obj = {
	[field]: "field value",
};

//ts
let stock2: {
	[productId: string]: number; // 프로퍼티 이름과 값에 각각 타입 지정
} = {
	c001: 1,
	// c002: "jeans", // Error: c002의 값은 number 타입이어야 함
};
console.log(stock2);
