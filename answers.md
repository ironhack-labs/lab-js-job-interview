1. Challenge 1:
  - Answer: a
  - Explanation: The global console.log returns the value of the global variable "foo", which value is "abc. The console.log inside of bar(), prints the value of the internal variable "foo", which is "xyz".

2. Challenge 2:
  - Answer: a
  - Explanation: The global console.log returns the value of the global variable "a", which is 1. The function will change to ten the value of the variable that recieves to a (but that does not change the value of the global variable a), so the internal console.log will display 10.


3. Challenge 3:
  - Answer: a
  - Explanation: you can´t invoce a function before defining it.


4. Challenge 4:
  - Answer: c
  - Explanation: Changing the value of the property in b will also afect the value of the property in a because they have the same reference. 


5. Bonus - Challenge 5:
  - Answer: a
  - Explanation: The function creates a new variable called obj and assigns the value of rabbit1, but it does not modify directly rabbit1, so it returns { name: "Ada", age: 20 }; 
