// 이터레이션 프로토콜을 구현하여 무한 이터러블을 생성하는 함수
const createInfinityByIteration = function () {
    let i = 0; // 자유 변수
    return {
      [Symbol.iterator]() { return this; },
      next() {
        return { value: ++i };
      }
    };
  };
  
  for (const n of createInfinityByIteration()) {
    if (n > 5) break;
    console.log(n); // 1 2 3 4 5
  }
  
  // 무한 이터러블을 생성하는 제너레이터 함수
  function* createInfinityByGenerator() {
    let i = 0;
    while (true) { yield ++i; }
  }
  
  for (const n of createInfinityByGenerator()) {
    if (n > 5) break;
    console.log(n); // 1 2 3 4 5
  }