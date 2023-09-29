
let signin = document.getElementById('signin');
let signup = document.getElementById('signup');
let logout = document.getElementById('logout');
let favourote = document.getElementById('favourote');
let myproduct = document.getElementById('myproduct');
let icon = document.getElementById('icon');
let darkmode = document.getElementById('darkmode');
let body = document.querySelector("body");
let header = document.querySelector("nav");

let mode= 'dark';

//darkmode
darkmode.onclick = function DarkMode(){
    // darkmode='dark';
    if(mode === 'dark'){
        body.style.backgroundColor='#272829';
        // body.style.backgroundColor='#0C356A'
        // body.style.backgroundColor='#61677A'
        header.style.background='#3c3d3d'
        darkmode.innerHTML= `<i class="fa-solid fa-sun"></i>`
        mode = 'sun';
    }else{
        body.style.backgroundColor='#fff';
        header.style.background='#123'
        darkmode.innerHTML= `<i class="fa-solid fa-moon fa-xl"></i>`;
        mode = 'dark';
    }
}


////////navBar
function Nav(){
    if(localStorage.getItem('username')){
        signin.style.display='none';
        signup.style.display='none';
        logout.style.display='inline-block';

        logout.onclick= function(){
            localStorage.clear();
            window.location='register.html';
        }
    }
    else{
        signin.style.display='inline-block';
        signup.style.display='inline-block';
        logout.style.display='none';
        // favourote.style.display='none';
        // myproduct.style.display='none';
        icon.style.display='none';
    }
}
Nav();
