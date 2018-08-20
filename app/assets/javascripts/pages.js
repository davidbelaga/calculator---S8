let inputs = [""];
let totalString;
let operators1 = ["+", "-", "*", "/", "%"];
let operators2 = ["."];
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let values = document.querySelectorAll("a");
let steps = document.getElementById("steps");

steps.textContent = "0";

function getValue(input) {
   if (operators2.includes(inputs[inputs.length - 1] === true && input === ".")) {

   } else if (inputs.lenght === 1 && operators1.includes(input) === false) {
      inputs.push(input);

   } else if (operators1.includes(inputs[inputs.length - 1]) === false) {
      inputs.push(input);

   } else if (nums.includes(Number(input))) {
      inputs.push(input);
   }
   update();
}

function update() {
   totalString = inputs.join("");
   steps.innerHTML = totalString;
   if (totalString.length >= 12) {
      alert("No more digits are allowed");
      inputs = [""];
   }
}

function getTotal() {
   totalString = inputs.join("");
   steps.innerHTML = eval(totalString);
}

function square(i) {
   var a = Math.pow(i, 2);
   steps.innerHTML = eval(a);
}

function squrRoot(val) {
   var result = Math.sqrt(val);
   steps.innerHTML = eval(result);
}


values.forEach(val => val.addEventListener("click", getResults));

function getResults() {
   if (this.id === "deleteAll") {
      inputs = [""];
      update();
      steps.textContent = "0";

   } else if (this.id === "backOne") {
      inputs.pop();
      update();

   } else if (this.id === "total") {
      getTotal();
   } else if (this.id === "x2") {
      square(totalString);
   } else if (this.id == '√') {
      squrRoot(totalString);
   } else {
      if (inputs[inputs.length - 1].indexOf("+", "-", "/", "*", "%") === -1) {
         getValue(this.id);
      } else {
         getValue(this.id);
      }
   }
}
console.log(‘pages.js is loaded’)
