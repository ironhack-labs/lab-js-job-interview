1. Challenge 1:

- Answer: B = The output of the code will be xyz and xyz
- Explanation: As the foo variable at the global level is declared via let its value can be re-assigned. When the bar function is invoked foo is seen at the function level as xyz and output via the initial console.log. The 2nd console.log then sees foo as xyz.


2. Challenge 2:

- Answer: C = 10 and 1
- Explanation: When the example function is called it takes a as a parameter, whihc is set to 10. a is at the function scope level as is console.log 1 and is therefore output by the console. When example(a) is then called again it is called at the global level, where a has been assigned a value of 1. Therefore the 2nd console log outputs 1.


3. Challenge 3:

- Answer:C = "Hi there!"
- Explanation: There is no issue with the function?

4. Challenge 4:

- Answer: C = { num: 90 }
- Explanation: As b is set to = a , when the property set against b is adjusted, its adjusting the property against a.

5. Bonus - Challenge 5:

- Answer: C
- Explanation: When rabbit2 is declared it takes the rabbit 1 object as a parameter. The age property within the object argument is then re-assigned to be 10. The obj name and age properties and then re-assigned to be "Ada" and "20". The end result is therefore { name: "Bob", age: 10 } and { name: "Ada", age: 20 }.
