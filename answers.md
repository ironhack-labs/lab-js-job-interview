1. Challenge 1:
  - Answer: b
  - Explanation: 
  we define a global variable foo set to "abc" 
  then we define a function bar that takes no parameters that assignes foo to "xyz" then console.log(foo) 
  the function bar can do it because foo is a global variable
  afterwards wee call bar(), so foo's value becomes "xyz" we see "xyz" in the console
  then we console.log(foo) which was updated by bar, so we see "xyz" again

2. Challenge 2:
  - Answer: c
  - Explanation:
  we define global variable a set to 1 
  we define a function example that takes one parameter a 
  then assignes 10 to it then console.log(a) 
  a inside the function is different from the global variable a since it referes to it parameter (shadowing)
  then we call example with the global a as argument so we see 10
  then we console.log(a) so we see 1 because of what stated previously


3. Challenge 3:
  - Answer: c
  - Explanation:
  we call a function sayHi() that console.log("Hi there!")
  then we define it 
  because of hoisting we can call the function before its declaration
  so the output "Hi there!"


4. Challenge 4:
  - Answer: c
  - Explanation:
  we define a variable a with the object { num: 42}
  then we variable b that is equal to a
  then we update b.num to 90
  then we console.log(a)
  when b and a refere to the same object because object are stored by reference, so changing b.num also affects a.num

5. Bonus - Challenge 5:
  - Answer: c
  - Explanation:
  we define a function magicHat that takes one parameter obj
  then update object.age to 10
  then set obj = { name: "Ada", age: 20 } which means, obj now referes to a different object
  then returns obj

  then we define a variable rabbit1 with { name: "Bob", age: 30 }

  then we define a variable rabbit2 = magicHat(rabbit1)
  here when we call magicHat with rabbit1
  rabbit1.age is set to 10 since we passed the reference of the object

  but in the second line we have a new object
  so rabbit2 ends up refering to a different object than rabbit1

  so when we console.log("rabbit1: ", rabbit1)
  the output is { name: "Bob", age: 10 }


  and when we console.log("rabbit2: ", rabbit2)
  the output is { name: "Ada", age: 20 }