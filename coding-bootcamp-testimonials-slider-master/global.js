const viewHeight = document.documentElement.clientHeight;
const padding = (8.09 * viewHeight) / 100;
if(padding > 0){
    document.querySelector('.c-body').style['padding'] = `${padding}px 0 ${padding-10}px`;
}


function nextSlideEvent() {
    const { dataset, children } = document.querySelector('.c-slider__container');
    const slideText = document.querySelector('.c-carousel-item-2__container');

    const currentIndex = Number(dataset.position);

    const items = Array.from(children);
    const itemsText = Array.from(slideText.children);

    let nextSlide = currentIndex + 1;
    nextSlide = nextSlide === items.length ? 0 : nextSlide;

    items[currentIndex].classList.add('o-hidde');
    items[nextSlide].classList.remove('o-hidde');
    itemsText[currentIndex].classList.add('o-hidde');
    itemsText[nextSlide].classList.remove('o-hidde');

    dataset.position = nextSlide;
}

function previusSlideEvent() {
    const { dataset, children } = document.querySelector('.c-slider__container');
    const slideText = document.querySelector('.c-carousel-item-2__container');

    const currentIndex = Number(dataset.position);

    const items = Array.from(children);
    const itemsText = Array.from(slideText.children);

    let previusSlide = currentIndex - 1;
    previusSlide = previusSlide < 0 ? (items.length - 1) : previusSlide;

    items[currentIndex].classList.add('o-hidde');
    items[previusSlide].classList.remove('o-hidde');
    itemsText[currentIndex].classList.add('o-hidde');
    itemsText[previusSlide].classList.remove('o-hidde');

    dataset.position = previusSlide;
}