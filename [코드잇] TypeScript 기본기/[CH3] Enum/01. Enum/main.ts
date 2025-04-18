enum Size {
	S = "S", // 0 (기본값을 정해주지 않는 경우에는 0부터 시작, 0은 JS에서 false와 같은 의미로 사용되기 때문에 주의해야 함)
	M = "M", // 1
	L = "L", // 2
	XL = "XL", // 3
}

let shirt: {
	id: string;
	name: string;
	sizes: Size[]; // 타입으로 쓸 때는 enum 이름만 사용
	color: string;
} = {
	id: "a001",
	name: "옥스퍼드 셔츠",
	sizes: [Size.S, Size.M, Size.L], // 값으로 쓸 때는 객체처럼 점 표기법으로 사용
	color: "blue",
};

const findSize = (size?: Size) => {
	if (!size) {
		return "Find All Size";
	} else {
		return `Find ${size} Size`;
	}
};

console.log(findSize());
console.log(findSize(Size.S));
console.log(findSize(Size.M));
