// any 타입: 모든 타입을 허용하는 타입
// (타입 오류가 발생하지 않으나 타입 추론이 어렵기 때문에 사용하지 않는게 좋음)
let student: any = {
	id: "20250101",
	name: "김테스트",
	age: 20,
	subjects: ["국어", "영어", "수학"],
};

// any
const parsedStudent1 = JSON.parse('{ "name": "박코드", "age": 30}'); // parsedStudent1는 any 타입으로 추론됨
// 타입 지정
const parsedStudent2: { name: string; age: number } = JSON.parse(
	'{ "name": "송타스", "age": 17}'
); // parsedStudent2는 { name: string; age: number } 타입으로 추론됨
const parsedStudent3 = JSON.parse('{ "name": "최개발", "age": 51}') as {
	name: string;
	age: number;
}; // parsedStudent3는 { name: string; age: number } 타입으로 추론됨

console.log(parsedStudent1);
console.log(parsedStudent2);
console.log(parsedStudent3);
