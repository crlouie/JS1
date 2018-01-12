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

let value1 = document.getElementById('bt1');
value1.addEventListener('click', add(1));

let value2 = document.getElementById('bt2');
value2.addEventListener('click', add(2));

let value3 = document.getElementById('bt3');
value3.addEventListener('click', add(3));

let value4 = document.getElementById('bt4');
value4.addEventListener('click', add(4));

let value5 = document.getElementById('bt5');
value5.addEventListener('click', add(5));

let value6 = document.getElementById('bt6');
value6.addEventListener('click', add(6));

let value7 = document.getElementById('bt7');
value7.addEventListener('click', add(7));

let value8 = document.getElementById('bt8');
value8.addEventListener('click', add(8));

let value9 = document.getElementById('bt9');
value9.addEventListener('click', add(9));

let value0 = document.getElementById('bt0');
value0.addEventListener('click', add(0));

let clear = document.getElementById('btC');
clear.addEventListener('click', Clear);

function Clear() {
 result.value = "";
}


function storeFirstValue() {
  firstValue = parseInt(result.value);
  result.value = "";



let plus = document.getElementById('bt+');
plus.addEventListener('click', addition);
}

function addition() {
 storeFirstValue();
 operation = "+";
}

let minus = document.getElementById('bt-');
minus.addEventListener('click', subtraction);

function subtraction() {
 storeFirstValue();
 operation = "-";
}

let divide = document.getElementById('bt/');
divide.addEventListener('click', division);

function division() {
 storeFirstValue();
 operation = "/";
}

let multiply = document.getElementById('bt*');
multiply.addEventListener('click', multiplication);

function multiplication() {
 storeFirstValue();
 operation = "*";
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
