var p1 = new Promise((resolve, reject) => {
    resolve('Success!');
    console.log("Promise")
    // or
    // reject(new Error("Error!"));
  });
  
  p1.then(value => {
    console.log(value+"then~"); // Success!
  }, reason => {
    console.error(reason); // Error!
  });