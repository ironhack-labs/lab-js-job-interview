1. Challenge 1:
  - Answer: b) "xyz" and "xyz"
  - Explanation: Se imprimirá "xyz" ambas veces porque al invocar a la función primero, reasiga el valor de foo. Foo es una variable global 


2. Challenge 2:
  - Answer: c) 10 and 1
  - Explanation: Primero imprime el 10 porque es una variable local dentro de la función, y después imprime a con valor 1, que es la variable global. Shadowing


3. Challenge 3:
  - Answer: c) "Hi there!"
  - Explanation: Se imprimirá el string porque sayHi es una propiedad del objeto window, caso de hoisting, invocar una funación antes de su declaración


4. Challenge 4:
  - Answer: c) { num: 90 }
  - Explanation: variable a también obtiene el valor de b porque en la segunda linea hemos asignado el mismo valor tanto para a como para b 


5. Bonus - Challenge 5:
  - Answer: a) { name: "Bob", age: 30 } and { name: "Ada", age: 20 }
  - Explanation: Rabbit1 será Bob de 30 años que es el valor que le estamos dando al objeto en el momento de su declaración. Para el rabbit 2, su nombre será Ada de 20 años porque son los valores que se asignan en la función, y se le asignan al rabbit 2 porque hemos invicado la función magicHat para crearlo.
