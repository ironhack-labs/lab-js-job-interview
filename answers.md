1. Challenge 1:
  - Answer: b
  - Explanation: "foo" was created, which takes the string "abc", then a function "bar" was created, which changes the string of foo to "xyz".

the function bar was called, which displays "xyz" in the console, and console.log foo, which displays "xyz", because the function changes the initial foo variable.


2. Challenge 2:
  - Answer: c
  - Explanation: Was created that takes the value = 1, then a function "example" was created, with a parameter "a" that, in the function scope, has the value "10".

When the function was called, it displayed the value assigned in the function scope = 10, and the console.log, which is in the global scope, displayed = 1.


3. Challenge 3:
  - Answer: c
  - Explanation: JavaScript, before running the code, "reorganizes" the declarations internally, a concept called "hoisting", which is why the output will show "Hi there".


4. Challenge 4:
  - Answer: c
  - Explanation: An object was created and stored in memory. "const = b" received the same reference as "a", and now the variables point to the same object.

The "num" property of the object was changed to 90, since "a" and "b" point to the same object, when printing, the modified object is shown.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: A function was created that changes the "age" of an object, and returns an "obj" used as a parameter for the values ​​stipulated in this function.

then 2 const rabbit1 and rabbit2 were created, the function changed the value of "age" of rabbit1, and since rabbit2 was = the function that took the object of rabbit1, the function changed the entire object.

