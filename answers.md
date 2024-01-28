1. Challenge 1:
  - Answer: b
  - Explanation: This is because foo is updated to "xyz" inside the bar function, and the second statement console.log(foo); outside the function shows the updated value of foo. 


2. Challenge 2:
  - Answer:c
  - Explanation: the modification made to variable "a" inside the example function does not affect the variable "a" outside the function. Inside the function, "a" is a local parameter that "shadows" the global variable "a".


3. Challenge 3:
  - Answer:c
  - Explanation: This happen because the "sayHi" function is called correctly, despite being before its declaration in the code.


4. Challenge 4:
  - Answer:c
  - Explanation: The value of the "num" property was changed to "90" through the variable b, but since both "a"and "b" reference the same object, this change is visible when i printed the value of "a".


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation:
This is because changes made inside the magicHat function to the object passed as an argument (rabbit1) directly affect that object outside the function. However, reassigning "obj" inside the function does not affect the variable outside the function. The function returns a new object, and "rabbit2" is assigned to a new object.
