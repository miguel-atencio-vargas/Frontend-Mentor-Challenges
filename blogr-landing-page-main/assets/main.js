const burguerBtn = document.querySelector('.c-header__menu-mobile');
let currentBurguer = './images/icon-close.svg';
const headerMenu = document.querySelector('.c-pop-up');

const subMenus = document.querySelectorAll('.c-nav__title');

function openMenuMobile() {
    headerMenu.classList.toggle('o-hidde');
    const img = burguerBtn.querySelector('img').attributes[0];
    const aux = img.nodeValue;
    img.nodeValue = currentBurguer;
    currentBurguer = aux;
}

function manageDropdownMenu(){
    subMenus.forEach(e => {
        if (this != e) e.control.checked = false;
    });
}

burguerBtn.addEventListener('click', openMenuMobile);

subMenus.forEach(e => {
    e.addEventListener('click', manageDropdownMenu)
})
