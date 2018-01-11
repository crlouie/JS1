// alert("System Connected");

/*let B = "Smith";
let C = ["Blue", "Bird"];


function writeName(firstName, lastName) {
  return firstName + " " + lastName;
}


console.log(writeName(A, B));
console.log(writeName("Fred", "Dexter"));
console.log(writeName(C[0], C[1]));*/

let result = document.getElementById('display');



let value1 = document.getElementById('bt1');
value1.addEventListener('click', add1);

function add1() {
  result.value += 1;
}

let value2 = document.getElementById('bt2');
value2.addEventListener('click', add2);

function add2() {
  result.value += 2;
}

let value3 = document.getElementById('bt3');
value3.addEventListener('click', add3);

function add3() {
  result.value += 3;
}

let value4 = document.getElementById('bt4');
value4.addEventListener('click', add4);

function add4() {
  result.value += 4;
}

let value5 = document.getElementById('bt5');
value5.addEventListener('click', add5);

function add5() {
  result.value += 5;
}

let value6 = document.getElementById('bt6');
value6.addEventListener('click', add6);

function add6() {
  result.value += 6;
}

let value7 = document.getElementById('bt7');
value7.addEventListener('click', add7);

function add7() {
  result.value += 7;
}

let value8 = document.getElementById('bt8');
value8.addEventListener('click', add8);

function add8() {
  result.value += 8;
}

let value9 = document.getElementById('bt9');
value9.addEventListener('click', add9);

function add9() {
  result.value += 9;
}

let value0 = document.getElementById('bt0');
value0.addEventListener('click', add0);

function add0() {
  result.value += 0;
}

let clear = document.getElementById('btC');
clear.addEventListener('click', Clear);

function Clear() {
  result.value = "";
}

let plus = document.getElementById('bt+');
plus.addEventListener('click', addition);

function addition() {
  result.value += "+";
}

let minus = document.getElementById('bt-');
minus.addEventListener('click', subtraction);

function subtraction() {
  result.value += "-";
}

let divide = document.getElementById('bt/');
divide.addEventListener('click', division);

function division() {
  result.value += "/";
}

let multiply = document.getElementById('bt*');
multiply.addEventListener('click', multiplication);

function multiplication() {
  result.value += "*";
}

let decimal = document.getElementById('btD');
decimal.addEventListener('click',decimalPlace);

function decimalPlace() {
  result.value += ".";
}

let calculate = document.getElementById('btA');
calculate.addEventListener('click', mathWork);

function mathWork(){
  console.log(result.value)

}

// let value1 = document.getElementById('num1');
// let value2 = document.getElementById('num2');
// let result = document.getElementById('result');
// let calc = document.getElementById('calculate');
//
// calc.addEventListener('click', sum);
//
// function sum() {
//   result.value = parseFloat(value1.value) + parseFloat(value2.value);
// }
