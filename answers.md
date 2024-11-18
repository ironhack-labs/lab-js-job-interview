1. Challenge 1:
   - Answer:
    b) "xyz" and "xyz"
  - Explanation: 
    Even though the variable is declared as "abc", it gets re-assigned in the function and is logged once inside the function and again outside.

2. Challenge 2:
   - Answer:
     c) 10 and 1
  - Explanation:
    each function has its own scope, and any variable declared within that function is only accessible from that function and any nested functions. a=1 on global scope and a is re-assigned as 10 in the lexical scope


3. Challenge 3:
  - Answer:
    c) "Hi there!"
  - Explanation:
    the function declaration is hoisted so even if it is called before the creation it still compiles and thus the console log in the inner scope does get logged 

4. Challenge 4:
   - Answer:
    c) { num: 90 }
  - Explanation:
    variable b in example is assigned the value of a which is an object, but then the value of the object is updated to 90. In the case of declaring an object using the const keyword, this means that new properties and values can be added.

5. Bonus - Challenge 5:
   - Answer:
     c) { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation:
    rabbit one has a value of { name: "Bob", age: 30 }. Rabbit 2 is a value returned by the function. This receives the value of rabbit 1 and sets its age = 10, but then the whole object passed into the function is set to a new value as is returned by the function.
