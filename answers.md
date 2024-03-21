1. Challenge 1:
  - Answer: b
  - Explanation: In the first line "foo" variable is defined and initialized. And the same variable's value is changed inside of the "bar()" method. There, console.log() should print "xyz" when the bar() method is invoked. And after invoking the method, the second console log should print the value inside of the foo variable, which is again "xyz".
  

2. Challenge 2:
  - Answer: c
  - Explanation: Variable a is defined and initialized as 1. when example(a) method is invoked, the value of the a variable is passed to the method as an argument. in the method, there is a new value that assigned to the variable a and it printed as 10. Since the inside of the method is the local variable, outside of the method, variable a has still the same value which is 1. So, the second console.log prints the 1. The answer is : 10 and 1. 


3. Challenge 3:
  - Answer: c
  - Explanation: In JS, it doesn't matter to invoke a method before the definition. Because of the hoisting, IDE compile the definition first. So, it directly calls the sayHi() method and prints the log inside of it.


4. Challenge 4:
  - Answer: c
  - Explanation: Since a is an Object, when a is assigned to the b, a and b point the same object. So, if b.num is changed, a is also will change to 90.


5. Bonus - Challenge 5:
  - Answer: c 
  - Explanation: When an object is passed as an argument to the method, that means its reference is passed, instead of its copy. So, when magicHat() method change the age property of the object, it effects to the rabbit1 object. Inside of the method, the second line created another object which has different name and age property. And returns that new object to assign it to rabbit2. In this case, rabbit1 is modified as {name: Bob, age: 10} and rabbit2 has the new values {name: Ada, age: 20}
