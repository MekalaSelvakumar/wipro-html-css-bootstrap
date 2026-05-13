// function first(){
//     console.log("first function")
//     second();
//     console.log("end of first function")
// }
// function second(){
//     console.log("second funcion")
//     thrid();
//     console.log("end of second function")
// }
// function thrid(){
//     console.log("third function")
// }
// first();


fetch("https://jsonplaceholder.typicode.com/users")
.then( response => response.json())
.then(data =>{
    console.log(data);
    let div1 =document.getElementById("div1");
    let text="<ul>";
    data.forEach(element => {
        text+="<li> "+element.id+ " - " + element.name +" - " +element.username + " - " + 
        element.address.city+"-" +"</li>";
        
    });
    text+="</ul>";
    div1.innerHTML =text;
})
.catch( error =>{
    console.log(error)
})