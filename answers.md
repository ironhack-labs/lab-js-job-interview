1. Challenge 1:
  - Answer: b) "xyz" and "xyz"
  - Explanation: el primer console.lo está dentro de la funcion y después de reasignar el valor de foo. El segundo console está después de la función y ya esta el valor cambiado


2. Challenge 2:
  - Answer: c - 10,1
  - Explanation: al pasar parametros las variables se modifican direferente?


3. Challenge 3:
  - Answer: c "hi there"
  - Explanation: Hoisting de funciones


4. Challenge 4:
  - Answer: c num: 90
  - Explanation: Es la misma referencia (mismo cajón como diria Jorge)


5. Bonus - Challenge 5:
  - Answer: c
  - Explanation:
function magicHat(obj) {
  obj.age = 10;//edad del objeto parametro ahora es 10
  obj = { name: "Ada", age: 20 };//propiedades del obj nuevo
  return obj; //devuelve el objeto nuevo
}
  
const rabbit1 = { name: "Bob", age: 30 };//constante rabbit 1 con parametros bob y 30
  
const rabbit2 = magicHat(rabbit1);//constante rabbit 2 con lo que le devuelve la funcion magicHat
  
console.log("rabbit1: ", rabbit1);//deberia ser bob 10 (el 10 lo cambia en la funcion)
console.log("rabbit2: ", rabbit2);//deberia ser ada 20 se lo asigna en la funcion
