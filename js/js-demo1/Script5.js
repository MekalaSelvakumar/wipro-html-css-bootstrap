let today=Date.now();
// The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.


console.log(`Today: ${today}`);
let d1 = new Date();
console.log(`Date Object: ${d1}`);
let d2= new Date(2024,5,10); // month is 0-based index
console.log(`Date Object with specific date: ${d2}`);
let d3 = new Date("2024-06-10");
console.log(`Date Object with date string: ${d3}`);

console.log(`Year: ${d1.getFullYear()}`);
console.log(`Month: ${d1.getMonth()}`);
console.log(`Date: ${d1.getDate()}`);
console.log(`Hours: ${d1.getHours()}`);
console.log(`Minutes: ${d1.getMinutes()}`);
console.log(`Seconds: ${d1.getSeconds()}`);
console.log(`Milliseconds: ${d1.getMilliseconds()}`);

d1.setDate(15);
console.log(`Updated Date: ${d1}`);

d1.setFullYear(2025);
console.log(`Updated Year: ${d1}`);

console.log(' Math Object');
console.log(`Value of Pi: ${Math.PI}`);
console.log(`Square root of 16: ${Math.sqrt(16)}`);
console.log(`Absolute value of -5: ${Math.abs(-5)}`);
console.log(`Random number between 0 and 1: ${Math.random()}`);

 let v1 = parseInt("10");
 console.log(`Parsed Integer: ${v1}`);
 v2 = parseFloat("3.14");
 console.log(`Parsed Float: ${v2}`);
