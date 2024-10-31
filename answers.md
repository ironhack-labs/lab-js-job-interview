1. Challenge 1:
  - Answer: b
  - Explanation: 
Initial value of foo is "abc".
bar() changes foo to "xyz" in the global scope.
Both console.log(foo); statements print "xyz" because the global foo was modified by bar.


2. Challenge 2:
  - Answer: c
  - Explanation:
example(a); is called with the global a as an argument, which is 1.
However, in JavaScript, function parameters are local to the function scope. This means that a inside example is a local variable and not the same as the global a.
When the function is called, it creates a local copy of a with the value 1.
Inside the function, a = 10; reassigns the local a to 10.



3. Challenge 3: 
  - Answer: c
  - Explanation: Due to Hoisting, the function can be called before being defined.


4. Challenge 4:
  - Answer: c
  - Explanation: The value of the variable is an object, and due to const b = a, changing object b will reflect on object a.


5. Bonus - Challenge 5: 
  - Answer: c
  - Explanation: We have no idea.
