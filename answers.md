1. Challenge 1:

- Answer: b
- Explanation: Since the variable is not defined in the scope function, the function will look into the global scope and find it. Hence, it will change the value of the global variable and console.log. The last console.log will find the modified value and print the same ('xyz'),

2. Challenge 2:

- Answer: c
- Explanation: The funciont argument is called "a" but this is just a placeholder for a variable that is going to be only in the function scope. In this case, altough we initialize the "a" argument with a parameter with value 10, inside the function the orginal value is just overwriting by 10. Hence, the console.log inside the function is showing 10. Once the execution of the function ends, the global variable a (in the global scope) has the same original value 1. Hence, the last console.log will print 1.

3. Challenge 3:

- Answer: c
- Explanation: Since the function is defined in a declarative manner, it is not relevant in which position of the code is defined. It will execute correctly.

4. Challenge 4:

- Answer: c
- Explanation: b=a is not copying the object, just making a & b to point over the same object in memory. Hence, modifying b is the same as modifying a: they point to the same data!

5. Bonus - Challenge 5:

- Answer: c
- Explanation: First line in the function is modifying the original object that has been passed to the function (its reference) as a parameter. Hence, Bob age is now 10. The, the following line inside the function is key:
  obj = { name: "Ada", age: 20 };
  basically, the "obj" placeholder inside the function is assigned to a brand-new object. Return, in turn, will be passing a reference to this new object in memory. Hence, rabbit1 and rabbit2 are two different objects with different data.
