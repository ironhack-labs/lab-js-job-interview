1. Challenge 1:
  - Answer: b
  - Explanation: Foo is declared with let inside the function bar(), so it creates a new local variable that shadows the outer foo. Inside bar(), foo is reassigned to "xyz" and then logged. The outer foo remains unaffected. After bar() finishes, the outer console.log(foo) prints the unchanged value "xyz".


2. Challenge 2:
  - Answer: b
  - Explanation: Inside example(a), the parameter a is a copy of the outer a with the value 1. Changing a inside the function only affects the local copy. 

3. Challenge 3:
  - Answer: c
  - Explanation: When the code is executed, the interpreter encounters sayHi(); first. Even though sayHi() is defined later, hoisting ensures it's recognized as a function.


4. Challenge 4:
  - Answer: c
  - Explanation: a and b both reference the same object in memory, modifying b.num changes the value of the property num within that object. The final console.log(a) prints the entire object a, which now has num: 90


5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
