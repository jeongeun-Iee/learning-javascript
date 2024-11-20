// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globaName = 'global name';
{
    let name = 'jigooo';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globaName);
}
console.log(name);
console.log(globaName);

// var (don't ever use this!)
// var hosting (move declaration from bottom to top) 어디에 선언했냐에 상관없이 항상 선언을 맨 위로 끌어올려주는 것
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. Contant, r(read only)
// use const whenever possible.
//only use let if variable needs to change.
const daysInweek = 7;
const maxNumber = 5;

// NOTE!
// Immutable data types: primitive types, frozen objects (i.e object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes


// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 123243534645756856867856856856n; //over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const woo = 'w';
const gun = 'gun';
const greeting = 'hello' + gun;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${gun}`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean 
// false: 0, null, undefined, NaN, ‘ ’
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null 
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined 
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = symbol('id');
const symbol2 = symbol('id');
console.log(symbol1 === symbol2);
//=> false

const gSymbol1 = symbol.for('id');
const gSymbol2 = symbol.for('id');
console.log(symbol1 === symbol2);
//=> true

console.log(`value: ${symbol1.description}`)
//=> 그냥 출력하면 에러뜨기 때문에 string으로 변환해서 출력해야함

// object, real-life object, data structure
const jigooo = {name: 'jigooo', age: 20};
jigooo.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));