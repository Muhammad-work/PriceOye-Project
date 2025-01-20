let button = document.querySelector('.bar');
let sideBar = document.querySelector('.sidebar');
let icon = document.getElementById("close");
button.addEventListener('click', () => {
    sideBar.style.transform = `translateX(0%)`
    sideBar.style.color = "white";
});
icon.addEventListener("click",()=>{
    sideBar.style.transform = `translateX(-100%)`;
})
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let slider = document.querySelector(".slider");
let images = document.querySelectorAll(".image")
let slidenumber = 1;
right.addEventListener("click", () => {
    if (slidenumber < images.length) {
        slider.style.transform = `translateX(-${slidenumber * 100}%)`
        slidenumber++;

    } else {
        slider.style.transform = `translateX(-${slidenumber * 0}%)`
        slidenumber = 1;
    }
})
left.addEventListener("click", function () {
    if(slidenumber > 1){
        slider.style.transform = `translateX(-${(slidenumber-2)*100}%)`;
        slidenumber--;
    }else{
        slider.style.transform = `translateX(-${(images.length - 1) *100}%)`
        slidenumber = images.length;
        
    }
})


async function getFakeStoreApi() {
    let FakeStoreApi = await fetch('https://fakestoreapi.com/products');
    let response = await FakeStoreApi.json();
    let first = response.slice(1, 9);
    let scound = response.slice(10,14);
    let threee = response.slice(11,19);
    let forth = response.slice(6,14);
    getUserCountProducts(first);
    getNewItemsInApi(scound);
    getnewproduct(threee);
    product(forth);
    return response;
}
getFakeStoreApi();

 const getUserCountProducts = (items) => {
      let Containercardsrow = document.querySelector('.cardsrow');
      items.map((product)=>{
         Containercardsrow.innerHTML +=   
         `<div class="card1" onclick='storeProductToLocalstorage(${product.id})'>
         <img src="${product.image}" alt="" style='width:50%'>
         <h4>${product.title}</h4>
         <div class="rate">

             <div class="price">

                 <h3>Rs. ${product.price}</h3>
             </div>
             <div class="endline">
                 <p class="redline">Rs.2,499</p>
                 <span class="off">64%off</span>
             </div>
         </div>
       </div>`;
      })
 }

 const getNewItemsInApi = (items) => {
      let grid = document.querySelector('.grid');
      items.map((product)=>{
        let title = product.title.slice(0,13);
        grid.innerHTML +=   
         ` <div class="card" onclick='storeProductToLocalstorage(${product.id})'>
                    <div class="imagetext">
                        <h4>${title}</h4>
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="end-grid">
                        <h4 class="grid1">Rs${product.price}</h4>
                        <div class="redoff-1">
                            <p class="redline">Rs.120,000</p>
                            <span class="offprblm">19%Off</span>
                        </div>
                    </div>
                </div>`;
      })
 }

 const getnewproduct = (items) => {
      let grid = document.querySelector('.watchcardsrow');
      items.map((product)=>{
        grid.innerHTML +=   
         ` <div class="cardwatch" onclick='storeProductToLocalstorage(${product.id})'>
                    <img src="${product.image}" alt="" style='width:40%'>
                    <h4>${product.title}</h4>
                    <div class="rate2">

                        <div class="price">

                            <h3>Rs.${product.price}</h3>
                        </div>
                        <div class="endline2">
                            <p class="redline">Rs.29,999</p>
                            <span class="off">60%off</span>
                        </div>
                    </div>

                </div>`;
      })
 }

 const product = (items) => {
      let grid = document.querySelector('.mobile');
      items.map((product)=>{
        grid.innerHTML +=   
         `  <div class="cardwatch" onclick='storeProductToLocalstorage(${product.id})'>
                    <img src="${product.image}" alt="" style='width:40%'>
                    <h4>${product.title}</h4>
                    <div class="rate2">

                        <div class="price">

                            <h3>Rs. ${product.price}</h3>
                        </div>
                        <div class="endline2">
                            <p class="redline">Rs.29,999</p>
                            <span class="off">60%off</span>
                        </div>
                    </div>

                </div>`;
      })
 }


 const storeProductToLocalstorage = (id) => {
    getFakeStoreApi().then(response => {
       localStorage.setItem(`product`, JSON.stringify(response[id - 1]));
       window.location = 'product.html';
    });
 }

 let cartcount = document.querySelector('.cart-count');

 let cart = JSON.parse(localStorage.getItem("cart")) || [];
 
 let totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
 
 cartcount.innerText = totalQuantity;
 