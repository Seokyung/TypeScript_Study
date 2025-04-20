"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Genre_1 = __importDefault(require("./types/Genre"));
const game1 = {
    id: "g001",
    name: "김팥빵의 여행",
    price: 64900,
    rating: 3.28,
    genre: [Genre_1.default.adventure, Genre_1.default.puzzle, Genre_1.default.indie],
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
