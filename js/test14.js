var p2 = new Promise(function(resolve, reject) {
    resolve(1);
  });
  
  p2.then(function(value) {
    console.log(value + "what the..."); // 1
    return value + 1;
  }).then(function(value) {
    console.log(value + ' - A synchronous value works'); // 2 - A synchronous value works
  });
  
  p2.then(function(value) {
    console.log(`testman_12 ${value}`); // 1
  });