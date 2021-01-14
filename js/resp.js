burger = document.querySelector('.burger');
menu = document.querySelector('.menu');
navbar = document.querySelector('.navbar');
// burger = document.querySelector('.burger');
burger.addEventListener('click', ()=>{
    menu.classList.toggle('head-height-resp');
    navbar.classList.toggle('v-class-resp');
})
