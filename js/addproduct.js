

//Variables

let title = document.getElementById('title');
let imageFile = document.getElementById('image');
let price = document.getElementById('price');
let category = document.getElementById('category');
let select = document.getElementById('select');
let des = document.getElementById('des');
let submit = document.getElementById('submit');
let id = document.getElementById('id');



//events

submit.addEventListener('click', addProduct);
imageFile.addEventListener('change', uploadImage);

//functions

let dataPro=[];
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product);
}else{
    dataPro= [];
}


function addProduct(e) {
    
    e.preventDefault();
        if(title.value ==='' || price.value ==='' || category.value ==='' || select.value ==='' || des.value === '' ||id.value==='' ){
            alert("Please Fill Data");
        }else{
            let newdata={
                id : id.value,
                title : title.value,
                price : price.value,
                category : category.value,
                select : select.value,
                image : productImage,
                des : des.value,
                isMe : "Yes"
            }
            dataPro.push(newdata);
            
            //save to local storage
            localStorage.setItem("product" , JSON.stringify(dataPro));
        
        
            time();
        }
}

// Timeout
function time(){
    setTimeout( () => {
        window.location= "index.html";
    }, 1500);
}

//uploadImage
let productImage ;
function uploadImage(){
    let file = this.files[0];
    
    console.log(file);

    let types = ["image/jpeg" , "image/png" ]
    if(types.indexOf(file.type) ==-1 ){
        alert('Type of Image is not supported');
        return ;
    }
    if(file.size > 2* 1024 * 1024){
        alert('Image Size not Exceeded 2MG');
        return
    }
    getImagePase64(file);
    // productImage = URL.createObjectURL(file);

}

function getImagePase64(file){
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = function(){
        productImage=reader.result
    }
    reader.onerror = function(){
        alert('Error !!');
    }
}














