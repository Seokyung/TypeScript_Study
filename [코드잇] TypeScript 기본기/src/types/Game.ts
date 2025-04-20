import Genre from "./Genre";

export default interface Game {
	id: string;
	name: string;
	price: number;
	rating: number;
	genre?: Genre[];
	isAdult?: boolean;
}
