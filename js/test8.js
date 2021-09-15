// function getData() {
//     return new Promise(function(resolve, reject) {
//       var data = 100;
//       resolve(data);
//     });
//   }
  
//   // resolve()의 결과 값 data를 resolvedData로 받음
//   getData().then(function(resolvedData) {
//     console.log(resolvedData); // 100
//   });

// new Promise(function(resolve, reject){
//     setTimeout(function() {
//       resolve(1);
//     }, 2000);
//   })
//   .then(function(result) {
//     console.log(result); // 1
//     return result + 10;
//   })
//   .then(function(result) {
//     console.log(result); // 11
//     return result + 20;
//   })
//   .then(function(result) {
//     console.log(result); // 31
//   });
  
// #1
console.log('Hello');
// #2
setTimeout(function() {
	console.log('Bye');
}, 3000);
// #3
console.log('Hello Again');
