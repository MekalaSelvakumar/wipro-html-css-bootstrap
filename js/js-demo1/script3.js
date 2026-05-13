let arr1=[];
console.log(typeof(arr1));
console.log(arr1 instanceof Array);
console.log(arr1.length);
let arr2=[10,20,30,40];
console.log(arr2.length);
console.log(arr2[0]);
let arr=[10,"Hello",true,20.5];
console.log(arr.length);
console.log(arr[0]);
console.log(' for loop ')
//for loop
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log('-- for of -- loop')
//for of loop
for(let element of arr){
    console.log(element);
}
console.log('-- for each -- loop')
// for each loop
arr.forEach(function(element){
    console.log(element);
});

arr.forEach((element)=>{     console.log(element); });
console.log('-----------new Array with values-----------');
let array1= new Array(10,20,30);
console.log(array1.length);
console.log(array1[0]);
console.log('-----------new Array with size-----------');
let array2=new Array(5); // declare array with size 5
console.log(array2.length); // size is 5
console.log(array2[0]);  //undefined
console.log('-----------new Array with size and fill-----------');
let array3=new Array(5).fill(0);
console.log(array3.length);
 array3.forEach((element)=>{
    console.log(element);
 });

 let array4=Array.of(10,20,30);
    console.log(array4.length);
let array5=Array.from('Hello');
console.log(array5.length);
let array6 = Array.of(10);  //declare array with single element 10
console.log(array6.length);
console.log('Before Push' + array4);
array4.push(40); //push add the element at the end of the array
console.log("After push :"+array4);
let poppedElement = array4.pop(); //pop removes the last element from the array and returns it
 console.log("Popped Element: " + poppedElement); //40
 console.log("After pop: " + array4); // [10,20,30  ]
 //add element in the beginning of the array
 array4.unshift(5);
 console.log("After unshift: " + array4); // [5,10,20,30]
//remove element from the beginning of the array
let shiftedElement = array4.shift(); //shift removes the first element from the array and returns it
console.log("Shifted Element: " + shiftedElement); //5
console.log("After shift: " + array4); // [10,20,30]