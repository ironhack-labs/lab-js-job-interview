1. Challenge 1:
  - Answer: "xyz" y "xyz"
  - Explanation: Porque al ser let y tener una función luego que usa la variable let hace hoisting

  


2. Challenge 2:
  - Answer: "10" y "10" 
  - Explanation: Por el mismo motivo que en challenge anterior, pues me he confundido. No se cual es el motivo por el que es "10" y "1"


3. Challenge 3:
  - Answer: "Hi there"
  - Explanation: Porque aunque esté definido antes la llamada a la función que la función, se hace hoisting y se verifica que está despues


4. Challenge 4:
  - Answer: TypeError: Assignment to constant variable.
  - Explanation: Porque a pesar de estar intentando cambiar una propiedad dentro de un objeto el cual no existe. Lo principal creo que es que es una constante y se está intentando modificar. Pues no, resulta que se puede modificar añadiendo una propiedad, no me había dado cuenta que estaba definiendo la b como un objeto.


5. Bonus - Challenge 5:
  - Answer: { name: "Bob", age: 30 } and { name: "Ada", age: 20 }
  - Explanation: No está modificando el rabbit 1, sino que está devolviendo un nuevo rabbit que está definido como el rabbit 2. No sé por qué le cambia la edad al primer rabbit
