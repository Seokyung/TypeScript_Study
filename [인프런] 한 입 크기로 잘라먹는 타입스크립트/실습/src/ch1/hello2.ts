// compilerOptions - moduleDetection
// 모든 타입스크립트 파일은 전역 모듈로 취급되기 때문에 중복된 변수 선언 시 오류 발생 (블록 범위 변수 'a'을(를) 다시 선언할 수 없습니다.)
// 이럴 때에는 각 파일에 모듈 시스템 키워드(export, import)를 최소 하나 이상 사용해 해당 파일을 전역 모듈이 아닌 로컬(독립) 모듈로 취급되도록 만들어야 하는데, 이를 자동화 하는 옵션이 바로 moduleDetection 옵션임 (force)
const a = 1;