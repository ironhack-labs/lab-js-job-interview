1. Challenge 1:
  - Answer: b
  - Explanation: Because the foo variable is re-declared in the function and the function is called before the foo variable is logged. So the second log will show the re-declared value of the foo variable.


2. Challenge 2:
  - Answer: c
  - Explanation: First the function is called with the argument a=1 but as it is an argument it is block scoped and not interpreted as a re-declaration of the let a variable. So in the function only the argument is updated with the value 10. Then at the end the variable let a = 1 is logged as it has not been re-declared. 


3. Challenge 3:
  - Answer: c
  - Explanation: Node or the browser is reading through the complete javascript code before executing, therefore the function is already present in the memory when the code gets executed and the function is called before it is actually written in the code.


4. Challenge 4:
  - Answer: c
  - Explanation: Because the operation const b = a creates a shallow copy of a object so any changes of the b object will also be reflected in the a object.


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: Because first the rabbit1 but propery age will be changed when the functions is run as the object rabbit1 is entering the function as an argument. For rabbit2, it is actually an object that is defined inside function at obj = {,,,} - so that will be the value of rabbit2.
