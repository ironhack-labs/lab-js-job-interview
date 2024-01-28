1. Challenge 1:
  - Answer: b
  - Explanation: when we console.log(foo) inside the function it will give "xyz" because in the above line it has been assigned the value of "xyz" and same will happen the second time because we call the function before printing the value of foo. 


2. Challenge 2:
  - Answer: c
  - Explanation:console log 1 will print 10 because "a" locally has been assigned the value of 10. console log 2 will print 1 because "a" has been assigned to  value 1 globally. the value assigned inside the function doesn't affect the global value of "a"


3. Challenge 3:
  - Answer: c
  - Explanation:The function sayHi is declared using the function declaration syntax, and because of hoisting, the entire function is moved to the top of the code during the compilation phase. So, when sayHi() is called before the function declaration, it works as expected because the function is already available in the scope.


4. Challenge 4:
  - Answer:c
  - Explanation:when we change the property of object b it also changes the property of a because  b is ponting to object a


5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
