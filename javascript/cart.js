let cartcount = document.querySelector('.cart-count');
let tbody = document.querySelector('#cart-items');

 let cart = JSON.parse(localStorage.getItem("cart")) || [];
 
 let totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
 
 cartcount.innerText = totalQuantity;


 const cartItem = () =>{
    cart.forEach((item)=>{
        tbody.innerHTML += `
               <th class="border border-gray-300 px-4 py-2"><img src="${item.image}" alt="" style="width: 40px;"></th>
            <th class="border border-gray-300 px-4 py-2">${item.price}</th>
            <th class="border border-gray-300 px-4 py-2">${item.quantity}</th>
            <th class="border border-gray-300 px-4 py-2">${item.price * item.quantity}</th>
            <th class="border border-gray-300 px-4 py-2"><button onclick='deleteItem(${item.id})'>Delete</button></th>`;
    });
 }

 cartItem();

 const deleteItem = (id) =>{
    if (id) {
     cart = cart.filter(item => item.id !== id);
     localStorage.setItem("cart", JSON.stringify(cart));
     alert('product Deleted Successfuly!')
     location.reload();
    }
 }