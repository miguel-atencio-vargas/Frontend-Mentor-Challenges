const card = document.querySelectorAll('.c-card');


function onClickCard(){
    this.querySelector('.c-card-item__buttons').classList.toggle('o-hidde');
    this.querySelector('.c-card-item__img').classList.toggle('o-blur');
}

card.forEach(e => {
    e.addEventListener('click', onClickCard)
});
