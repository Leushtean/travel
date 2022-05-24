const menuBtn = document.querySelector('.js--menu-toggle');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	this.classList.toggle('menu-toggle--active')
	menu.classList.toggle('menu--active')
})