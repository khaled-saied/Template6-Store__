
// variables

let username= document.getElementById('username');
let useremail = document.getElementById('useremail');
let userpassword = document.getElementById('userpassword');
let submit = document.getElementById('submit');

// console.log(username.value);

submit.addEventListener('click', register);

function register(e){
    e.preventDefault()  // بوقف التحميل بتاع الصفحه 
    if(username.value==="" || useremail.value==="" || userpassword.value===""){
        alert("Please Fill Data")
    }
    else{

        localStorage.setItem("username", username.value)
        localStorage.setItem("email", useremail.value)
        localStorage.setItem("password", userpassword.value)

        setTimeout( ()=> {   //كدا هيعد ثانيه ونص وبعد كدا للصفحه الرئيسيه
            window.location="login.html";
        },1500)
    }
}



