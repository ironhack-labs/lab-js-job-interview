1. Challenge 1:
  - Answer: b
  - Explanation: In the function bar(), we assign a new value to the variable foo. This one is then executed within the function first and then in the console.log(foo) outside the function again. 

2. Challenge 2:
  - Answer: c
  - Explanation: The function is invoked with the value a, which is 1. In the function, it gets assigned the new value 10 which is printed by the first console.log and only has function scope here. The second console.log, however, prints the initial a's value, which is 1. 

3. Challenge 3:
  - Answer: c
  - Explanation: The function is invoked and prints the string defined in the console.log, which is "Hi there!". 

4. Challenge 4:
  - Answer: c
  - Explanation: As a is an object, it is a multi-value type. The way it's copied in the example is a shallow copy, which means, that, if the object in the copy (b) is modified, it is also modified in the original value (a). 


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: First, the function magicHat is invoked with the rabbit1 and adapts the age of Bob, changing it to ten. 
  Then, the code prints the rabbit1, which is Bob & 10. Then, it prints the rabbit2, which is the variable returned from invoking the function magicHat with the rabbit1 passed as a argument. First, the function changes the age of Bob to 10, but then it overrides everything completely with the obj Ada & 20. This one gets returned and is also printed.
