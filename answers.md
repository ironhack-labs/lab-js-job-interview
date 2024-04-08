1. Challenge 1:
  - Answer: b
  - Explanation: 
      Because foo is declared in global scope, 
      which can be reassigned in function scope because it's declared as let
      and printed within both scopes, resulting in same output "xyz"


2. Challenge 2:
  - Answer: c
  - Explanation:
      becausen the function just receives the value because it's a primitive, not a reference.  
      So the parameter name shadows the variable with the same name in global scope,
      therefore changing it has no effect outsode in global scope.  

3. Challenge 3:
  - Answer: c
  - Explanation:
      Hoisting, function can be invoced before declared 

4. Challenge 4:
  - Answer: c
  - Explanation:
      Because a and b hold the reference to the same object. 

5. Bonus - Challenge 5:
  - Wrong Answer: d
  - Wrong Explanation: 
      because within the function, obj cannot be reassigned since it is declared as const.
                        (wrong error msg anyway!!!)

  - Right Answer: c
  - Right Explanation: 
      `obj.age = 10;` mutates the object as aspected (rabbit1)
      But `obj = { name: "Ada", age: 20 };` reassigns a new object to `obj` 
      since the const declaration in global scope, does not hold in the function scope,
      and therefore rabbit2 gets assign to the newly created object.
