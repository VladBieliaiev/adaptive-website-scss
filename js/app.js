const menu = document.querySelector("#menu");
const burger = document.querySelector("#burger");



burger.addEventListener('click', (e) => {
   e.preventDefault();
   menu.classList.toggle("active");
})