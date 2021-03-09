const input = document.querySelector('.c-form__input');
const button = document.querySelector('.c-form__button');

function validateEmail(){
    const input = document.querySelector('.c-form__input');
    const errorMessage = document.querySelector('.c-form__p');
    errorMessage.classList.add('o-hidde');
    input.classList.remove('c-form__input__error');
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (!validRegex.test(input.value)){
        errorMessage.classList.remove('o-hidde');
        input.classList.add('c-form__input__error');
    }else{
        alert('You\'ll be notified');
    }

}

button.addEventListener('click', validateEmail);