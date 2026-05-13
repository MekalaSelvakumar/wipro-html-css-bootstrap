console.log('Hello World - From External JS');
let a = 10;
let b = 20;
let c = a + b;
console.log('The sum of a and b is: ' + c);
function add( num1,num2){
    return num1 + num2;
}
console.log('The sum of 100 and 200 is: ' + add(100,200));

let value1=100;
console.log(typeof(value1));
let value2="100";
console.log(typeof(value2));
let result=true;
console.log(typeof(result));
let value3;
console.log(typeof(value3));

let operand1=500;
console.log(operand1);
console.log("typeof operand1 is  " + typeof(operand1));
operand1="Hello";
console.log(operand1);
console.log("typeof operand1 is  " + typeof(operand1));

x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
