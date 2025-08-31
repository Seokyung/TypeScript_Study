/** 인덱스 시그니처 **/

// 인덱스 시그니처 - key와 value의 규칙을 기준으로 객체의 타입을 정의할 수 있는 문법
type CountryCodes = {
  [key: string]: string;
}
// type CountryCodes = {
//   Korea: string;
//   UnitedStates: string;
//   Japan: string;
// }

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedStates: 'us',
  Japan: 'jp',
};

type CountryNumberCodes = {
  [key: string]: number;
}

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedStates: 840,
  Japan: 392,
}

// 인덱스 시그니처는 규칙만 어기지 않으면 되기 때문에 프로퍼티가 없는 빈 객체여도 오류가 발생하지 않음
let countryNumberCodes2: CountryNumberCodes = {};

type CountryStringAndNumberCodes = {
  [key: string]: number;
  Korea: number; // 반드시 가져야 하는 프로퍼티가 있는 경우 따로 정의해주어야 함

  // [Error] 'Japan' 형식의 'string' 속성을 'string' 인덱스 유형 'number'에 할당할 수 없습니다.
  // Japan: string; // 인덱스 시그니쳐를 사용하면서 동시에 추가적인 프로퍼티를 또 정의할 때에는 인덱스 시그니쳐의 value 타입과 직접 추가한 프로퍼티의 value 타입이 호환되거나 일치해야 함 
}

let countryStringAndNumberCodes: CountryStringAndNumberCodes = {
  Korea: 410,
};