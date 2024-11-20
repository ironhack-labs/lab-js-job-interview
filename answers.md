1. Challenge 1:

- Answer: b
- Explanation: The foo variable is global. Inside the function, the global variable is reassigned (modified). The bar function logs the updated value of foo. Since the variable is global, the changes persist outside the function as well.

2. Challenge 2:

- Answer: c
- Explanation: In the first part of the code (let a =1 ), sets the variable "a" in the global scope with the value 1. The function exemple(a), pass local variable a as an argument and inside the fuction the local veriable is rassigned to 10. the execution ends. The local a inside the function is separate from the global a. Reassigning the local a does not change the global a. After the function is done, only the global a remains, untouched by the changes made within the function.

3. Challenge 3:

- Answer: c
- Explanation: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

4. Challenge 4:

- Answer: c
- Explanation: we modify the properties of the object a and asign the num 90 to it. because b is equal to a and modify the b.num is the same as a.num.

5. Bonus - Challenge 5:

- Answer: c
- Explanation: rabbit1 is passed as an argument to the function, and its age property is modified to 10. inside the function, obj is reassigned to a new object { name: "Ada", age: 20 }. This reassignment doesn't affect rabbit1 because the object itself wasn't modified; only the reference was changed. The function then returns the new object { name: "Ada", age: 20 }, and that returned object is assigned to rabbit2
