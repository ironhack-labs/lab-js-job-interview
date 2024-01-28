1. Challenge 1:
  - Answer: b
  - Explanation: This is because the variable has been declared and initialized outside the function (meaning that it had the global scope, and could be read inside). As the value is reassigned to be "xyz" inside the function declaration, and the function is called afterwards, the value of foo is changed as written in the function (into "xyz").


2. Challenge 2:
  - Answer: c
  - Explanation: This is because the a inside the function is a parameter, meaning it's a placeholder for whichever variable is passed trough it. When the function is called, even with the variable a being passed as a argument, it's value is changed, only inside the function. That's why when we console.log(a), it returns the original value of 1.


3. Challenge 3:
  - Answer: c
  - Explanation: This is because when the functions declaration is always hoisted to the top of the document, meaning that they can be invoked wherever in the document. 


4. Challenge 4:
  - Answer: c
  - Explanation: This is because as b = a, they are both "pointing" to the same object in the pc memory.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: This is because the age property is changed inside the function, but however a new object can't be reassigned to the rabbit1 object. This is why the rabbit1 has the change of value in the age property, and the rabbit2 has the structure as defined inside the function.
