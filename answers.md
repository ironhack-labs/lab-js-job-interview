1. Challenge 1:

- Answer: xyz + xyz
- Explanation: because foo is changed by defining "foo = "xyz";" in the function. we invoke the function where you call bar(); and the result is xyz. Then we display it console.log(foo); as it was already changed xyz

2. Challenge 2:

- Answer: c
- Explanation: because a is changed by defining "a = 10;" in the function. then when console.log(a); is called outside the function, it logs the global variable a, which still holds the value 1

3. Challenge 3:

- Answer:c
- Explanation: because you can invoke the function by calling it from the top first as well

4. Challenge 4:

- Answer:
- Explanation:When you modify the object through b, the change is reflected in a because they are pointing to the same object.That's why console.log(a) prints { num: 90 }, even though you directly modified

5. Bonus - Challenge 5:

- Answer:c
- Explanation: obj.age is 10, so when function return to obj, it will count the age as 10. (obj.age = 10;) and will store the name as it is in the const const rabbit1 = { name: 'Bob'}
