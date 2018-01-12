// Calculator function from  with shortened code
let result = document.getElementById('display');
let firstValue;
let operation;
let isCalculated = false;

function add(value) {
  return function() {
   if(isCalculated) {
     isCalculated = false;
     result.value = "";
   }
   result.value += value;
  }
}

function createOperation(operator) {
  return function() {
    storeFirstValue();
    operation = operator;
  }
}

for(let i = 0; i < 10; i++) {
  document.getElementById('bt' + i).addEventListener('click', add(i));
}

document.getElementById('bt+')
  .addEventListener('click', createOperation("+"));

document.getElementById('bt-')
  .addEventListener('click', createOperation("-"));

document.getElementById('bt/')
  .addEventListener('click', createOperation("/"));

document.getElementById('bt*')
  .addEventListener('click', createOperation("*"));

let clear = document.getElementById('btC');
clear.addEventListener('click', Clear);

function Clear() {
 result.value = "";
}

function storeFirstValue() {
  firstValue = parseInt(result.value);
  result.value = "";
}

let calculate = document.getElementById('btA');
calculate.addEventListener('click', mathWork);

function mathWork(){
 if(operation === "+") {
   result.value = firstValue + parseInt(result.value);
 } else if (operation === "-") {
   result.value = firstValue - parseInt(result.value);
 } else if (operation === "*") {
   result.value = firstValue * parseInt(result.value);
 } else if (operation === "/") {
   result.value = firstValue / parseInt(result.value);
 }
 isCalculated = true;
}
