/** 인덱스 시그니처 **/
// type CountryCodes = {
//   Korea: string;
//   UnitedStates: string;
//   Japan: string;
// }
let countryCodes = {
    Korea: 'ko',
    UnitedStates: 'us',
    Japan: 'jp',
};
let countryNumberCodes = {
    Korea: 410,
    UnitedStates: 840,
    Japan: 392,
};
// 인덱스 시그니처는 규칙만 어기지 않으면 되기 때문에 프로퍼티가 없는 빈 객체여도 오류가 발생하지 않음
let countryNumberCodes2 = {};
let countryStringAndNumberCodes = {
    Korea: 410,
};
export {};
