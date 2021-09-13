function Person(name){
    this.name = name
}

Person.prototype.gender = "male";

let foo = new Person('Lee');
let bar = new Person('kim');

console.log(foo.gender);
console.log(bar.gender);

foo.gender = 'female';

console.log(foo.gender);
console.log(bar.gender);
