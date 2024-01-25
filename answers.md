1. Challenge 1:
  - Answer: b
  - Explanation: It will be 'xyz' both times because the value of the variable 'foo' is updated before any console.log


2. Challenge 2:
  - Answer: c
  - Explanation: I though it was like challenge 1 but I see now that the variable 'a' is passed as an argument to the function, so in this case the changes only apply within the scope of the function because there is no return


3. Challenge 3:
  - Answer: c
  - Explanation: Functions can be called at all times during the code, even if they haven't been declared yet


4. Challenge 4:
  - Answer: c
  - Explanation: 'b' is only a reference to 'a' so when changing the value of 'b.num' to 90 we are changin the value of 'a'


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation: I thought it was answer 'a'. But I guess we are changing Bob's age because since it is an object, even though it's a const, values inside objects and arrays can be changed at any time, because they're passed by reference and not by value. And when we try to change the whole object our original object doesn't change so we return a new one.