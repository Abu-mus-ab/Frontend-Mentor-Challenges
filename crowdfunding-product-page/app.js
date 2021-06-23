const mobileMenu = document.querySelector('.mobile-menu');
const modal = document.querySelector('.modal');


let source = false;

mobileMenu.addEventListener('click', () => {
    source = !source;

    mobileMenu.src = source  ?'images/icon-close-menu.svg' : 'images/icon-hamburger.svg';
    
    document.querySelector('nav').classList.toggle('show');

});

