1. Challenge 1: 
  - Answer: b) "xyz" and "xyz"
  - Explanation: foo is initialized but later on changed to xyz, it is not newly declared. therefore in the inner & outerscope it is "xyz"


2. Challenge 2:
  - Answer: c) 10 and 1
  - Explanation: Since the function takes a as a parameter which makes its use in the function a local variable that is printed (=10), afterwards the second console log is printed and is 10 since the scope of the current level says a = 1


3. Challenge 3:
  - Answer: c) "Hi there!"
  - Explanation: Since its a normal function declaration the function can be called before declaring. It's hoisted and always on top.


4. Challenge 4:
  - Answer: c) { num: 90 }
  - Explanation: Because b is pointing at a, it changes the object at a. b is referencing a.


5. Bonus - Challenge 5:
  - Answer: c) { name: "Bob", age: 10 } and { name: "Ada", age: 20 }
  - Explanation: obj = { name: "Ada", age: 20 };
                    Reassigns obj to a new object.
                    rabbit1 is unaffected because it still points to the original object.
