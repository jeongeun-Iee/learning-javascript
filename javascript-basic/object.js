'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript ar instances of Object
// object = { key: value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
	console.log(person.name);
	console.log(person.age);
}

const jigooo = { name: 'jigooo', age: 20 };
print(jigooo);

// 뒤늦게 추가 가능, 하지만 유지보수, 에러 때문에 가능하면 이런 상황은 피하는 게 좋음
jigooo.hasJob = true;
console.log(jigooo.hasJob);

// 삭제도 가능
delete jigooo.hasJob 
console.log(jigooo.hasJob);


// 2. Computed properties
// key should be always string
console.log(jigooo.name); // 코딩하는 그 순간 키에 대한 정보를 받아올 때 사용
console.log(jigooo['name']); // 정확하게 어떤 키 값인 지 모르고 동적으로 키에 관련된 value를 받아올 때 유용
jigooo['hasJob'] = true;
console.log(jigooo.hasJob);

function printValue(obj, key) {
	console.log(obj[key]);
}
printValue(jigooo, 'name');
printValue(jigooo, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name:'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('jigooo', 30);
console.log(person4);
function makePerson(name, age) {
	return {
		name,
		age,
        // name: name; key와 value의 이름이 동일하다면 생략할 수가 있다
	};
}

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in jigooo);
console.log('age' in jigooo);
console.log('random' in jigooo);
console.log(jigooo.random);

// 6. for..in vs for..of
// for (key in obj)
// 모든 key들 출력
console.clear(); //console창의 이전 것들 지우기
for (let key in jigooo) {
	console.log(key);
}

// for (value of iterable) 베열 리스트 
const array = [1, 2, 4, 5];
for (let value of array) {
	console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'jigooo', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user.name);

// old way
const user3 = {};
for (let key in user) {
	user3[key] = user[key];
}
console.log(user3);

// new way
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); 
console.log(mixed.color); // blue
console.log(mixed.size); // big
// 뒤에 나오는 property가 앞에 것을 덮어씌움
