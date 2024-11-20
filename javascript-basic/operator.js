'use strict';
// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
// 값이 바로 업데이트 되어서 할당

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);
// 할당을 해놓고 업데이트는 그 뒤에 일어남

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 5. Logical operators: \\(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or) - 처음으로 true가 나오면 멈춘다, 함수 연산자가 가장 큰 것을 제일 뒤에 배치하는 것이 바람직함
console.log(`or: ${value1 || value2 || check()}`);

// &&(and)
console.log(`and: ${value1 || value2 || check()}`);
// often used to compress long if-statement
// nullableObject && nullableObject.someting
if (nullableObject != null) {
  nullableObject.someting;
}

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("blahhh");
  }
  return true;
}

// !(not)
console.log(!value1);

// 7. Equality operators
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// == strcit equality, no type conversion
// 웬만해선 strict equality를 사용하는 것이 좋다
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// 8. Conditional operators: if
// if, else if, else
const Name = "jigooo";
if (Name === "jigooo") {
  console.log("Welcome, jigooo");
} else if (Name === "coder") {
  console.log("you are amazing coder");
} else {
  console.log("goodbye");
}

// 9. Ternary operators: ?
// condition ? value1 : value2;
console.log(Name === "jigooo" ? "yes" : "no");

// 10. Switch staement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("love you!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("go away!");
    break;
    defalut: 
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
// begin은 처음에 딱 한번만 실행되고
// condition과  step은 값이 안 맞을 때까지 무한실행
for (i =3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i =3; i > 0; i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}


// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i <11; i++) {
    if (i % 2 !== 0) {
        continue;
    } 
    console.log(`q1. ${i}`);
}

for (let i = 0; i <11; i++) {
    // %는 나눗셈 연산의 나머지를 나타내는구나.... 그러면 (i % 2 === 0)는 짝수를 뜻함
    if (i % 2 === 0) {
        console.log(`q1. ${i}`);
    } 
}


// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}