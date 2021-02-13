const card = document.querySelectorAll('.c-card');


function onClickCard(){
    this.children[0].children[0].children[1].classList.toggle('o-hidde');
}
card.forEach(e => {
    e.addEventListener('click', onClickCard)
})