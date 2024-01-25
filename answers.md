1. Challenge 1:
  - Answer: b
  - Explanation: we call the fn first so the original foo variable is modified to xyz then printed, the final log show the variable which is now set to xyz. The console shows 'xyz' and 'xyz'
  //true


2. Challenge 2:
  - Answer: a
  - Explanation: the role of the fn is to change the value of a to 10 then print it. The log will display 10 because the variable was changed when the fn was called just before. 
// false, that's a different scope 

3. Challenge 3:
  - Answer: c
  - Explanation: because it's the log into the fn
  // true


4. Challenge 4:
  - Answer: c
  - Explanation: b refers to the same object as a (as a is an object, so b is not copying its value but its reference to the object). When changing b value into the object, it changes into the object referenced by a as well.
  // true


5. Bonus - Challenge 5:
  - Answer: a
  - Explanation: the fn modify the object referenced by its argument when called. The first variable is rabbit1 and the first log display its object. The second log calls the fn which changes the infos of the referenced object into Ada 20yo. So the two logs show respectively rabbit1's object then the modified object of rabbit1 invoked by the function into rabbit2 const. 
  // false
