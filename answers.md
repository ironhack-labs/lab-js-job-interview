1. Challenge 1:

- Answer: b
- Explanation: because it is first declared as a let which is reassigneable and inside the function again, so it overwrite the declaration above and becomes a new value. but just because the function is called before.

2. Challenge 2:

- Answer: c
- Explanation: because "a" will reassigned inside the function, but just for the example(a), because of the functional scope

3. Challenge 3:

- Answer: c
- Explanation: because of hoising. that just works with ES5 syntax

4. Challenge 4:

- Answer: c
- Explanation: a and b are linked to each other. assigning b.num = 90 also mutates the property of a. Since both variables reference the same object, any changes to b's properties reflect on a as well.

5. Bonus - Challenge 5:

- Answer: c
- Explanation: c shows that rabbit1 has been mutated to { name: 'Bob', age: 10 } and rabbit2 was assigned a new object altogether, { name: 'Ada', age: 20 }. The initial mutation to obj.age affects rabbit1 directly since obj holds a reference to rabbit1. When obj is reassigned to a new object, this does not affect rabbit1 since it's a new reference.
