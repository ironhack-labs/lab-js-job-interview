1. Challenge 1:

- Answer: "xyz"
- Explanation: we are console.loging inside the scope of the function

2. Challenge 2:

- Answer: 10 and 1
- Explanation: let = a is a global variable which is mutable and so can be redefined inside the function. but the console will log the a variable in order from top to bottom

3. Challenge 3:

- Answer: "Hi there!"
- Explanation: we are simply asking the console to log the string inside.

4. Challenge 4:

- Answer: TypeError: Assignment to constant variable.
- Explanation: we are trying to redefine a constant which is not allowed and the console.log will report this error

ok, I was wrong because were not redefining a were updating the values held inside the a object, I think.

5. Bonus - Challenge 5:

- Answer: A) none of the above.  
   B) c
  { name: "Bob", age: 10 } and { name: "Ada", age: 20 }

- Explanation: A) (pedantic answer) Because were console logging a string which is present in none of the above answers.

               B) (none pedantic interpretation) Answer c, presumably because we are passing the second variable "rabbit two' which has no inherent values through the function and therfore assimilates the oject variable where as rabbit one has its own space in memory where its variables can only be accessed or updated via dot nottation and presumable thus is why only Bobs age is updated by the function.
