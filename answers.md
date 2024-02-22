1. Challenge 1:
  - Answer: b
  - Explanation: The bar function modifies the value of the global variable foo to "xyz" and then records it. When console.log is called next, it will output the modified value "xyz" as well.

2. Challenge 2:
  - Answer: c
  - Explanation: The example function has a parameter a that shadows the global variable a. Inside the function a is value 10 and logged, affecting the local variable. Therefore, the first console.log(a) will output the local a (10), and the second console.log(a) will output the global a (1).


3. Challenge 3:
  - Answer: c
  - Explanation: function declarations to the top of the scope during the compilation phase.


4. Challenge 4:
  - Answer: c
  - Explanation: When the value of a is given to b, it is the same object in memory. Therefore, when b.num is modified to 90, it also affects the original value pointed to by a. As a result, will output : c


5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
