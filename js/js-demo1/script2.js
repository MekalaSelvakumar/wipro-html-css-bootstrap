// console.log(x);
// let x;
// console.log(x);
// x=100;
// console.log(x);

function add(num1,num2){
    return num1 + num2;
}
console.log(add(10,20));
//function expression
//vaiable = anonymous function 
let add1 = function(num1,num2){
    return num1 + num2;
};

console.log(add1(10,20));
//arrow function
let add2 =(num1,num2)=>{
    return num1 + num2;
}
console.log(add2(10,20));

//passing function as an argument to another function
function sayHello(){
    console.log('sayHello function is called');
    console.log("Hello, World!");
}

function execute(fn){
    console.log("Executing the function...");
     fn();
     console.log("Function execution completed.");
}
execute(sayHello);


// function returned from another function

function outer(){
    console.log("Outer function is called");
    return function(){
        console.log("Inner function is called");
    }
}
let innerFunction = outer();
innerFunction();

var a;
console.log(typeof(a));
console.log(a+10);
 //hoisting - variable and function declarations are moved to the top
 //  of their scope during the compilation phase

function  first(){
console.log(x);
var x;
console.log(x);
x=100;
console.log(x);
}
first();

function addTwo(num1,num2){
    let result = num1 + num2;
    console.log("The sum of " + num1 + " and " + num2 + " is: " + result);
    console.log(`The sum of ${num1} and ${num2} is: ${result}   ${num1 + num2}`);
}
addTwo(10,20);
console.log("string text line 1\nstring text line 2");
// "string text line 1
// string text line 2"

console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
