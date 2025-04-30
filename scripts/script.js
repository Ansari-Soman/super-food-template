const header = document.querySelector(".primary-header");
const logo = document.querySelector(".logo");
const navItems = document.querySelector(".nav-items");
const search = document.querySelector(".search");
const cart = document.querySelector(".cart");
const burger = document.querySelector(".burger");
const burger_2 = document.querySelector(".burger-2");
const counter = document.querySelector(".item-counter");
const devider = document.querySelector(".devider");
// const home = document.querySelector('.home');

document.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("bg-white");
    navItems.classList.remove("text-white");
    counter.classList.add("bg-black", "text-white");
    counter.classList.remove("bg-white", "text-black");
    devider.classList.remove("text-white");

    cart.src = "images/SVG/cart-black.svg";
    search.src = "images/SVG/search-black.svg";
    burger.src = "images/SVG/hamburger-black.svg";
    burger_2.src = "images/SVG/hamburger-black.svg";
    logo.src = "images/PNG/logo-black.png";
  } else {
    header.classList.remove("bg-white");
    navItems.classList.add("text-white");
    counter.classList.remove("bg-black", "text-white");
    counter.classList.add("bg-white", "text-black");
    devider.classList.add("text-white");
    // home.classList.remove('text-[#50c5bc]');

    logo.src = "images/PNG/logo-white.png";
    cart.src = "images/SVG/cart-white.svg";
    search.src = "images/SVG/search-white.svg";
    burger.src = "images/SVG/hamburger-white.svg";
    burger_2.src = "images/SVG/hamburger-white.svg";
  }
});

// ____________________HAMBURGER MENU____________________
const hamButton = document.querySelector(".lg-hamburger");
const lgHamMenu = document.querySelector(".lg-ham-menu");
const cross = document.querySelector(".cross");
hamButton.addEventListener("click", () => {
  lgHamMenu.classList.toggle("lg-active");
  console.log("hello world");
});

cross.addEventListener("click", () => {
  lgHamMenu.classList.toggle("lg-active");
});

// ____________________SM-HAMBURGER MENU____________________
const hmaburger = document.querySelector(".hamburger");
const hamMenu = document.querySelector(".ham-menu");

hmaburger.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  console.log("heelo world");
});


function insertCard() {
  const container = document.querySelector('.card-container');
  cardData.forEach((item) => {
    container.innerHTML +=`
       <div class="flex justify-center items-center flex-col">
      <div class="flex justify-center items-center md:h-[300px] md:w-[300px] h-[250px] w-[250px] group">
        <img src="${item.product_image}" class="h-full w-full" alt="">
        <button class="absolute bg-[#50c5bc] px-14 py-4 text-white font-semibold hover:bg-white  text-sm hover:text-black transition-all duration-500 ease opacity-0 group-hover:opacity-100 uppercase">Add to cart</button>
      </div>
      <div class="flex justify-center items-center -space-y-4 flex-col">
      <p class="mt-6 text-2xl font-semibold text-[#3a3a3a] z-20">${item.name}</p>
      <div class="h-[80px] z-10">
        <img src="images/PNG/star.png" class="h-full" alt="">
      </div>
      <p class="z-20 text-[#3a3a3a] font-semibold text-md">$190.00</p>
    </div>
     </div>
  `})
}
insertCard()