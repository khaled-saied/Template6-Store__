
let addpro = document.getElementById('addpro');
let products = document.getElementById('products');


/////////////// Function On cLick

//addpro
addpro.onclick= function(){
    if(localStorage.getItem('username')){
        window.location='addproduct.html';
    }else{
        window.location='login.html'
    }
}

//Show Function

function DrawUI(){
    let allProduct= JSON.parse(localStorage.getItem("product"));
    
    let product;
    if(localStorage.getItem('product')){
        product += allProduct.map( item => {  
            return `
                <div class="item" style="border : ${item.isMe === "Yes" ? "2px solid green" : ''}">
                    <img src=${item.image} alt="photo!!">
                    <div class="layer-content">
                    <div class="layer-info">
                        <span class="category">category:</span>
                        <h3 class="layer-content-title">${item.category}</h3>
                        <span class="category">price:</span>
                        <h3 class="layer-content-title">${item.price}</h3>
                        <a href="#"><i class="fa-solid fa-dollar-sign"></i></a>
                        <a href="#"><i class="fa-solid fa-dollar-sign"></i></a>
                    </div>
                    </div>
                    <div class="text">
                        <div class="id">
                            <h3>ID:</h3>
                            <h5>${item.id}</h5>
                        </div>
                        <div class="title">
                            <h3>Tiltle:</h3>
                            <h5>${item.title}</h5>
                        </div>
                        <div class="disc">
                            <h3>Desc:</h3>
                            <h5>
                                <a onclick="Details(${item.id})" class="moreinfo" >Show More Details</a>
                            </h5>
                        </div>
                        <div class="size">
                            <h3>Size:</h3>
                            <h5>${item.select}</h5>
                        </div>
                    </div>
        
                    ${item.isMe === "Yes" && 
                    `<div class="item-btn">
                        <a onclick="update(${item.id})" class="update" id="update" >Update</a>
                    </div>
                ` }
                </div>
                `
        })
    }else{
        // products.innerHTML=`<div> There is no added products </div>`
    }

    products.innerHTML +=product;
}
DrawUI();

///update
function update(id){
    localStorage.setItem('editProduct', id);
    
    window.location = 'update.html';
}

//deleteProduct
function deleteProduct(ID){
    // console.log(ID);
    let products = JSON.parse(localStorage.getItem('product')) || dataOfProduct;
    // console.log(products);
    let getProduct = products.find( i => String(i.id) !== ID);
    console.log(getProduct);
}


//Details
function Details(id){
    localStorage.setItem('moredetails', id);
    
    window.location = 'moredetails.html';
}