1. Challenge 1:

- Answer: b
- Explanation: The output of the code will be "xyz" and "xyz", because variable foo is declared in global scope, so when function bar gets invoked, foo's value will get changed and set to "xyz". So both of the console log print updated value.

2. Challenge 2:

- Answer: c
- Explanation: The output of the code will be 10 and 1, because function parameter is shadowing the global scope varible a. So inside the function variable value is updated but that change will not visible to outside of that function because of variable shadowing.

3. Challenge 3:

- Answer: c
- Explanation: The output of the code will be "Hi there!", because javascript hoist varible declaration and function defination on top. So function can still be invoked before its declaration.

4. Challenge 4:

- Answer: c
- Explanation: The output of the code will be { num: 90 }, because in javascript objects are copied by reference. So both actual and copied varible point to same object values. Therefore change in one variblale will also visible to other copy varible.

5. Bonus - Challenge 5:

- Answer: c
- Explanation: The output of the code will be { name: "Bob", age: 10 } and { name: "Ada", age: 20 }, because objects are passed as a reference to the function, so changing object properties inside the function will update the original object values. Also function is returning new created object, and assign it to new varible called rabbit2.
