1. Challenge 1:
  - Answer: b)
  - Explanation: The code initializes a variable foo with the value "abc". It then defines a function bar() which reassigns the value of foo to "xyz" and logs it. When bar() is invoked, it prints "xyz". Lastly, outside the function, the value of foo is logged again, which remains "xyz" since it was modified within bar(). Thus, the output of the code is "xyz" followed by another "xyz", resulting in option b) "xyz" and "xyz".


2. Challenge 2:
  - Answer: c)
  - Explanation: The code defines a global variable a with the value 1. It then declares a function example(a) which takes a parameter a. Inside example(), the parameter a is reassigned the value 10. When example(a) is invoked with the argument a (which is 1), it logs the value of the parameter a, resulting in 10. However, outside the function, the global variable a retains its original value 1, which is logged separately. Thus, the output of the code is 10 followed by 1, yielding option c) 10 and 1.


3. Challenge 3:
  - Answer: c)
  - Explanation: The code showcases a function sayHi() being invoked before its declaration. Despite typical programming order where functions are invoked after their declaration, JavaScript, due to hoisting, moves function declarations to the top of their containing scope during compilation. Consequently, when sayHi() is called before its declaration, it still executes successfully. Thus, the output of the code is "Hi there!", as the function declaration is hoisted to the top, enabling its invocation without error, yielding option c) "Hi there!".


4. Challenge 4:
  - Answer: c)
  - Explanation: The code initializes a constant variable a with an object { num: 42 }. Then, it declares another constant variable b and assigns it the same object reference as a. As objects are reference types in JavaScript, modifying b.num to 90 directly affects the object referenced by both a and b. Hence, when console.log(a) is called, it prints the updated object { num: 90 }. Therefore, the output of the code is { num: 90 }, resulting in option c) { num: 90 }.


5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
