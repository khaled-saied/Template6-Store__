

let title = document.getElementById('title');
let image = document.getElementById('image');
let price = document.getElementById('price');
let category = document.getElementById('category');
let select = document.getElementById('select');
let des = document.getElementById('des');
let updatebtn = document.getElementById('updatebtn');
let idInput = document.getElementById('id');
console.log(idInput);

let productImage ;


//
let allPro = JSON.parse(localStorage.getItem('product')) || dataOfProduct;
let productId = JSON.parse(localStorage.getItem('editProduct'));

// console.log(productId);
let getProduct = allPro.find( (i) => i.id === String(productId));
console.log(getProduct);

title.value = getProduct.title;
idInput.value = getProduct.id;
des.value = getProduct.des;
select.value = getProduct.select;
price.value = getProduct.price;
category.value = getProduct.category;
productImage = getProduct.image;

updatebtn.addEventListener('click' , updatepro);
image.addEventListener('change', uploadImage);


function updatepro(e) {
    
    e.preventDefault();

    getProduct.title = title.value;
    getProduct.id = idInput.value;
    getProduct.des = des.value ;
    getProduct.select = select.value;
    getProduct.price = price.value;
    getProduct.category = category.value;
    getProduct.image = productImage;

    //save to local storage
    localStorage.setItem("product" , JSON.stringify(allPro));

    time();
        
}

// Timeout
function time(){
    setTimeout( () => {
        window.location= "index.html";
    }, 1500);
}
//let productImageInput;
//uploadImage

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




