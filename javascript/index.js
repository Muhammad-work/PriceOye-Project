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