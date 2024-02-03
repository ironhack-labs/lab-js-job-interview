1. Challenge 1:
  - Answer: b
  - Explanation: foo is declared as 'abc'. Then bar() is invoked, which can change foo to "xyz" because foo is declared as a let. bar then returns
  a console log of foo, which will be "xyz", and then there is another console.log, which also returns the update value of foo, "xyz" 


2. Challenge 2:
  - Answer: a
  - Explanation: Same as above. a is declared as 1, then example takes a as an argument and reassigns it to ten. The console log inside example() returns 10, and then the console log outside example() should return a's new value of 10


3. Challenge 3:
  - Answer: c
  - Explanation: Functions can be invoked as long as they are declared somewhere in the same file, or in another file that is linked to an html file before the file they are invoked in.


4. Challenge 4:
  - Answer: c
  - Explanation: 'const b = a' creates a new reference to a under the variable b. Changing num in b also changes num in a


5. Bonus - Challenge 5:
  - Answer: b
  - Explanation: rabbit1 has the properties name: bob and age: 30. rabbit 2 invokes magicHat on rabbit 1, which creates a copy of rabbit1's properties. magicHat then changes rabbit2's age property to 10 successfully. An object is immutable, and thus cannot be reassigned, so 'obj = { name: "Ada", age: 20} does nothing. magicHat then returns the the object it was given as an argument with only the age property changed.


