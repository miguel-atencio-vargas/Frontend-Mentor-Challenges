
const input = document.querySelector('.c-email__input');
const button = document.querySelector('.c-email__button');
const img = document.querySelector('.c-email__error-img');
const message = document.querySelector('.c-email__error-message');
const success = document.querySelector('.c-email__success-message');

input.addEventListener('invalid', (() => {
    return function (e) {
        e.preventDefault();
        document.querySelector(".c-email__input").focus();
    };
})(), true);

button.addEventListener('click', () => {
    const regExp = /\S+@\S+\.\S+/;
    if (!input.value|| !regExp.test(input.value)) {
        img.classList.remove('o-hidde');
        message.classList.remove('o-hidde');
    }else{
        success.classList.remove('o-hidde');
    }
});

input.addEventListener('keyup', () => {
    success.classList.add('o-hidde');
    img.classList.add('o-hidde');
    message.classList.add('o-hidde');

})