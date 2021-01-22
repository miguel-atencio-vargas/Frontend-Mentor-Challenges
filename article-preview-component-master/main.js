function onClickShare(){
    const viewWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if(viewWidth <= 924){
        const footer = document.querySelector('.c-share-profile');
        const footerJs = document.querySelector('.c-share-profile-js');
        const container = document.querySelector('.c-article__container');

        footer.classList.add('o-hidde');
        footerJs.classList.remove('o-hidde');
        container.style['padding-bottom'] = 0;
    }else{
        if (this.dataset.state === 'false'){
            const popUp = document.querySelector('.c-share-profile-js-2');
            popUp.classList.remove('o-hidde');
            this.dataset.state = 'true';
        }else{
            const popUp = document.querySelector('.c-share-profile-js-2');
            popUp.classList.add('o-hidde')
            this.dataset.state = 'false'
        }

        
    }
}

function onClickShareAgain(){
    const footer = document.querySelector('.c-share-profile');
    const footerJs = document.querySelector('.c-share-profile-js');
    const container = document.querySelector('.c-article__container');

    footer.classList.remove('o-hidde');
    footerJs.classList.add('o-hidde');
    container.style['padding-bottom'] = '10px';

}


const btnShare = document.querySelector('.c-share-profile__btn');
const btnMobile = document.querySelector('.c-share-profile-js__btn');


btnShare.addEventListener('click', onClickShare);
btnMobile.addEventListener('click', onClickShareAgain);