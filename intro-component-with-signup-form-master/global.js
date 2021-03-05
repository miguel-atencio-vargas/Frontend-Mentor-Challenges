const inputs = document.querySelectorAll('.c-form__input');

const button = document.querySelector('.c-form__button');

function validateEmail(email) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(email);
}

function validatePassword(password) {
    const validRegex = /(?=.{8,})/;
    return validRegex.test(password);
}

function validateInputs() {
    let itsValid = true;
    inputs.forEach((input) => {
        const childs = input.parentElement.children;
        const value = input.value;
        const type = input.attributes.type.value;
        
        
        childs[1].classList.add('o-hidde');
        childs[2].classList.add('o-hidde');

        if (value){
            switch (type) {
                case 'email':
                    if (!validateEmail(value)) {
                        childs[2].textContent = 'Looks like this is not an email';
                        childs[1].classList.remove('o-hidde');
                        childs[2].classList.remove('o-hidde');
                        itsValid = false;
                    }
                    break;
                case 'password':
                    if (!validatePassword(value)) {
                        childs[2].textContent = 'Looks like this is not a secure password';
                        childs[1].classList.remove('o-hidde');
                        childs[2].classList.remove('o-hidde');
                        itsValid = false;
                    }
                    break;
            }
        }else{
            childs[2].textContent = `${input.placeholder} cannot be empty`;
            childs[1].classList.remove('o-hidde');
            childs[2].classList.remove('o-hidde');
            itsValid = false;
        }
    });
    if (itsValid) alert('Your form was submited successfully!');
}

button.addEventListener('click', validateInputs)