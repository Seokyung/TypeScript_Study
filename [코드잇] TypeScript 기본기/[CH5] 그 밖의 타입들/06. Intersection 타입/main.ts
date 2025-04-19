interface Id {
	id: string;
}

interface Timestamp {
	createdAt: Date;
	updatedAt: Date;
}

// Intersection 타입(&): 여러 객체 타입을 합칠 때 사용
type Diary = Id & {
	name: string;
	color: string[];
	price: number;
	isSoldOut?: boolean;
};

type User = Id &
	Timestamp & {
		username: string;
		email: string;
	};

type Review = Id &
	Timestamp & {
		productId: string;
		userId: string;
		content: string;
		rating: number;
	};
