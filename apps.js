// alert("System Connected");


// let A = "Joe";
// let B = "Smith";
// let C = ["Blue", "Bird"];
//
//
// function writeName(firstName, lastName) {
//   return firstName + " " + lastName;
// }
//
//
// console.log(writeName(A, B));
// console.log(writeName("Fred", "Dexter"));
// console.log(writeName(C[0], C[1]));


let value1 = document.getElementById('num1');
let value2 = document.getElementById('num2');
let result = document.getElementById('result');
let calc = document.getElementById('calculate');

calc.addEventListener('click', sum);

function sum() {
  result.value = parseFloat(value1.value) + parseFloat(value2.value);
}
