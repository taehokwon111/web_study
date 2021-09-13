console.log(Number.isInteger(123))//true
console.log(Number.isInteger(-123))//true
console.log(Number.isInteger(5 - 2))//true
console.log(Number.isInteger(0))//true
console.log(Number.isInteger(0.5))//false
console.log(Number.isInteger('123'))//false
console.log(Number.isInteger(false))//false
console.log(Number.isInteger(Infinity)) //false
console.log(Number.isInteger(-Infinity)) //false
console.log(Number.isInteger(0 / 0)) //false

var numObj = 12345.6789;

// 소숫점 이하 반올림
console.log(numObj.toFixed());   // '12346'
// 소숫점 이하 1자리수 유효, 나머지 반올림
console.log(numObj.toFixed(1));  // '12345.7'
// 소숫점 이하 2자리수 유효, 나머지 반올림
console.log(numObj.toFixed(2));  // '12345.68'
// 소숫점 이하 3자리수 유효, 나머지 반올림
console.log(numObj.toFixed(3));  // '12345.679'
// 소숫점 이하 6자리수 유효, 나머지 반올림
console.log(numObj.toFixed(6));  // '12345.678900'