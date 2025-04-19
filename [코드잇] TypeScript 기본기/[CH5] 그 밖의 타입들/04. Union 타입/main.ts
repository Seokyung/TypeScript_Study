enum ClothingSize {
	S = "S",
	M = "M",
	L = "L",
	XL = "XL",
}

// type ClothingSize = "S" | "M" | "L" | "XL";

// Union은 리터럴 타입과 함께 사용하면 유용함
type ShoeSize = 220 | 230 | 240 | 250 | 260 | 270;

interface Product {
	id: string;
	name: string;
	price: number;
}

interface ClothingProduct extends Product {
	sizes: ClothingSize[];
	color: string;
}

interface ShoeProduct extends Product {
	sizes: ShoeSize[];
	isHandmade: boolean;
}

// Union 타입(|): A타입 | B타입 (두 타입 다 파라미터로 쓸 수 있음)
const printSizes = (product: ClothingProduct | ShoeProduct) => {
	const availableSizes = product.sizes.join(", ");
	console.log(`${product.name}의 사이즈: ${availableSizes}`);

	// if (... in ...) {} : 특정한 타입에 대한 처리가 필요한 경우 사용
	if ("color" in product) {
		console.log(`색상: ${product.color}`);
	} else if ("isHandmade" in product) {
		console.log(`수제화 여부: ${product.isHandmade ? "[Y]" : "[N]"}`);
	}
};

const cloth: ClothingProduct = {
	id: "c008",
	name: "티셔츠",
	price: 25000,
	sizes: [ClothingSize.S, ClothingSize.M, ClothingSize.L],
	color: "white",
};

const shoe: ShoeProduct = {
	id: "s001",
	name: "운동화",
	price: 50000,
	sizes: [220, 230, 240, 250],
	isHandmade: true,
};

printSizes(cloth);
printSizes(shoe);
