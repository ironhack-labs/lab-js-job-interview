//Challenge 5 | Two Rabbits and a Magic Hat 🐰 🐇 🎩

function magicHat(obj) {
  obj.age = 10; //modifies the age property of the object
  obj = { name: "Ada", age: 20 }; //local new object
  return obj;
}
  
const rabbit1 = { name: "Bob", age: 30 };
  
//const rabbit2 = magicHat(rabbit1);
  
console.log("rabbit1: ", rabbit1);
//console.log("rabbit2: ", rabbit2); 
//the new obj that assigned