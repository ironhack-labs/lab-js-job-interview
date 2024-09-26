1. Challenge 1:
  - Answer: xyz, xyz
  - Explanation:
  First we declare variable let foo and assign "abc" value to it.
  Next we create function with the name bar, and inside the function we reassign value of foo variable to "xyz", and then we console log it.
  We are calling bar function and functions console logging xyz, because value of foo wa is reassigned inside function scope.
  And then we console logging one more time variable foo, and it returns again xyz.


2. Challenge 2:
  - Answer: 10,1
  - Explanation:
  First we declare variable let a and assign 1 value to it.
  Next we create function that accepts one parameter a.
  Then inside the function we say take parametar a and give it a value 10 and then console log it. 
  We call a function and we pass variable a as an argument and number 10 is console logged. 
  Then we just console log variable a and we get number 1.


3. Challenge 3:
  - Answer: Hi there.
  - Explanation: In this scenarion we can call function above the declaration of function. With arrow function it would not work. (Unless we do something like setTimeOut)


4. Challenge 4:
  - Answer: 90
  - Explanation:
    Because we created object B from object A. They are pointing to the same place in a memory. So if we update any property inside A it will affect B and other way around.

5. Bonus - Challenge 5:
  - Answer:Bob 10, Ada 20
  - Explanation:
  As I understood function function changes obj.age of passed object, but then { name: "Ada", age: 20 } this only accepts new created object and not the one what was passed as an argument.
