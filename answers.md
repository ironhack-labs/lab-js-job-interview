1. Challenge 1:
  - Answer: b)
  - Explanation: The variable `foo`  was declarated in the global scope. When the function `bar` is invoked (called) the value of the var `foo` is updated inside the function. Then, a `console.log` is returned after the variable update, showing the new value. Outside the function, the `console.log` is returned again after the invocation of the `bar`, showing the same value of the `foo` var.   


2. Challenge 2:
  - Answer: c)
  - Explanation: The variable `a`  was declarated in the global scope. When the function `example` is invoked (called) the `a` variable is passeed as argument to the function. Inside the function, the value of the parameter `à` declared and updated at the same time, creating a new variable `a` inside the scope of the function, showing the updated value in the first `console.log`. After the  invocation, and outside the function, the original value of the global scope variable `a` it's showing in the console.  


3. Challenge 3:
  - Answer: c)
  - Explanation: the functions in Javascript can be invoked (called) before it's declaration because the Javascript interpreter hoist the entire function declaration to the toop of the current scope (`window` object).


4. Challenge 4:
  - Answer: c)
  - Explanation: the variable `b` is a reference of the object `a`. Then the value of the `num` key is updated in both objects 


5. Bonus - Challenge 5:
  - Answer: c)
  - Explanation: When the `magicHat` function is invoked (called), and assigned to the variable `rabbit2`,  the object `rabbit1` is passed as argument. Inside the function, the value of the property `age` of the `rabbit1` object it's updated to `10` with the parameter. After that, the parameter is re-assigned to a new object and returned by the function and assigned to the global scope `rabbit2` variable.    
