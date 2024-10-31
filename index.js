console.log('########### Challenge 1 ##############');
let foo = 'abc';

function bar() {
	foo = 'xyz';
	console.log(foo);
}

bar();

console.log(foo);

console.log('########### Challenge 2 ##############');
let a = 1;

function example(a) {
	a = 10;
	console.log(a); // Console log 1
}

example(a);

console.log(a); // Console log 2

console.log('########### Challenge 3 ##############');
sayHi();

function sayHi() {
	console.log('Hi there!');
}

console.log('########### Challenge 4 ##############');
const objA = { num: 42 };
const b = objA;

b.num = 90;

console.log(objA);

function magicHat(obj) {
	obj.age = 10;
	obj = { name: 'Ada', age: 20 };
	return obj;
}
console.log('########### Challenge 5 ##############');

const rabbit1 = { name: 'Bob', age: 30 };

const rabbit2 = magicHat(rabbit1);

console.log('rabbit1: ', rabbit1);
console.log('rabbit2: ', rabbit2);
