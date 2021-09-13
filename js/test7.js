function func1() {
    console.log('func1');
    func2();
  }
  
  function func2() {
    setTimeout(function () {
      console.log('func2');
    }, 3000);
  
    func3();
  }
  
  function func3() {
    console.log('func3');
  }
  c
  func1();