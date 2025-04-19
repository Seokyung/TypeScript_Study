// let 키워드는 변수에 저장된 값을 추론하여 타입을 지정함
let x = "hello"; // let x: string
let small = 90; // let small: number

// const 키워드는 상수로 사용되기 때문에 변수에 저장된 값 자체를 타입으로 지정함 (리터럴 타입)
// 리터럴 타입: 값을 곧 타입으로 하는 타입
const y = "world"; // const y: "world"
const large = 100; // const large: 100

function printSize1(size: number) {
	console.log(`Size: ${size}`);
}

function printSize2(size: 100) {
	console.log(`Size: ${size}`);
}

printSize1(small); // OK
printSize1(large); // OK
// printSize2(small); // Error: Argument of type 'number' is not assignable to parameter of type '100'.
printSize2(large); // OK
