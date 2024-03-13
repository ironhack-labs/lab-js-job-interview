let dog = "whof";
const owner = "Someone";

if (2 === 2) {
  console.log("our global variables", dog, owner);
}

const getFood = () => {
  const food = "salmon";
  return food;
};

if (5 > 2) {
  let blockVariable = "this is not going to work";
}

var country = "Italy";

var language = "English";


const add = () => {
  console.log("add function");
  return 4;
};

let num = 10;
let num2 = num;


let user;

const h1Element = document.getElementById("heading");
let time = 0;


const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const timeElement = document.getElementById("time");
let intervalId;
startBtn.addEventListener("click", () => {
  console.log("start button clicked");
  intervalId = setInterval(() => {
    time += 1;

    timeElement.innerText = time;
  }, 1000);
});
stopBtn.addEventListener("click", () => {
  console.log("stop button clicked");
  clearInterval(intervalId);
  time = 0;

  timeElement.innerText = time;
});
