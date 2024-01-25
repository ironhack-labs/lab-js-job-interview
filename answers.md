1. Challenge 1:
  - Answer: b
  - Explanation: well initially foo is assigned the value "abc", but then in the function bar() its value is reasigned to "xyz", and so when the function is then called with bar() the value of foo now equals "xyz" so both console.logs will log "xyz"


2. Challenge 2:
  - Answer: c
  - Explanation: its because a is being used as a parameter in the example function and a outside the function has a value of 1 so then when you do a = 10 inside the function you will only change the a of the example function and not the a of the global scope. if you would name your parameter (b) for example then a should change to 10 probably.


3. Challenge 3:
  - Answer: c
  - Explanation: you can call a function before the function appears in the code because it has something to do with how the code gets compiled to the top.

Error: Identifier 'a' has already been declared
4. Challenge 4:
  - Answer: c
  - Explanation: because a is not a is not assigned a primitave value a so both a and b are referencing to the same object so what you do in b will change the value of a's value. if its an object then it can be modified by b, if its in the same way as in the code at least


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: you can change an objects property but not the whole object cause its being used as a parameter in the function and because its a const you cant replace the whole object with another one
