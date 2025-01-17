/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

function* generateNumbers() {
  yield 1;
  console.log("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(typeof generator);
console.log(generator);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (let value of generateNumbers()) {
  console.log(value);
}

for (let value of generator) {
  console.log(value);
}




















/*
  Generators
  - Delegate Generator
*/

function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  yield* generateNums();
  yield* generateLetters();
  yield* [4, 5, 6];
}

let Generator = generateAll();

console.log(Generator.next());
console.log(Generator.next());
console.log(Generator.next());
console.log(Generator.next());
console.log(Generator.next());
console.log(Generator.next());
console.log(Generator.return("Z"));
console.log(Generator.next());
console.log(Generator.next());
console.log(Generator.next());


































/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/

function* generateNumbers() {
    // yield 1;
    // yield 2;
    // return "A";
    // yield 3;
    // yield 4;
    let index = 0;
  
    while (true) {
      yield index++;
    }
  }
  
  let generator2 = generateNumbers();
  
  console.log(generator2.next());
  console.log(generator2.next());
  console.log(generator2.next());
  console.log(generator2.next());