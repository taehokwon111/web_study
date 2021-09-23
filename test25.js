function* call() {
    console.log('first call');
    yield 10;
    console.log('second call');
    yield 20;
    console.log('third call');
    yield 30;
}

let gen = call();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

for(let atom of call()){
    console.log(atom);
}