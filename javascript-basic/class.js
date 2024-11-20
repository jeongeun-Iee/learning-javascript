'use strict';
//Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes 
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
	// constructor
	constructor(name, age) {
		// fileds
		this.name = name;
		this.age = age;
	}

	// methods
	speak() {
		console.log(`${this.name}: hello!`);
	}
}

const jigooo = new Person('jigooo', 20);
console.log(jigooo.name);
console.log(jigooo.age);
jigooo.speak();

// 2. Getter and setters
class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

    // 값을 return
	get age() { 
		return this._age;
	}

    // 값을 설정
	set age(value) { 
		this._age = value < 0 ? 0 : value;		
	} // value 값이 -이면 0을 호출하고 그게 아니면 value값을 호출해라
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment {
	publicField = 2;
	#privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4. Static properties and methods
// Too soon!
class Article {
	static publisher = 'Dream Coding';
	constructor(articleNumber) {
		this.articleNumber = articleNumber;
	}

	static printPublisher() {
		console.log(Article.publisher);
	}
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.publisher); // undefined
console.log(Article.publisher); 
Article.printPublisher();


// 5. Inheritance
// a way for one class to extend another class.
class Shape {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}

	draw() {
		console.log(`draw ${this.color} color of`);
	}

	getArea() {
		return this.width * this.height;
	}
}

// extends를 사용하면 shape에 있는 class를 확장할 수 있다(상속)
class Rectangle extends Shape{
}
// 이렇게 필요한 함수만 재정의해서 쓸 수 있다
class Triangle extends Shape{

	getArea() {
        super.getArea();
		return (this.width * this.height) / 2;
	}
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
const triangle = new Triangle(20, 20, 'yellow');
triangle.draw();

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle); 
console.log(triangle instanceof Triangle); 
console.log(triangle instanceof Shape); 
console.log(triangle instanceof Object); 

// 유용한 사이트
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference