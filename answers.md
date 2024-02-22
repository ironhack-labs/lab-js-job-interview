1. Challenge 1:
  - Answer: xyz & xyz
  - Explanation: While "foo" is set to "abc" in the beginning, the function changes it to "xyz". When calling the function we get the first "xyz" logged from the functin itself, and the global console log in the end will also give us the new value of "foo" which is "xyz"


2. Challenge 2:
  - Answer: 10 & 1
  - Explanation: Looking similar to the first Challenge, the difference is, that the Value of "a" is passed as an argument to the function. The function will always output "10", no matter the input value. Since the input is given as a parameter, the original value of "a" won't change in this case, which gives us "1" for the 2nd console log.


3. Challenge 3:
  - Answer: Hi there!
  - Explanation: calling a function works, even if the function gets defined after the call.


4. Challenge 4:
  - Answer: { num: 90 }
  - Explanation: "a" and "b" are assigned to be the same, so changing the value of the num key to 90 in b, will also change it in a, this is why console logging a (or b) in this case in the end will both give 90


5. Bonus - Challenge 5:
  - Answer:
  - Explanation:
