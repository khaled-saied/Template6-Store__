

// let infoitemDom = document.getElementById('info-item');

// function DrawMoreInfo(){
//     let item  = JSON.parse(localStorage.getItem('moredetails'));
//     let allItems = JSON.parse(localStorage.getItem('product'));
//     let getProduct = allItems.find( (i) => i.id === String(item));
    

//     let info = getProduct.map(item => console.log(item)); 
// }

// DrawMoreInfo();

let infoitemDom = document.getElementById('info-item');

function DrawMoreInfo() {
    let item = JSON.parse(localStorage.getItem('moredetails'));
    let allItems = JSON.parse(localStorage.getItem('product'));
    let getProduct = allItems.find(i => i.id === String(item));
    console.log(getProduct);
    if (getProduct !== undefined) {
        infoitemDom.innerHTML = `

        <div class="info-item" id="info-item">
            <div class="image">
                <img src=${getProduct.image} alt="photo!!">
            </div>
            <div class="text">
                <div class="id">
                    <h3>ID:</h3>
                    <h5>${getProduct.id} </h5>
                </div>
                <div class="title">
                    <h3>Tiltle:</h3>
                    <h5>${getProduct.title} </h5>
                </div>
                <div class="disc">
                    <h3>Desc:</h3>
                    <h5>
                        ${getProduct.des } 
                    </h5>
                </div>
                <div class="size">
                    <h3>Size:</h3>
                    <h5>${getProduct.size} </h5>
                </div>
                <div class="size">
                        <h3>Category:</h3>
                        <h5>${getProduct.category} </h5>
                    </div>
                    <div class="size">
                        <h3>Price:</h3>
                        <h5>${getProduct.price} </h5>
                    </div>
            </div>
        </div>>
        `;
    } else {
        // Handle the case where the product is not found
    }
}

DrawMoreInfo();
