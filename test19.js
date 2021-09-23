//심볼 생성

let symbolWithDesc = Symbol('ungmo2');

console.log(symbolWithDesc); // Symbol(ungmo2)
console.log(symbolWithDesc === Symbol('ungmo2')); // false
console.log(symbolWithDesc == Symbol('ungmo2')); // false
console.log(typeof symbolWithDesc); // symbol


