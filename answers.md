1. Challenge 1: passed
  - Answer:
  xyz xyz

  - Explanation: 

  when called, the function bar will assign the value "xyz" to the variable foo (that was initiated initially by "abc").

  when we log in console the variable foo, it shows the string that was stored after bar call, it stayed as modified so xyz again.


2. Challenge 2:
  - Answer: 10 10 (failed) ==> correct answer : 10 and 1
  - Explanation:

Console log 1 inside the function will call the variable a that was passed as an argument to the the function example, we stored 10 in a, so it shows 10.
the second console log 2 calls the variable a that stores 1. console.log will take its value from the general scope => 1.


3. Challenge 3: passed
  - Answer: Hi there!
  - Explanation: sayHi function can be called after or before declaration !


4. Challenge 4: failed but understood now !
  - Answer: correct answer { num: 90 }
  - Explanation: { num: 42 } is an object stored somewhere in the merory with a reference (let's call it "&a") stored in a.
  &a is the same reference that will be passed to b after the instruction const b = a;
  the instruction b.num = 90 will access the value 42 using the key num (and the reference &a) and puts in place 90.
  console.log(b) => { num: 90 }
  even console.log(a) => { num: 90 } , because we modified 1 object (not a copy !)




5. Bonus - Challenge 5: (failed)
  - Answer:
  - Explanation:

function magicHat(obj) {
  obj.age = 10;
  console.log(obj.age); //10
  obj = { name: 'Ada', age: 20 };
  console.log(obj.age); //20
  console.log(obj); // { name: 'Ada', age: 20 }
  return obj;
}

const rabbit1 = { name: 'Bob', age: 30 };

const rabbit2 = magicHat(rabbit1);

console.log('rabbit1: ', rabbit1); // my answer { name: 'Bob', age: 30 }; but : magicHat() modified the property age of the obj rabbit1 passed as an argument. ==> correct answer { name: 'Bob', age: 10 } (this is logic, I am tired a bit :)
console.log('rabbit2: ', rabbit2); // my answer { name: 'Ada', age: 20 } the object returned by the function magic hat in all cases OKOK