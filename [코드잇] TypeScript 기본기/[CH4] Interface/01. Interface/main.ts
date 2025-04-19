enum Hobby {
	exercise = "운동",
	read = "독서",
	movie = "영화 감상",
	game = "게임",
	music = "음악 감상",
}

// Person 인터페이스 정의
interface Person {
	name: string;
	age: number;
	tel: string;
	likes?: string[];
	dislikes?: string[];
}

// Person 인터페이스를 상속받는 PersonWithHobby 인터페이스 정의
interface PersonWithHobby extends Person {
	hobby: Hobby[];
}

// 인터페이스를 이용해 함수의 타입 정의
interface PrintPersonFunction {
	(person: PersonWithHobby): void;
}

const printPerson: PrintPersonFunction = (person) => {
	console.log(`${person.name}의 취미는 ${person.hobby.join(", ")}입니다.`);
	if (person.likes) {
		console.log(
			`${person.name}이(가) 좋아하는 것에는 ${person.likes.join(
				", "
			)} 이(가) 있습니다.`
		);
	}
	if (person.dislikes) {
		console.log(
			`${person.name}이(가) 싫어하는 것에는 ${person.dislikes.join(
				", "
			)}이(가) 있습니다.`
		);
	}
};

const person1: PersonWithHobby = {
	name: "홍길동",
	age: 30,
	tel: "010-1234-5678",
	hobby: [Hobby.exercise, Hobby.game, Hobby.music],
	likes: ["김치찌개", "햄버거"],
	dislikes: ["미역", "비 오는 날"],
};

const person2: PersonWithHobby = {
	name: "박과장",
	age: 21,
	tel: "010-4321-9876",
	hobby: [Hobby.read, Hobby.music],
};

printPerson(person1);
printPerson(person2);
