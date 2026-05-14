const URL="http://localhost:3000/customers";
function  getAllCustomer(){
    
     fetch(`${URL}`)
     .then( response=>{
        console.log(response);
        return response.json();
     })
     .then( customers=>{
        console.log(customers);
        let tbody =document.getElementById("cust-tab").getElementsByTagName("tbody")[0];
        let tbodyHTML="";
        customers.forEach(element => {
            tbodyHTML+=`<tr><td>${element.id} </td><td>${element.name} </td><td>${element.email}</td>
            <td> <button  onclick="deleteCustomer('${element.id}')"  class="delete-btn">
            <i class="fa-regular fa-trash-can fa-beat" style="color: rgb(74, 21, 227);"></i>
            Delete </button>
            <button  onclick="getCustomer('${element.id}')">Update</button>
            </td>
            </tr>
             `;
        });
        tbody.innerHTML=tbodyHTML
     })
     .catch(error=> {
        console.log(errpr)
     })
    
}
getAllCustomer();

function addCustomer(){
    let customername=document.querySelector("#custname").value;
    let custemail=document.querySelector("#custemail").value;
    let  newCustomer ={
        "name":customername,
        "email":custemail
    } 
    //  add customer - post method - it will be added to do.json
    fetch(`${URL}` , {
     "method":"POST",
     "body":JSON.stringify(newCustomer),
     "header":{
        "Content-Type":"application/json"
     }
    })
    .then(response =>{
       if ( response.status==201){
        console.log("Resource - Customer Created SUccessfully");
        alert("Customer Added Successfully");
         
        getAllCustomer();
       }
    })
    .catch(error=>{
        console.log(error)
    })
    
}

function deleteCustomer(id){
    console.log('Delete Customer with id ',id);
    fetch(`${URL}/${id}`,{
        "method" :"DELETE"
    })
    .then( response=>{
        if (response.status==200){
            alert(`Customer with id : ${id} deleted SUccessfully`)
            getAllCustomer();
        }
    })
}

function getCustomer(id){
    console.log(id);
    fetch(`${URL}/${id}`)
    .then(response=> {
        if(response.status==200){
            console.log('Customer details retrieved')
            return response.json();
        }
    })
    .then(customer =>{
        document.querySelector("#newcustname").value=customer.name;
        document.querySelector("#newcustemail").value=customer.email;
        document.querySelector("#custId").value=customer.id;
    })
    .catch(error=>console.log(error));
}

function updateCustomer(){
    let  newcustname=    document.querySelector("#newcustname").value;
    let newcustemail=    document.querySelector("#newcustemail").value; 
    let   newcustId=  document.querySelector("#custId").value; 
    let updatedCustomer ={
        "id":newcustId,
        "name":newcustname,
        "email":newcustemail
    }
    console.log(updatedCustomer);
    fetch(`${URL}/${newcustId}`,{
        "method":"PUT",
        "body":JSON.stringify(updatedCustomer),
        "headers":{
            "Content-Type":"application/json"
        }
    })
    .then(response =>{
        if (response.status==200){
            console.log('Customer updated Successfully');
            alert("Customer Updated SUccessfully")
            getAllCustomer();

        }
    })
    .catch(error=>console.log(error))
}
document.addEventListener("DOMContentLoaded" ,()=>{
    document.getElementById("add-form").addEventListener("submit" ,(event)=>{
        event.preventDefault();
         addCustomer();
         event.target.reset();
    })

    document.getElementById("update-form").addEventListener("submit" ,(event)=>{
        event.preventDefault();
         updateCustomer();
         event.target.reset();
    })
})