1. Challenge 1:

- Answer: Option B
- Explanation:

B is the correct because:
=> we assign the value of 'abc' to the variable (foo) then...
=> we create a function called BAR and we assign the value of 'xyz' to the variable (foo), wich changes because it is a LET variable
=> We call bar() and it logs the value of 'xyz', and then we console.log(foo) wich make 'xyz' be logd again

2. Challenge 2:

- Answer: Option C
- Explanation:

We declare the variable 'a' and give it the value '1'
=> After we declare de function 'exemple' and give it the parameter 'a', wich shadows the initial variable 'a'
=> inside the finction we assign the value of '10' to 'a' wich only modify this same parameter and not the initial 'a'

=> when we call the function and then console log(a); the number 10 will be shown and then the variable a, equals 1

3. Challenge 3:

- Answer: Option C
- Explanation:

I have missed this one, but i google it and now i know that functions can be called before their declaration.
So therefore, the code will work without any errors

4. Challenge 4:

- Answer: Option C
- Explanation:

Option C should be the correct one, because we define the variable 'a', and then define the variable 'b' wich makes reference to the same object as var. 'a'.
=> When we assign (b.num=90) the code change the 'a' refence as well, so console.log will output option C

5. Bonus - Challenge 5:

- Answer: Option C
- Explanation:

Option C is the correct one. I didn´t get this one , but i google it and i menage to figure out that once we define (obj.age = 10) in the second line and later we define the function rabbit1 = { name: "Bob", age: 30 } as an object, the property 'age' changes as well.
