import Game from "./types/Game";
import Genre from "./types/Genre";

const game1: Game = {
	id: "g001",
	name: "김팥빵의 여행",
	price: 64900,
	rating: 3.28,
	genre: [Genre.adventure, Genre.puzzle, Genre.indie],
	isAdult: false,
};

const game2 = {
	id: "g002",
	name: "이 게임을 사면 6000원을 드립니다!!!",
	price: 5200,
	rating: 4.75,
	isAdult: true,
};

console.log(game1);
