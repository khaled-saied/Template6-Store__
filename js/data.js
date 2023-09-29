
dataOfProducts = [
    {
        id: 1,
        title: "Camera",
        image: "images/work5.jpg",
        desc: "The camera in the image X",
        size: "medium" ,
        category: "camera",
        price: 1000
    },
    {
        id: 2,
        title: "Camera",
        image: "images/work6.jpg",
        desc: "The camera in the image X",
        size: "large",
        category: "camera",
        price : 3000
    }
]

let productsDom = document.getElementById('products');

function DrawProductUI(){
    let productUI = dataOfProducts.map((item) => {
        return `
        <div class="item">
            <img src="${item.image}" alt="photo!!">
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
                        <a href="moredetails.html" onclick="Details(${item.id})" class="moreinfo" >Show More Details</a>
                    </h5>
                </div>
                <div class="size">
                    <h3>Size:</h3>
                    <h5>${item.size}</h5>
                </div>
            </div>
        </div>
        `;
    });
    // localStorage.setItem('product' , JSON.stringify(dataOfProducts));
    productsDom.innerHTML = productUI;
}

DrawProductUI();