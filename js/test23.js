// 제너레이터 함수 정의
function* counter() {
    console.log('Point 1');
    yield 1;                // 첫번째 next 메소드 호출 시 여기까지 실행된다.
    console.log('Point 2');
    yield 2;                // 두번째 next 메소드 호출 시 여기까지 실행된다.
    console.log('Point 3');
    yield 3;                // 세번째 next 메소드 호출 시 여기까지 실행된다.
    console.log('Point 4'); // 네번째 next 메소드 호출 시 여기까지 실행된다.
  }
  
  // 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
  // 제너레이터 객체는 이터러블이며 동시에 이터레이터이다.
  // 따라서 Symbol.iterator 메소드로 이터레이터를 별도 생성할 필요가 없다
  const generatorObj = counter();
  
  // 첫번째 next 메소드 호출: 첫번째 yield 문까지 실행되고 일시 중단된다.
  console.log(generatorObj.next());
  // Point 1
  // {value: 1, done: false}
  
  // 두번째 next 메소드 호출: 두번째 yield 문까지 실행되고 일시 중단된다.
  console.log(generatorObj.next());
  // Point 2
  // {value: 2, done: false}
  
  // 세번째 next 메소드 호출: 세번째 yield 문까지 실행되고 일시 중단된다.
  console.log(generatorObj.next());
  // Point 3
  // {value: 3, done: false}
  
  // 네번째 next 메소드 호출: 제너레이터 함수 내의 모든 yield 문이 실행되면 done 프로퍼티 값은 true가 된다.
  console.log(generatorObj.next());
  // Point 4
  // {value: undefined, done: true}