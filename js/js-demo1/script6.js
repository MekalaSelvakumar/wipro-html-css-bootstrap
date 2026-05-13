// var  para =document.getElementsByTagName("p")[0]; 
// console.log(para);
//  console.log(para.innerText);
//  // innerText will give the text content of the element without any html tags.
//  console.log(para.innerHTML);
 // innerHTML will give the text content of the element with html tags.
 //if the content contain some html tags then innerText will ignore the html tags and give only text content
 //  but innerHTML will give the text content with html tags.

 document.addEventListener("DOMContentLoaded", function(){
    var para =document.getElementsByTagName("p")[0];
    console.log(para);
     console.log(para.innerText);
     console.log(para.innerHTML);
    var btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", function(){
            console.log("Button Clicked with Event Handler");
            alert("Button Clicked with Event Handler");
    });
 });

 function handleClick(){
    console.log("Button Clicked");
    alert("Button Clicked");
    // instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.
 
    var para =document.getElementsByTagName("p")[1].innerText;
    alert(para);
}

function handleMouseEnter(){
    let p3 = document.getElementById("p3");
    p3.style.backgroundColor = "yellow";
    p3.style.color = "red";
    p3.style.fontSize = "20px";
    p3.style.border = "2px solid green";
    p3.style.padding = "10px";
}

function handleMouseLeave(){
    let p3 = document.getElementById("p3");
    p3.style.backgroundColor = "white";
    p3.style.color = "black";
    p3.style.fontSize = "16px";
    p3.style.border = "none";
}
function handleClick3(){
    let div1 = document.getElementById("div1");
    div1.style.backgroundColor = "lightblue";
    div1.style.border = "2px solid blue";
    div1.innerHTML = "<h2> This is a heading inside div </h2>    <p> This is a paragraph inside div </p>";
    // innerHTML will replace the existing content of the element with the new content.
    // if we want to add new content without replacing the existing content then we can use += operator.
    // div1.innerHTML += "<h2> This is a heading inside div </h2> <p> This is a paragraph inside div </p>";
    let div2 = document.getElementById("div2");
    div2.style.backgroundColor = "lightgreen";
    div2.style.border = "2px solid green";
    div2.innerText = "<h2> This is a heading inside div </h2>    <p> This is a paragraph inside div </p>";
   //HTML tags - considered as text content and will not be rendered as HTML elements.
}