1. Challenge 1:
  - Answer: b)
  - Explanation: let foo is a variable that can be changed, so in the function you change the value to xyz, thats why when you call the function and console.log returns xyz twice.
the first variable foo would represent the global scope and the second foo represents the local scope variable.

conclusion: console.log from the function calls the modified variable and the endpage console.log calls the global scope variable..
(SHADOWING)

2. Challenge 2:
  - Answer: a) 
  - Explanation: the same as the previous example, but in this case you are calling the function: example(a);
  (SHADOWING)


3. Challenge 3:
  - Answer: c)
  - Explanation: because its  a predefined function of windows...HOISTING basicamente


4. Challenge 4:
  - Answer:a) 
  - Explanation: you can not reasign the value of a constant variable...


5. Bonus - Challenge 5:
  - Answer: d)
  - Explanation: it should return at the rabbit1 : {name: "Bob", age: 30 }
