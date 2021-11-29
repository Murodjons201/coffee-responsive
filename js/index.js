const elHamburgerBtn = document.querySelector(".site-header__hamburger");
const elHeader = document.querySelector(".header");

elHamburgerBtn.addEventListener('click', ()=> {
elHeader.classList.toggle("header--open");
})
