let array=[10,20,30,40,99,23,34,22,11];
array.reverse(); //reverse the array
console.log(array);
array.sort(); //sorts the array in ascending order
console.log(array);
array.sort((a,b)=>b-a); //sorts the array in descending order
console.log(array);

console.log(array.filter((element)=> element > 20).forEach((element)=> console.log(element))) ;

console.log('Elements above 20: -filter');
let filteredArray = array.filter((element)=> element > 20); //filter the array and return a new array with elements greater than 20
console.log(filteredArray);

let arrayNum=[10,20,30,40,99,23,34,22,11];

let array1=arrayNum.map((element)=> element * 2); //map the array and return a new array with elements multiplied by 2
console.log(arrayNum);
console.log(array1);

  let sum=arrayNum.reduce((accumulator,currentValue)=> accumulator + currentValue,0); //reduce the array and return the sum of all elements
console.log(sum);

  let evenNumbers=arrayNum.filter(element=>element%2!=0).map(element=>element*2); //filter the array and return a new array with even elements
  console.log(evenNumbers);