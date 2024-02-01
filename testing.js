/* let foo = "abc";
function bar() {
  foo = "xyz";
  console.log(foo);
}
bar();
console.log(foo);

//--------------

let a = 1;

function example(a) {
  a = 10;
  console.log(a); // Console log 1
}

example(a);


console.log(a);  // Console log 2

//----------

sayHi();

function sayHi() {
  console.log("Hi there!");
}
 */

//-------------

const a = { num: 42 };
const b = a;

b.num = 90;

console.log(a);

//---------------


function magicHat(obj) {
  obj.age = 10;
  obj = { name: "Ada", age: 20 };
  return obj;
}
  
const rabbit1 = { name: "Bob", age: 30 };
  
const rabbit2 = magicHat(rabbit1);
  
console.log("rabbit1: ", rabbit1);
console.log("rabbit2: ", rabbit2);

/*

EXAMPLE 1

let language = prompt('what language do you speak')
  
if (language === 'spanish') {
   console.log('Hola mundo')
  }
else if (language === 'french') {
   console.log ('Bonjour tout le monde');
  }
else {console.log('Hello world')} 



EXAMPLE 2

let language = prompt('what language do you speak')
let result = '' 

switch (language) {
  case 'spanish':
   result = 'Hola mundo';
       break;
  case 'french':
   result = 'Bonjour tout le monde';
       break;
  default:
       result = 'Hello world';
       
}   
console.log(result)


EXAMPLE 3

const name = prompt('Favorite Game of Thrones main character:');
let house = '';
 
switch (name) {
  case 'Khal Drogo':
    house = 'Dothraki Horselord';
    break;
  case 'Daenerys':
    house = 'Targaryen';
    break;
  case 'Jon Snow':
  case 'Sansa':
  case 'Arya':
    house = 'Stark';
    break;
  default:
    house = 'other';
}
 
console.log(`Your favorite character is from the house ${house}.`);



EXCERSICE 4 

const someIterable = 'amsterdam';
 
for (const value of someIterable) {
  console.log(value);
}


EXCERSICE 5

let i = 0;
 
while (i < 5) {
  i++;
  console.log(`The number is: ${i}.`);
  if (i === 3) {
    break;
  }
}


EXCERSICE 6

let i = 0;
 
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  console.log(`The number is: ${i}.`);
}

The number is: 1.
The number is: 2.
The number is: 4.
The number is: 5.

*/