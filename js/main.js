const navBtn = document.querySelector('.nav__tooggle');
const menuIcon = document.querySelector('.menu-icon');
const navMobile = document.querySelector('.nav');


navBtn.onclick = function(){
menuIcon.classList.toggle('menu-icon-active')
navMobile.classList.toggle('nav--mobile')

}

