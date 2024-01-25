1. Challenge 1:
  - Answer: b) "xyz" and "xyz"
  - Explanation: 
  1st - foo is declared and it have the value of "ABC"
  2nd - the function bar is declared whit a new value of foo "XYZ"
  3rd - console.log prints the new value that is "XYZ"
  4th - the function bar is called, whitch updates the value of foo
  5th - The console.log(foo) statement outside the bar function prints the current value of foo, which is "XYZ" because it was updated inside the bar function


2. Challenge 2:
  - Answer: c) 10 and 1
  - Explanation:
  1st - a is initially set to 1.
  2nd - The function example takes a parameter a but works with a local variable, not the global one.
  3rd - Inside the function, the local a is set to 10, but it doesn't affect the global a.
  4th - The first console.log(a) prints the local variable inside the function, which is 10.
  5th - The second console.log(a) prints the global variable outside the function, which is still 1.


3. Challenge 3:
  - Answer: c) "Hi there!"
  - Explanation: 
  its a example of "Hoisted" This allows you to call a function before it is declared in the code.


4. Challenge 4:
  - Answer: c) { num: 90 }
  - Explanation:
1st - create an object A with a property num set to num: 42.
2nd - create another variable B and make it point to the same object as A.
3rd - change the value of num through B to 90.
4th - console.log A that have now the property set to num: 90.

5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
