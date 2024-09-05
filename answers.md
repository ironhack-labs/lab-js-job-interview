1. Challenge 1:
  - Answer: "xyz"  and  "xyz" 
  - Explanation: function bar() alters let foo and it is affected within the curly brackets. But because the function is called outside on the same scope of let foo it changes it the same way as in the function it self.  


2. Challenge 2:
  - Answer:  10  and  1
  - Explanation: function example(a) alters let a, but it is only affected within the curly brackets. 


3. Challenge 3:
  - Answer: "Hi there!"
  - Explanation: functions are hoisted so call logs ends to be the declares string. 


4. Challenge 4:
  - Answer:  { num: 90 } 
  - Explanation: a is equilized to b that gains the new value 90  


5. Bonus - Challenge 5:
  - Answer: { name: "Bob, age: 10 } and { name: "Ada", age: 20 }
  - Explanation: The functions starts by taking the obj property age, to reassign to a new object. Thus, it does not changes const rabbit1