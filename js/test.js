// object review

let ob = {
    name: "list",
    age: 30,
    gender : "male"
}

let test = (tested) => {
console.log(`#${tested} my name is ${ob.name}~! age ${ob.age}, ${ob.gender}`)
}

console.log(test(3))

function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
      console.log('Hi! My name is ' + this.name);
    };
  }
  
  var person1 = new Person('Lee', 'male');
  var person2 = new Person('Kim', 'female');
  
  console.log('person1: ', typeof person1);
  console.log('person2: ', typeof person2);
  console.log('person1: ', person1);
  console.log('person2: ', person2);
  
  person1.sayHello();
  person2.sayHello();