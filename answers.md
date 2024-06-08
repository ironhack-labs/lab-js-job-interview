1. Challenge 1:
  - Answer: b
  - Explanation: 
As the code runs, you will find two console.logs.
The first will have the value of xyz, because within the function another value is assigned to the variable foo (as it is a let variable the value of the variable can be re-defined). 
The second console.log will have the same value (xyz) since the value of the foo variable was re-defined.


2. Challenge 2:
  - Answer: c
  - Explanation: 
  The console.log inside the function will be 10, as it references the local variable a.
  The console.log outside the function will output the original value of a, which is 1. 


3. Challenge 3:
  - Answer: c
  - Explanation: We only have one console.log and the message is "Hi there!".
  


4. Challenge 4:
  - Answer: c
  - Explanation: The number 90 overwrites the number 42.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: The function modifies rabbit1's age to 10, then reassingns and returns a new object, leaving rabbit1 unchanged but with an updated age.  
