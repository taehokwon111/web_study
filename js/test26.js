// 배열
for (const item of ['a', 'b', 'c']) {
    console.log(item);
  }
  
  // 문자열
  for (const letter of 'abc') {
    console.log(letter);
  }
  
  // Map
  for (const [key, value] of new Map([['a', '1'], ['b', '2'], ['c', '3']])) {
    console.log(`key : ${key} value : ${value}`); // key : a value : 1 ...
  }
  
  // Set
  for (const val of new Set([1, 2, 3])) {
    console.log(val);
  }