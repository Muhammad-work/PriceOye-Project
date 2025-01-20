const container = document.querySelector("#container");

let product = JSON.parse(localStorage.getItem("product")) || null;

const printDynamicCard = () => {
    if (!product) return;

    container.innerHTML = `
        <div class="w-full h-full bg-white flex justify-center p-6 gap-5">
          <div class="w-[50%] h-full">
            <img class="w-[60%] block m-auto" src="${product.image}" alt="">
          </div>
          <div class="w-[50%] px-3">
              <div>
                  <h1 class="text-xl">${product.title}</h1>
                  <p class="mt-2 text-xl">Category: ${product.category}</p>
                  <p class="mt-2 text-xl">Price: $${product.price}</p>
                  <p class="mt-2 text-xl">Description</p>
                  <p class="mt-2 text-xl">${product.description}</p>

                  <div class="border-2 border-black-800 inline-block px-3 mt-4">
                      <button class="text-xl me-3" onclick="changeQuantity(${product.id}, 'decrease')">-</button>
                      <span class="text-xl" id="quantity-${product.id}">${product.quantity || 1}</span>
                      <button class="text-xl ms-3" onclick="changeQuantity(${product.id}, 'increase')">+</button>
                  </div>

                  <button class="block mt-4 text-center bg-blue-500 w-full py-2 rounded text-xl text-white" onclick="addToCart(${product.id})">
                      Add To Cart
                  </button>
              </div>
          </div>
       </div>`;
}
printDynamicCard();

const changeQuantity = (productId, action) => {
    if (!product || product.id !== productId) {
        console.log("Product not found!");
        return;
    }

    let quantity = product.quantity || 1;

    if (action === "increase") {
        quantity++;
    } else if (action === "decrease" && quantity > 1) {
        quantity--;
    }

    product.quantity = quantity;
    localStorage.setItem("product", JSON.stringify(product));
    printDynamicCard();
};

const addToCart = (productId) => {
    if (!product || product.id !== productId) {
        console.log("Product not found!");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) {
        cart.splice(existingProductIndex, 1);
        alert('Product exists')
    }else{
 cart.push(product);

 localStorage.setItem("cart", JSON.stringify(cart));

 alert("Product added to cart successfully!");
    }

   
};
let cartcount = document.querySelector('.cart-count');

 let cart = JSON.parse(localStorage.getItem("cart")) || [];
 
 let totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
 
 cartcount.innerText = totalQuantity;