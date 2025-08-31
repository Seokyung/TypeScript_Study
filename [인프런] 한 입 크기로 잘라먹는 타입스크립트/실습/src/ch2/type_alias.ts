/*** 타입 별칭 ***/

// 컴파일된 js 파일에는 타입 별칭 정의가 사라져 있음
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

function func() {
  // func 함수 블록 안의 User 타입과 블록 밖의 User 타입은 서로 다른 타입
  type User = {
    id: number;
    password: string;
  };

  let funcUser: User = {
    id: 9999,
    password: '9999qwer',
  }
}

let user1: User = {
  id: 123,
  name: '홍길동',
  nickname: 'gildong_2',
  birth: '2000-01-01',
  bio: '배고파요',
  location: '서울시 금천구',
};

let user2: User = {
  id: 456,
  name: '김철수',
  nickname: 'iron_kim',
  birth: '1999-12-31',
  bio: '집에 가고 싶다.',
  location: '경기도 화성시',
};