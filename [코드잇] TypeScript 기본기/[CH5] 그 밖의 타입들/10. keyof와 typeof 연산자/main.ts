interface Music {
	id: string;
	title: string;
	artist: string;
	releaseDate: Date;
	genre: string[];
	duration: number; // in seconds
	isFavorite?: boolean;
}

// keyof 연산자: 객체 타입에서 프로퍼티 이름들을 모아서 Union한 타입으로 만들고 싶을 때 사용
type MusicProperties = keyof Music; // "id" | "title" | "artist" | "releaseDate" | "genre" | "duration" | "isFavorite"

// const musicTableKeys: (keyof Music)[] = [];
const musicTableKeys: MusicProperties[] = [
	"title",
	"artist",
	"genre",
	"duration",
];

const music: Music = {
	id: "m001",
	title: "밤밤밤",
	artist: "Adios Audio",
	releaseDate: new Date("2016-09-21"),
	genre: ["Emo", "Rock", "Indie"],
	duration: 219,
	isFavorite: true,
};

// JS에서 typeof 연산자: 어떤 값의 타입을 문자열로 반환함
console.log(typeof music); // 문자열 'object'

// TS에서 typeof 연산자: 어떤 값의 typescript 타입을 보여줌
let music2: typeof music; // music2: Music (typescript의 Music 타입, 타입 추론)

for (let key of musicTableKeys) {
	console.log(`${key}(${typeof key}): ${music[key]}`); // 여기서 typeof는 해당 값의 타입을 문자열로 반환함
}
