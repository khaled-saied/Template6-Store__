
//Variables

let useremail = document.getElementById("useremail");
let userpassword = document.getElementById("userpassword");
let submit= document.getElementById("submit");

let email= localStorage.getItem('email');
let password= localStorage.getItem('password');

//Event
submit.addEventListener('click', login);

//function

function login(e){
    e.preventDefault();
    
    if(useremail.value ==='' || userpassword===''){
        alert("Please Fill Data");
    }else{
        if(useremail.value=== email && userpassword.value===password){
            setTimeout(()=> {
                window.location="index.html";
            },1500)
        }
        else{
            alert("Email Or Password Is Wrong")
        }
    }
}